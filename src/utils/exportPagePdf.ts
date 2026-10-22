import { jsPDF } from 'jspdf';
import { domToCanvas } from 'modern-screenshot';

const EXPORT_DESKTOP_WIDTH = 1280;
const MAX_SINGLE_PAGE_HEIGHT = 12000;
const PDF_FILENAME = 'Pagina_Profissional_Wemerson_Bastos.pdf';

interface LinkAnnotation {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
}

interface TextLayerItem {
  text: string;
  x: number;
  y: number;
  fontSize: number;
}

async function waitForAssets(root: HTMLElement): Promise<void> {
  if ('fonts' in document) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue even if font readiness check fails
    }
  }

  const images = Array.from(root.querySelectorAll('img'));
  await Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        }),
    ),
  );
}

export async function exportPageToPdf(sourceElement: HTMLElement): Promise<void> {
  const savedScrollX = window.scrollX;
  const savedScrollY = window.scrollY;

  const offscreenHost = document.createElement('div');
  offscreenHost.setAttribute('aria-hidden', 'true');
  offscreenHost.style.position = 'fixed';
  offscreenHost.style.left = '-99999px';
  offscreenHost.style.top = '0';
  offscreenHost.style.width = `${EXPORT_DESKTOP_WIDTH}px`;
  offscreenHost.style.zIndex = '-100';
  offscreenHost.style.pointerEvents = 'none';
  offscreenHost.style.backgroundColor = '#FFFFFF';

  const clone = sourceElement.cloneNode(true) as HTMLElement;
  clone.classList.add('pdf-export-clone');
  clone.style.width = `${EXPORT_DESKTOP_WIDTH}px`;
  clone.style.minWidth = `${EXPORT_DESKTOP_WIDTH}px`;
  clone.style.maxWidth = `${EXPORT_DESKTOP_WIDTH}px`;

  // Ensure all reveal elements are in their final visible state and reset scroll parallax offsets
  // while preserving original SVG transform="rotate(...)" attributes.
  clone
    .querySelectorAll<HTMLElement>('.hero-illus-enter, .reveal-block, .illus-stage')
    .forEach((el) => {
      el.classList.add('is-visible');
    });
  clone.querySelectorAll<HTMLElement>('[data-parallax-section]').forEach((el) => {
    el.style.setProperty('--px-bg', '0px');
    el.style.setProperty('--px-deco', '0px');
    el.style.setProperty('--px-main', '0px');
  });

  offscreenHost.appendChild(clone);
  document.body.appendChild(offscreenHost);

  try {
    await waitForAssets(clone);
    // Allow layout to settle at 1280px desktop width
    await new Promise((resolve) => window.requestAnimationFrame(() => resolve(undefined)));
    await new Promise((resolve) => window.setTimeout(resolve, 80));

    const cloneRect = clone.getBoundingClientRect();
    const totalWidth = EXPORT_DESKTOP_WIDTH;
    const totalHeight = Math.ceil(clone.scrollHeight || cloneRect.height);

    // Collect clickable external/contact links (http, https, mailto, tel)
    const linkAnnotations: LinkAnnotation[] = [];
    const anchorElements = Array.from(clone.querySelectorAll<HTMLAnchorElement>('a[href]'));
    anchorElements.forEach((anchor) => {
      const rawHref = anchor.getAttribute('href') || '';
      if (!rawHref || rawHref.startsWith('#')) return;
      const rect = anchor.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      linkAnnotations.push({
        x: Math.max(0, rect.left - cloneRect.left),
        y: Math.max(0, rect.top - cloneRect.top),
        width: rect.width,
        height: rect.height,
        url: anchor.href || rawHref,
      });
    });

    // Collect primary text blocks for an invisible selectable/searchable text layer
    const textItems: TextLayerItem[] = [];
    const textSelectors = 'h1, h2, h3, p, li, th, td, blockquote';
    const textElements = Array.from(clone.querySelectorAll<HTMLElement>(textSelectors));
    textElements.forEach((el) => {
      const text = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!text) return;
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const computed = window.getComputedStyle(el);
      const fontSize = Math.max(8, Math.min(28, parseFloat(computed.fontSize) || 12));

      textItems.push({
        text,
        x: Math.max(0, rect.left - cloneRect.left),
        y: Math.max(0, rect.top - cloneRect.top + fontSize),
        fontSize,
      });
    });

    // Render the 1280px desktop clone at 2x resolution
    const canvas = await domToCanvas(clone, {
      width: totalWidth,
      height: totalHeight,
      scale: 2,
      backgroundColor: '#FFFFFF',
    });

    if (totalHeight <= MAX_SINGLE_PAGE_HEIGHT) {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [totalWidth, totalHeight],
        hotfixes: ['px_scaling'],
        compress: true,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      pdf.addImage(imgData, 'JPEG', 0, 0, totalWidth, totalHeight, undefined, 'FAST');

      // Embed invisible selectable text layer
      pdf.setTextColor(255, 255, 255);
      textItems.forEach((item) => {
        pdf.setFontSize(item.fontSize);
        pdf.text(item.text, item.x, item.y, {
          maxWidth: totalWidth - item.x - 16,
          renderingMode: 'invisible',
        });
      });

      // Register clickable PDF hyperlink annotations
      linkAnnotations.forEach((link) => {
        pdf.link(link.x, link.y, link.width, link.height, { url: link.url });
      });

      pdf.save(PDF_FILENAME);
    } else {
      // Fallback if page height ever exceeds 12000px: slice cleanly at section boundaries
      const sections = Array.from(
        clone.querySelectorAll<HTMLElement>('[data-pdf-section], footer'),
      );
      const breakPoints: number[] = [0];
      let currentStart = 0;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const bottom = Math.ceil(rect.bottom - cloneRect.top);
        if (bottom - currentStart > MAX_SINGLE_PAGE_HEIGHT - 1000) {
          breakPoints.push(bottom);
          currentStart = bottom;
        }
      });
      if (breakPoints[breakPoints.length - 1] < totalHeight) {
        breakPoints.push(totalHeight);
      }

      const firstSliceHeight = breakPoints[1] - breakPoints[0];
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [totalWidth, firstSliceHeight],
        hotfixes: ['px_scaling'],
        compress: true,
      });

      for (let i = 0; i < breakPoints.length - 1; i++) {
        const sliceStart = breakPoints[i];
        const sliceHeight = breakPoints[i + 1] - sliceStart;

        if (i > 0) {
          pdf.addPage([totalWidth, sliceHeight], 'portrait');
        }

        const sliceCanvas = document.createElement('canvas');
        sliceCanvas.width = totalWidth * 2;
        sliceCanvas.height = sliceHeight * 2;
        const ctx = sliceCanvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(
            canvas,
            0,
            sliceStart * 2,
            totalWidth * 2,
            sliceHeight * 2,
            0,
            0,
            totalWidth * 2,
            sliceHeight * 2,
          );
          const sliceImg = sliceCanvas.toDataURL('image/jpeg', 0.95);
          pdf.addImage(sliceImg, 'JPEG', 0, 0, totalWidth, sliceHeight, undefined, 'FAST');
        }

        linkAnnotations
          .filter((l) => l.y >= sliceStart && l.y < sliceStart + sliceHeight)
          .forEach((l) => {
            pdf.link(l.x, l.y - sliceStart, l.width, l.height, { url: l.url });
          });
      }

      pdf.save(PDF_FILENAME);
    }
  } finally {
    if (offscreenHost.parentNode) {
      offscreenHost.parentNode.removeChild(offscreenHost);
    }
    window.scrollTo(savedScrollX, savedScrollY);
  }
}
