import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Copy,
  ExternalLink,
  FileDown,
  Globe2,
  GraduationCap,
  Landmark,
  Layers,
  Loader2,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import {
  EducationTechBridgeIllustration,
  HeroProfileIllustration,
  WorkstationIllustration,
} from './components/CurriculumIllustrations';
import { exportPageToPdf } from './utils/exportPagePdf';

interface Course {
  title: string;
  institution: string;
  category: 'avamec' | 'parceiros' | 'lattes';
  area: string;
}

const WHATSAPP_URL =
  'https://wa.me/5588997204035?text=Ol%C3%A1%2C%20Wemerson!%20Acessei%20seu%20curr%C3%ADculo%20profissional%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.';

const INSTAGRAM_URL = 'https://www.instagram.com/wemerson.bastos7/';
const NEXORA_URL = 'https://www.instagram.com/nexora_dev_/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/wemerson-bastos-129451252';

const techStripItems = [
  'HTML5 & CSS3',
  'JavaScript',
  'No-Code',
  'UX/UI Design',
  'Machine Learning & IA',
  'Análise de Dados',
  'Tecnologias Educacionais (BNCC)',
  'Google for Education',
];

const corePillars = [
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento Web & IA',
    description:
      'Construção de interfaces com HTML, CSS, JavaScript, recursos No-code e fundamentos de Machine Learning voltados à educação.',
    badge: '</>',
  },
  {
    id: 'pedagogia',
    title: 'Inovação Pedagógica',
    description:
      'Criação de plataformas e jogos educacionais alinhados à BNCC e às metodologias ativas para personalizar o aprendizado.',
    badge: 'BNCC',
  },
  {
    id: 'gestao',
    title: 'Gestão Pública & Equipes',
    description:
      'Atuação como Superintendente da SME de Tauá e em pedagogia empresarial, unindo planejamento estratégico e impacto social.',
    badge: 'SME',
  },
];

const leftCompetencies = [
  {
    title: 'Desenvolvimento Web',
    description:
      'Criação de aplicações e interfaces utilizando HTML, CSS, JavaScript, plataformas No-code e boas práticas de UX/UI.',
    icon: Code2,
  },
  {
    title: 'Machine Learning Engineer',
    description:
      'Fundamentos de IA e aprendizado de máquina, modelagem e análise de dados e aplicações educacionais inteligentes.',
    icon: BrainCircuit,
  },
  {
    title: 'Desenvolvedor Educacional',
    description:
      'Criação de plataformas e jogos educacionais, tecnologias para engajamento e personalização e adequação à BNCC e metodologias ativas.',
    icon: GraduationCap,
  },
];

const rightCompetencies = [
  {
    title: 'Pedagogo Empresarial',
    description:
      'Treinamentos corporativos, desenvolvimento de equipes e gestão de aprendizagem organizacional em ambientes de inovação.',
    icon: Users,
  },
  {
    title: 'Pedagogo Especializado',
    description:
      'Alfabetização e letramento, psicomotricidade, desenvolvimento humano e educação inclusiva apoiada por recursos digitais.',
    icon: BookOpen,
  },
  {
    title: 'Graduação em Curso',
    description:
      'Análise e Desenvolvimento de Sistemas pela Universidade Descomplica, integrando engenharia de software à educação.',
    icon: Layers,
  },
];

const accordionAreas = [
  {
    id: 'sme-taua',
    title: 'Superintendente da SME de Tauá',
    summary: 'Gestão de políticas públicas educacionais e inovação na rede municipal desde 2018.',
    details: [
      'Gestão de políticas públicas educacionais no município de Tauá-CE.',
      'Planejamento estratégico e inovação aplicados à rede municipal de ensino.',
      'Acompanhamento pedagógico e administrativo de unidades escolares e equipes.',
    ],
  },
  {
    id: 'nexora-agencia',
    title: 'Fundador da NEXORA',
    summary: 'Fundador da NEXORA, agência de desenvolvimento de soluções digitais.',
    details: [
      'Fundador da NEXORA, agência de desenvolvimento de soluções digitais.',
      'Desenvolvimento de interfaces, páginas web e soluções tecnológicas centradas na experiência do usuário.',
    ],
    externalLink: {
      label: 'Conheça a NEXORA',
      url: NEXORA_URL,
      ariaLabel: 'Conheça a NEXORA, agência de desenvolvimento de soluções digitais, no Instagram',
    },
  },
  {
    id: 'ml-educacao',
    title: 'Machine Learning & Dados Aplicados ao Ensino',
    summary: 'Modelagem e análise de dados para soluções educacionais inteligentes.',
    details: [
      'Fundamentos de inteligência artificial e aprendizado de máquina.',
      'Modelagem e análise de dados educacionais para suporte à decisão.',
      'Concepção de aplicações educacionais inteligentes focadas na personalização.',
    ],
  },
  {
    id: 'dev-web-ux',
    title: 'Desenvolvimento Web, No-Code & UX/UI',
    summary: 'Interfaces acessíveis e centradas na experiência de educadores e estudantes.',
    details: [
      'Desenvolvimento front-end com HTML, CSS e JavaScript.',
      'Agilidade na prototipação e entrega com ferramentas No-code.',
      'Design de experiência e interface (UX/UI) voltado à usabilidade e inclusão.',
    ],
  },
  {
    id: 'pedagogia-integral',
    title: 'Pedagogia Especializada & Aprendizagem Corporativa',
    summary: 'Da alfabetização e educação inclusiva ao desenvolvimento de equipes.',
    details: [
      'Alfabetização, letramento, psicomotricidade e desenvolvimento humano.',
      'Educação especial e inclusiva mediada por tecnologias e recursos digitais.',
      'Treinamentos corporativos e gestão da aprendizagem organizacional.',
    ],
  },
];

const solutionCards = [
  {
    title: 'Plataformas & Jogos Educacionais',
    subtitle: 'Engajamento e BNCC',
    description:
      'Desenvolvimento de experiências digitais interativas e jogos pedagógicos adequados à BNCC e às metodologias ativas de aprendizagem.',
    type: 'platform',
  },
  {
    title: 'Aplicações Educacionais Inteligentes',
    subtitle: 'Machine Learning & Dados',
    description:
      'Uso de fundamentos de IA, aprendizado de máquina e análise de dados para personalizar trilhas e ampliar o alcance do conhecimento.',
    type: 'ml',
  },
  {
    title: 'Soluções Web & Vibe-Code',
    subtitle: 'HTML · CSS · JS · UX/UI',
    description:
      'Construção de páginas, ferramentas digitais e fluxos No-code com foco em clareza visual, acessibilidade e facilidade de uso.',
    type: 'web',
  },
  {
    title: 'Formação & Educação Inclusiva',
    subtitle: 'Escolas e Organizações',
    description:
      'Projetos de formação continuada, treinamentos corporativos, alfabetização, psicomotricidade e recursos digitais inclusivos.',
    type: 'inclusion',
  },
];

const trajectorySteps = [
  {
    step: '1',
    title: 'Rede Municipal de Tauá-CE',
    period: 'Desde 2018',
    description:
      'Ingresso na rede municipal de ensino de Tauá-CE como Professor Pedagogo Especialista, unindo prática docente e tecnologia.',
  },
  {
    step: '2',
    title: 'Superintendência da SME de Tauá',
    period: 'Atuação Atual',
    description:
      'Liderança na gestão de políticas públicas educacionais, planejamento estratégico, inovação e acompanhamento pedagógico e administrativo.',
  },
  {
    step: '3',
    title: 'Análise e Desenvolvimento de Sistemas',
    period: 'Graduação em Curso',
    description:
      'Formação superior em andamento pela Universidade Descomplica, aprofundando competências em Desenvolvimento Web e Machine Learning.',
  },
];

const courses: Course[] = [
  {
    title: 'Formação Continuada em Educação Infantil',
    institution: 'AVAMEC/MEC',
    category: 'avamec',
    area: 'Educação Básica',
  },
  {
    title: 'Formação em Alfabetização e Letramento',
    institution: 'AVAMEC/MEC',
    category: 'avamec',
    area: 'Alfabetização',
  },
  {
    title: 'Formação em Educação Especial e Inclusiva',
    institution: 'AVAMEC/MEC',
    category: 'avamec',
    area: 'Inclusão & Acessibilidade',
  },
  {
    title: 'Gestão Democrática e Participativa na Escola',
    institution: 'MEC',
    category: 'avamec',
    area: 'Gestão Escolar',
  },
  {
    title: 'Metodologias Ativas e Ensino Híbrido',
    institution: 'Google for Education',
    category: 'parceiros',
    area: 'Inovação & Tecnologia',
  },
  {
    title: 'Psicomotricidade na Educação Básica',
    institution: 'Plataforma Lattes',
    category: 'lattes',
    area: 'Desenvolvimento Humano',
  },
  {
    title: 'Tecnologias Digitais Aplicadas à Educação',
    institution: 'AVAMEC/MEC',
    category: 'avamec',
    area: 'Tecnologias Educacionais',
  },
  {
    title: 'Avaliação Educacional e da Aprendizagem',
    institution: 'AVAMEC/MEC',
    category: 'avamec',
    area: 'Gestão Pedagógica',
  },
  {
    title: 'Educação Socioemocional',
    institution: 'Instituto Ayrton Senna',
    category: 'parceiros',
    area: 'Desenvolvimento Integral',
  },
  {
    title: 'Planejamento e Gestão Escolar',
    institution: 'AVAMEC/MEC',
    category: 'avamec',
    area: 'Planejamento Estratégico',
  },
  {
    title: 'Educação Ambiental e Sustentabilidade',
    institution: 'Plataforma Lattes',
    category: 'lattes',
    area: 'Sustentabilidade',
  },
  {
    title: 'Formação de Gestores e Supervisores Escolares',
    institution: 'AVAMEC/MEC',
    category: 'avamec',
    area: 'Liderança Educacional',
  },
];

const languages = [
  {
    language: 'Português',
    level: 'Nativo',
    detail: 'Comunicação acadêmica, técnica e institucional',
  },
  {
    language: 'Espanhol',
    level: 'Intermediário',
    detail: 'Leitura técnica e conversação intermediária',
  },
  {
    language: 'Inglês',
    level: 'Básico',
    detail: 'Leitura de documentação técnica e fundamentos',
  },
];

export default function App() {
  const [openAccordion, setOpenAccordion] = useState<string>('sme-taua');
  const [courseFilter, setCourseFilter] = useState<'all' | 'avamec' | 'parceiros' | 'lattes'>(
    'all',
  );
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // PDF Export state
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [pdfExportError, setPdfExportError] = useState<string | null>(null);

  // Hero illustration initial state: starts false when motion is enabled so the 600ms entry transition runs
  const [heroIllusRevealed, setHeroIllusRevealed] = useState(false);

  const pageRootRef = useRef<HTMLDivElement | null>(null);
  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const sobreSectionRef = useRef<HTMLElement | null>(null);
  const atuacaoSectionRef = useRef<HTMLElement | null>(null);

  // Enable progressive enhancement class synchronously before paint when motion is permitted
  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      document.documentElement.classList.add('js-motion-ready');
    } else {
      document.documentElement.classList.remove('js-motion-ready');
      setHeroIllusRevealed(true);
    }
  }, []);

  useEffect(() => {
    const rootEl = pageRootRef.current;
    if (!rootEl) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const applyReducedMotionState = () => {
      document.documentElement.classList.remove('js-motion-ready');
      setHeroIllusRevealed(true);
      rootEl.querySelectorAll<HTMLElement>('[data-reveal="true"]').forEach((el) => {
        el.classList.add('is-visible');
      });
      [heroContainerRef.current, sobreSectionRef.current, atuacaoSectionRef.current].forEach(
        (sec) => {
          if (sec) {
            sec.style.setProperty('--px-bg', '0px');
            sec.style.setProperty('--px-deco', '0px');
            sec.style.setProperty('--px-main', '0px');
          }
        },
      );
    };

    if (mediaQuery.matches) {
      applyReducedMotionState();
      return;
    }

    document.documentElement.classList.add('js-motion-ready');

    // 1. Trigger Hero Illustration 600ms entry animation after initial paint
    let raf1 = 0;
    let raf2 = 0;
    const heroTimer = window.setTimeout(() => {
      raf1 = window.requestAnimationFrame(() => {
        raf2 = window.requestAnimationFrame(() => {
          setHeroIllusRevealed(true);
        });
      });
    }, 45);

    // 2. Element-level IntersectionObserver: reveals each block once as it enters the viewport
    const revealElements = Array.from(rootEl.querySelectorAll<HTMLElement>('[data-reveal="true"]'));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    // 3. Parallax visibility observer: suspends offscreen sections
    const parallaxSections: Array<{ key: string; el: HTMLElement | null }> = [
      { key: 'hero', el: heroContainerRef.current },
      { key: 'sobre', el: sobreSectionRef.current },
      { key: 'atuacao', el: atuacaoSectionRef.current },
    ];
    const activeParallaxMap: Record<string, boolean> = {
      hero: true,
      sobre: false,
      atuacao: false,
    };

    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        let becameVisible = false;
        entries.forEach((entry) => {
          const key = entry.target.getAttribute('data-parallax-section');
          if (key) {
            activeParallaxMap[key] = entry.isIntersecting;
            if (entry.isIntersecting) {
              becameVisible = true;
            }
          }
        });
        if (becameVisible) {
          scheduleParallax();
        }
      },
      { threshold: 0.01, rootMargin: '120px 0px 120px 0px' },
    );

    parallaxSections.forEach(({ el }) => {
      if (el) parallaxObserver.observe(el);
    });

    // Read centralized amplitude variables from :root
    const rootStyle = window.getComputedStyle(document.documentElement);
    const parsePxVar = (name: string, fallback: number) => {
      const val = parseFloat(rootStyle.getPropertyValue(name));
      return Number.isFinite(val) ? val : fallback;
    };

    const amplitudes = {
      desktopBg: parsePxVar('--parallax-amp-bg-desktop', 22),
      desktopDeco: parsePxVar('--parallax-amp-deco-desktop', 18),
      desktopMain: parsePxVar('--parallax-amp-main-desktop', 15),
      mobileBg: parsePxVar('--parallax-amp-bg-mobile', 9),
      mobileDeco: parsePxVar('--parallax-amp-deco-mobile', 7),
      mobileMain: parsePxVar('--parallax-amp-main-mobile', 5),
    };

    // 4. Zero-rerender requestAnimationFrame parallax coordinator (batched reads -> batched writes)
    let scrollTicking = false;
    let parallaxRafId = 0;

    const updateParallax = () => {
      scrollTicking = false;
      if (document.hidden || mediaQuery.matches) return;

      const viewportHeight = window.innerHeight || 800;
      const isMobile = window.innerWidth < 768;

      // Amplitudes within specification: Desktop 15–25px | Mobile 5–10px
      const ampBg = isMobile ? amplitudes.mobileBg : amplitudes.desktopBg;
      const ampDeco = isMobile ? amplitudes.mobileDeco : amplitudes.desktopDeco;
      const ampMain = isMobile ? amplitudes.mobileMain : amplitudes.desktopMain;

      // Batch DOM Reads
      const measurements: Array<{ el: HTMLElement; norm: number }> = [];
      parallaxSections.forEach(({ key, el }) => {
        if (!el || !activeParallaxMap[key]) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const rawNorm = (viewportHeight / 2 - center) / (viewportHeight * 0.65);
        const norm = Math.max(-1, Math.min(1, rawNorm));
        measurements.push({ el, norm });
      });

      // Batch DOM Writes via CSS custom properties (no React re-render)
      measurements.forEach(({ el, norm }) => {
        const bgShift = (norm * ampBg).toFixed(2);
        const decoShift = (-norm * ampDeco).toFixed(2);
        const mainShift = (norm * ampMain).toFixed(2);

        el.style.setProperty('--px-bg', `${bgShift}px`);
        el.style.setProperty('--px-deco', `${decoShift}px`);
        el.style.setProperty('--px-main', `${mainShift}px`);
      });
    };

    const scheduleParallax = () => {
      if (scrollTicking || document.hidden || mediaQuery.matches) return;
      scrollTicking = true;
      parallaxRafId = window.requestAnimationFrame(updateParallax);
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        scheduleParallax();
      }
    };

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        applyReducedMotionState();
      } else {
        document.documentElement.classList.add('js-motion-ready');
        scheduleParallax();
      }
    };

    window.addEventListener('scroll', scheduleParallax, { passive: true });
    window.addEventListener('resize', scheduleParallax, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    // Initial parallax position calculation
    updateParallax();

    return () => {
      window.clearTimeout(heroTimer);
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.cancelAnimationFrame(parallaxRafId);
      window.removeEventListener('scroll', scheduleParallax);
      window.removeEventListener('resize', scheduleParallax);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      revealObserver.disconnect();
      parallaxObserver.disconnect();
    };
  }, []);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      setCopiedField(null);
    }
  };

  const handleDownloadPdf = async () => {
    if (isExportingPdf || !pageRootRef.current) return;
    setIsExportingPdf(true);
    setPdfExportError(null);

    try {
      await exportPageToPdf(pageRootRef.current);
    } catch {
      setPdfExportError(
        'Não foi possível concluir a geração do PDF neste momento. Tente novamente em instantes.',
      );
    } finally {
      setIsExportingPdf(false);
    }
  };

  return (
    <div ref={pageRootRef} className="min-h-screen bg-white text-[#15115A]">
      {/* HERO & TOP BAR */}
      <div
        ref={heroContainerRef}
        data-parallax-section="hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#0878F9] via-[#0789F6] to-[#00BFEF] text-white"
      >
        {/* Decorative Background Layer with Subtle Parallax (.parallax-bg) */}
        <svg
          aria-hidden="true"
          className="parallax-bg pointer-events-none absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M-100 520L1540 240V720H-100V520Z" fill="#00BFEF" />
          <path d="M-100 380L1540 640V720H-100V380Z" fill="#0558C8" fillOpacity="0.45" />
        </svg>

        {/* Top Bar Contract: 3 zones (Brand | 5 Nav Links | 1 Primary Action) */}
        <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <a
            href="#topo"
            id="topo"
            className="font-display text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            wemerson<span className="text-[#D8F3FF]">.</span>bastos
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-white/95"
          >
            <a
              href="#sobre"
              className="btn-interactive hover:text-white hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Sobre Mim
            </a>
            <a
              href="#competencias"
              className="btn-interactive hover:text-white hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Competências
            </a>
            <a
              href="#atuacao"
              className="btn-interactive hover:text-white hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Atuação
            </a>
            <a
              href="#solucoes"
              className="btn-interactive hover:text-white hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Soluções
            </a>
            <a
              href="#formacao"
              className="btn-interactive hover:text-white hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Formação
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contato"
              className="btn-interactive hidden sm:inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-[#0878F9] shadow-sm hover:bg-[#F2F9FF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Entrar em Contato
            </a>

            <button
              type="button"
              data-pdf-hide="true"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="btn-interactive inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu móvel"
            data-pdf-hide="true"
            className="relative z-20 mx-4 mb-4 rounded-2xl border border-white/20 bg-[#0767D8]/95 p-5 backdrop-blur-md sm:mx-6 md:hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-medium text-white">
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                Sobre Mim
              </a>
              <a
                href="#competencias"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                Competências
              </a>
              <a
                href="#atuacao"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                Atuação e Experiência
              </a>
              <a
                href="#solucoes"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                Soluções Educacionais
              </a>
              <a
                href="#formacao"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                Formação e Idiomas
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-center font-semibold text-[#0878F9]"
              >
                Entrar em Contato
              </a>
            </div>
          </nav>
        )}

        {/* 1. HERO CONTENT: Immediately available text/buttons on left + ILUSTRAÇÃO 1 (600ms, 16px entry) on right */}
        <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 pt-8 pb-16 sm:px-6 md:grid-cols-12 md:pt-12 md:pb-24 lg:px-8">
          <div className="md:col-span-7">
            <p className="text-sm font-medium tracking-wide text-[#E0F4FF]">
              Wemerson Bastos Evangelista · Tauá-CE
            </p>

            <h1 className="mt-3 font-display text-3xl leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.35rem] [text-wrap:balance]">
              <span className="block font-bold">Educação e Tecnologia</span>
              <span className="mt-1 block font-normal text-[#E5F7FF]">
                unidas por propósito e inovação
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
              Sou <strong>Professor Pedagogo Especialista</strong> com expertise em{' '}
              <strong>Tecnologia da Informação</strong>, atuando em{' '}
              <strong>Desenvolvimento Web, Machine Learning e Tecnologias Educacionais</strong>.
              Superintendente da <strong>SME de Tauá</strong> e graduando em Análise e
              Desenvolvimento de Sistemas pela Descomplica.
            </p>

            {/* NEXORA Founder Highlight & Direct Instagram Link */}
            <div className="mt-5 flex max-w-xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-xs">
              <p className="text-xs font-medium leading-relaxed text-white sm:text-sm">
                <strong>Fundador da NEXORA</strong>, agência de desenvolvimento de soluções
                digitais.
              </p>
              <a
                href={NEXORA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conheça a NEXORA, agência de desenvolvimento de soluções digitais, no Instagram"
                className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#0878F9] shadow-xs hover:bg-[#F5FBFF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Conheça a NEXORA</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Main Action Buttons Row (Immediately interactive, 180ms hover transition, max 2px lift) */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#formacao"
                className="btn-interactive inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0878F9] shadow-lg shadow-[#054494]/20 hover:bg-[#F5FBFF] sm:px-7 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Trajetória Acadêmica e Profissional</span>
              </a>

              <a
                href="#contato"
                className="btn-interactive inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xs hover:bg-white/20 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/85 bg-white/10">
                  <Mail className="h-4 w-4 stroke-[2.2]" />
                </span>
                <span>Falar Comigo</span>
              </a>

              <button
                type="button"
                data-pdf-hide="true"
                onClick={handleDownloadPdf}
                disabled={isExportingPdf}
                aria-busy={isExportingPdf}
                aria-label={
                  isExportingPdf
                    ? 'Gerando PDF da página profissional'
                    : 'Baixar Página em PDF (Pagina_Profissional_Wemerson_Bastos.pdf)'
                }
                className="btn-interactive inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white/85 bg-[#15115A]/85 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#05357A]/25 backdrop-blur-xs hover:bg-[#15115A] disabled:cursor-wait disabled:opacity-80 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {isExportingPdf ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-[#00BFEF]" />
                    <span>Gerando PDF…</span>
                  </>
                ) : (
                  <>
                    <FileDown className="h-4 w-4 text-[#00BFEF]" />
                    <span>Baixar Página em PDF</span>
                  </>
                )}
              </button>
            </div>

            {pdfExportError && (
              <div
                role="alert"
                data-pdf-hide="true"
                className="mt-4 flex max-w-xl items-center gap-2.5 rounded-xl border border-white/30 bg-[#15115A]/90 px-4 py-3 text-xs text-white"
              >
                <AlertCircle className="h-4 w-4 shrink-0 text-[#00BFEF]" />
                <span>{pdfExportError}</span>
              </div>
            )}
          </div>

          {/* Right Column: ILUSTRAÇÃO 1 — Apresentação Profissional */}
          <div className="relative flex items-center justify-center md:col-span-5">
            <HeroProfileIllustration isRevealed={heroIllusRevealed} />
          </div>
        </section>
      </div>

      {/* 2. COMPACT TECHNOLOGIES BAND */}
      <section
        aria-label="Tecnologias e áreas de domínio"
        className="border-b border-[#CBE4FF] bg-[#D9EFFF] py-6"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center sm:gap-x-8">
            {techStripItems.map((tech, index) => (
              <div key={tech} className="flex items-center gap-3">
                <span className="font-display text-sm font-semibold tracking-tight text-[#0878F9] sm:text-base whitespace-nowrap">
                  {tech}
                </span>
                {index < techStripItems.length - 1 && (
                  <span aria-hidden="true" className="hidden text-[#6AB8F7] sm:inline">
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREE-COLUMN SUMMARY PILLARS ON SOFT ICE BLUE + CURVED WAVE TRANSITION */}
      <section data-pdf-section="pilares" className="relative bg-[#EAF6FF] pt-16 pb-24 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {corePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                data-reveal="true"
                style={{ '--reveal-delay': `${idx * 80}ms` } as React.CSSProperties}
                className="reveal-block flex flex-col items-center text-center"
              >
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#D6ECFF]">
                  <div className="flex h-16 w-14 flex-col items-center justify-center rounded-2xl border-2 border-[#15115A] bg-[#0878F9] text-white shadow-sm">
                    <span className="font-display text-sm font-bold tracking-tight text-white">
                      {pillar.badge}
                    </span>
                    <span className="mt-1.5 h-1.5 w-6 rounded-full bg-[#00BFEF]" />
                  </div>
                </div>

                <h2 className="mt-6 font-display text-lg font-bold text-[#0878F9]">
                  {pillar.title}
                </h2>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#4A5578]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div
            data-reveal="true"
            style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
            className="reveal-block mt-12 text-center"
          >
            <a
              href="#sobre"
              className="btn-interactive inline-flex items-center justify-center rounded-full bg-[#0878F9] px-8 py-3.5 text-xs font-semibold text-white shadow-md shadow-[#0878F9]/20 hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
            >
              Conhecer Minha Trajetória
            </a>
          </div>
        </div>

        {/* Curved Wave Divider into White Section */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 overflow-hidden leading-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 70"
            fill="none"
            className="h-10 w-full sm:h-14"
            preserveAspectRatio="none"
          >
            <path d="M0 15C380 85 1060 85 1440 15V70H0V15Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* 4. SOBRE MIM & COMPETÊNCIAS TÉCNICAS (White Section with ILUSTRAÇÃO 3 — Educação e Tecnologia) */}
      <section
        id="sobre"
        ref={sobreSectionRef}
        data-pdf-section="sobre"
        data-parallax-section="sobre"
        className="scroll-mt-24 bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div data-reveal="true" className="reveal-block mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0878F9] sm:text-4xl [text-wrap:balance]">
              Construindo pontes entre a educação e a tecnologia
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4A5578]">
              Desde 2018, faço parte da rede municipal de ensino de Tauá-CE e, atualmente, sou{' '}
              <strong className="font-semibold text-[#15115A]">
                Superintendente da SME de Tauá
              </strong>
              . Curso{' '}
              <strong className="font-semibold text-[#15115A]">
                Análise e Desenvolvimento de Sistemas
              </strong>{' '}
              pela Universidade Descomplica e atuo como{' '}
              <strong className="font-semibold text-[#15115A]">
                Fundador da NEXORA, agência de desenvolvimento de soluções digitais
              </strong>
              , criando soluções inteligentes que ampliam o alcance do conhecimento, personalizam o
              aprendizado e tornam o processo educacional mais inclusivo, dinâmico e eficaz.
            </p>
          </div>

          {/* Central Interface Hub (ILUSTRAÇÃO 3) flanked by the 6 Real Competency Blocks
              Competencies reveal in sequence with 70ms intervals (0ms -> 350ms max) */}
          <div
            id="competencias"
            className="scroll-mt-24 mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-12"
          >
            {/* Left 3 Competencies (0ms, 70ms, 140ms) */}
            <div className="space-y-8 lg:col-span-4">
              {leftCompetencies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    data-reveal="true"
                    style={{ '--reveal-delay': `${idx * 70}ms` } as React.CSSProperties}
                    className="reveal-block flex items-start gap-4 lg:flex-row-reverse lg:text-right"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#15115A] bg-[#0878F9] text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#15115A]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#526080]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center: ILUSTRAÇÃO 3 — Educação e Tecnologia */}
            <div className="flex justify-center lg:col-span-4">
              <EducationTechBridgeIllustration />
            </div>

            {/* Right 3 Competencies (210ms, 280ms, 350ms) */}
            <div className="space-y-8 lg:col-span-4">
              {rightCompetencies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    data-reveal="true"
                    style={{ '--reveal-delay': `${(idx + 3) * 70}ms` } as React.CSSProperties}
                    className="reveal-block flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#15115A] bg-[#0878F9] text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#15115A]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#526080]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIÊNCIA E ATUAÇÃO (Soft Ice Blue Section with ILUSTRAÇÃO 2 — Mesa de Trabalho) */}
      <section
        id="atuacao"
        ref={atuacaoSectionRef}
        data-pdf-section="atuacao"
        data-parallax-section="atuacao"
        className="scroll-mt-24 bg-[#EAF6FF] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div data-reveal="true" className="reveal-block mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0878F9] sm:text-4xl">
              Integrando pedagogia, gestão e código
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A5578] sm:text-base">
              Acredito que o futuro da educação está na capacidade de integrar práticas pedagógicas
              sólidas com recursos tecnológicos de ponta, transformando salas de aula, treinamentos
              e ambientes corporativos em espaços vivos de inovação e impacto social.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-12">
            {/* Left: ILUSTRAÇÃO 2 — Estação de Trabalho (Notebook, Livro, Documento e Código) */}
            <div className="flex justify-center lg:col-span-5">
              <WorkstationIllustration />
            </div>

            {/* Right Interactive Accordion List */}
            <div className="space-y-4 lg:col-span-7">
              {accordionAreas.map((item, idx) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div
                    key={item.id}
                    data-reveal="true"
                    style={{ '--reveal-delay': `${idx * 65}ms` } as React.CSSProperties}
                    className="reveal-block"
                  >
                    <div className="card-interactive rounded-2xl border border-[#C9E5FF] bg-[#F7FBFF] hover:border-[#0878F9]/40 hover:shadow-md hover:shadow-[#0878F9]/10">
                      <button
                        type="button"
                        onClick={() => setOpenAccordion(isOpen ? '' : item.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                      >
                        <div className="flex items-start gap-4">
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0878F9] text-white">
                            <Check className="h-4 w-4 stroke-[2.5]" />
                          </span>
                          <div>
                            <h3 className="font-display text-base font-bold text-[#15115A]">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-[#526080]">
                              {item.summary}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          data-pdf-hide="true"
                          className={`h-5 w-5 shrink-0 text-[#0878F9] transition-transform duration-150 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        data-pdf-accordion-body="true"
                        className={`${
                          isOpen ? 'block' : 'hidden'
                        } border-t border-[#DDF0FF] px-6 pt-4 pb-5 pl-16`}
                      >
                        <ul className="space-y-2.5 text-xs leading-relaxed text-[#3E4C6E] sm:text-sm">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2.5">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0878F9]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {item.externalLink && (
                          <div className="mt-4">
                            <a
                              href={item.externalLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={item.externalLink.ariaLabel}
                              className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#0878F9] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                            >
                              <span>{item.externalLink.label}</span>
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FRENTES DE DESENVOLVIMENTO E SOLUÇÕES */}
      <section
        id="solucoes"
        data-pdf-section="solucoes"
        className="scroll-mt-24 bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left Editorial Column */}
            <div
              data-reveal="true"
              data-pdf-sticky="true"
              className="reveal-block lg:col-span-4 lg:sticky lg:top-10"
            >
              <h2 className="font-display text-3xl font-bold leading-tight text-[#0878F9] [text-wrap:balance]">
                Soluções educacionais e tecnológicas com propósito
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#526080]">
                Atuação voltada ao desenvolvimento de plataformas, recursos digitais inclusivos,
                análise de dados educacionais e formação de equipes em escolas e organizações.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#526080]">
                Fundador da <strong className="font-semibold text-[#15115A]">NEXORA</strong>,
                agência de desenvolvimento de soluções digitais. Aberto a colaborações e projetos
                que envolvam tecnologia, educação e impacto social.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contato"
                  className="btn-interactive inline-flex items-center justify-center rounded-full bg-[#0878F9] px-7 py-3.5 text-xs font-semibold text-white shadow-md shadow-[#0878F9]/20 hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                >
                  Propor Colaboração
                </a>
                <a
                  href={NEXORA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conheça a NEXORA, agência de desenvolvimento de soluções digitais, no Instagram"
                  className="btn-interactive inline-flex items-center gap-1.5 rounded-full border border-[#0878F9] bg-[#F4FAFF] px-5 py-3 text-xs font-semibold text-[#0878F9] hover:bg-[#E4F3FF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                >
                  <span>Conheça a NEXORA</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right 2x2 Informational Card Grid */}
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:col-span-8">
              {solutionCards.map((card, idx) => (
                <article
                  key={card.title}
                  data-reveal="true"
                  style={{ '--reveal-delay': `${idx * 70}ms` } as React.CSSProperties}
                  className="reveal-block flex flex-col items-center rounded-2xl border border-[#E6F2FF] bg-white p-6 text-center shadow-[0_14px_40px_-12px_rgba(8,120,249,0.12)] sm:p-8"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#EAF6FF]">
                    {card.type === 'platform' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl border-2 border-[#15115A] bg-[#0878F9] text-white shadow-xs">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                    )}
                    {card.type === 'ml' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl border-2 border-[#15115A] bg-[#15115A] text-white shadow-xs">
                        <BrainCircuit className="h-6 w-6 text-[#00BFEF]" />
                      </div>
                    )}
                    {card.type === 'web' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl border-2 border-[#15115A] bg-[#0878F9] text-white shadow-xs">
                        <Code2 className="h-6 w-6 text-white" />
                      </div>
                    )}
                    {card.type === 'inclusion' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl border-2 border-[#15115A] bg-[#15115A] text-white shadow-xs">
                        <Landmark className="h-6 w-6 text-[#00BFEF]" />
                      </div>
                    )}
                  </div>

                  <p className="mt-5 text-xs font-medium text-[#5A6B8C]">{card.subtitle}</p>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-[#0878F9]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#526080] sm:text-sm">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRAJETÓRIA (3 STEPS) + TABELA DE CURSOS E IDIOMAS */}
      <section
        id="formacao"
        data-pdf-section="formacao"
        className="scroll-mt-24 relative bg-[#EAF6FF] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div data-reveal="true" className="reveal-block mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-[#0878F9] sm:text-4xl">
              Trajetória Acadêmica e Profissional
            </h2>
            <p className="mt-3 text-sm text-[#4A5578] sm:text-base">
              Evolução contínua entre docência, gestão pública municipal e engenharia de sistemas
            </p>
          </div>

          {/* 3-Step Trajectory with Widened, Unclipped Badges & Non-Overlapping Number Circles */}
          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
            {trajectorySteps.map((item, idx) => (
              <div
                key={item.step}
                data-reveal="true"
                style={{ '--reveal-delay': `${idx * 75}ms` } as React.CSSProperties}
                className="reveal-block flex flex-col items-center text-center"
              >
                <div className="relative inline-flex min-h-[92px] items-center justify-center rounded-3xl bg-[#D6ECFF] px-6 py-4">
                  <span
                    aria-label={`Etapa ${item.step}`}
                    className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#15115A] font-display text-xs font-bold text-white shadow-sm"
                  >
                    {item.step}
                  </span>
                  <div className="flex h-auto min-w-[148px] max-w-[196px] items-center justify-center rounded-2xl border-2 border-[#15115A] bg-[#0878F9] px-4 py-2.5 text-center font-display text-xs font-bold leading-snug text-white shadow-xs sm:text-sm">
                    {item.period}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-base font-bold text-[#0878F9] sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-xs text-xs leading-relaxed text-[#4A5578] sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Courses Table */}
          <div className="mt-20 md:mt-24">
            <div data-reveal="true" className="reveal-block mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-[#0878F9] sm:text-4xl">
                Cursos e Formações Complementares
              </h2>
              <p className="mt-3 text-sm text-[#4A5578] sm:text-base">
                12 certificações em gestão escolar, tecnologias digitais, inclusão e metodologias
                ativas
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div
              data-reveal="true"
              data-pdf-hide="true"
              className="reveal-block mt-8 flex flex-wrap items-center justify-center gap-2.5"
            >
              <button
                type="button"
                onClick={() => setCourseFilter('all')}
                className={`btn-interactive rounded-full px-5 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
                  courseFilter === 'all'
                    ? 'bg-[#0878F9] text-white shadow-xs'
                    : 'bg-white text-[#15115A] hover:bg-[#D8EEFF]'
                }`}
              >
                Todas as Formações (12)
              </button>
              <button
                type="button"
                onClick={() => setCourseFilter('avamec')}
                className={`btn-interactive rounded-full px-5 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
                  courseFilter === 'avamec'
                    ? 'bg-[#0878F9] text-white shadow-xs'
                    : 'bg-white text-[#15115A] hover:bg-[#D8EEFF]'
                }`}
              >
                AVAMEC / MEC (8)
              </button>
              <button
                type="button"
                onClick={() => setCourseFilter('parceiros')}
                className={`btn-interactive rounded-full px-5 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
                  courseFilter === 'parceiros'
                    ? 'bg-[#0878F9] text-white shadow-xs'
                    : 'bg-white text-[#15115A] hover:bg-[#D8EEFF]'
                }`}
              >
                Google & Instituto Ayrton Senna (2)
              </button>
              <button
                type="button"
                onClick={() => setCourseFilter('lattes')}
                className={`btn-interactive rounded-full px-5 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
                  courseFilter === 'lattes'
                    ? 'bg-[#0878F9] text-white shadow-xs'
                    : 'bg-white text-[#15115A] hover:bg-[#D8EEFF]'
                }`}
              >
                Plataforma Lattes (2)
              </button>
            </div>

            {/* Blue / Navy / White Table */}
            <div
              data-reveal="true"
              className="reveal-block mt-8 overflow-hidden rounded-2xl shadow-[0_18px_45px_-15px_rgba(8,120,249,0.18)]"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <thead>
                    <tr>
                      <th className="bg-[#0878F9] px-6 py-4 font-display text-sm font-bold text-white">
                        Curso / Formação Complementar
                      </th>
                      <th className="bg-[#0663D0] px-6 py-4 text-center font-display text-sm font-bold text-white">
                        Instituição Certificadora
                      </th>
                      <th className="bg-[#15115A] px-6 py-4 text-center font-display text-sm font-bold text-white">
                        Eixo de Atuação
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2F1FF] text-sm">
                    {courses.map((course, idx) => {
                      const matchesFilter =
                        courseFilter === 'all' || course.category === courseFilter;
                      return (
                        <tr
                          key={course.title}
                          data-pdf-course-row="true"
                          className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5FAFF]'} ${
                            matchesFilter ? '' : 'hidden'
                          }`}
                        >
                          <td className="px-6 py-4 font-semibold text-[#15115A]">{course.title}</td>
                          <td className="bg-[#0878F9] px-6 py-4 text-center font-medium text-white">
                            {course.institution}
                          </td>
                          <td className="px-6 py-4 text-center text-xs font-medium text-[#4A5578]">
                            {course.area}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Idiomas Row */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {languages.map((item, idx) => (
                <div
                  key={item.language}
                  data-reveal="true"
                  style={{ '--reveal-delay': `${idx * 70}ms` } as React.CSSProperties}
                  className="reveal-block flex flex-col justify-between rounded-2xl border border-[#CDE6FF] bg-white p-6 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Globe2 className="h-5 w-5 text-[#0878F9]" />
                      <h3 className="font-display text-base font-bold text-[#15115A]">
                        {item.language}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-[#0878F9]">{item.level}</span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#526080]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CITAÇÃO AUTORAL & CONTATO DIRETO */}
      <section
        id="contato"
        data-pdf-section="contato"
        className="scroll-mt-24 bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: Author Quote */}
            <div data-reveal="true" className="reveal-block relative lg:col-span-6">
              <h2 className="font-display text-2xl font-bold text-[#15115A] sm:text-3xl">
                Propósito e Conexão Profissional
              </h2>

              <div className="mt-4 flex items-center gap-2 text-[#0878F9]">
                <Sparkles className="h-5 w-5 text-[#00BFEF]" />
                <span className="text-xs font-semibold tracking-wide text-[#0878F9]">
                  Educação · Tecnologia · Impacto Social
                </span>
              </div>

              <blockquote className="relative mt-6 rounded-2xl border border-[#E2F0FF] bg-[#F4FAFF] p-6 text-base leading-relaxed text-[#3E4C6E] sm:p-8">
                <p className="relative z-10 italic">
                  &ldquo;Cada linha de código que escrevo é um passo rumo ao futuro que escolhi
                  construir — unindo conhecimento, propósito e inovação.&rdquo;
                </p>
                <footer className="mt-4 text-xs font-bold text-[#0878F9]">
                  Wemerson Bastos Evangelista{' '}
                  <span className="font-normal text-[#526080]">
                    | Professor Pedagogo Especialista, Superintendente da SME de Tauá & Fundador da
                    NEXORA
                  </span>
                </footer>
              </blockquote>
            </div>

            {/* Right: Direct Contact Cards (E-mail, WhatsApp, LinkedIn, Instagram Pessoal, NEXORA) */}
            <div
              data-reveal="true"
              style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
              className="reveal-block space-y-4 lg:col-span-6"
            >
              <div className="rounded-2xl border border-[#DCEEFF] bg-[#F9FCFF] p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-[#15115A]">
                  Canais Diretos de Contato
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#526080]">
                  Aberto a colaborações e projetos que envolvam tecnologia, educação e impacto
                  social.
                </p>

                <div className="mt-6 space-y-3.5">
                  {/* Email */}
                  <div className="card-interactive flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2F0FF] bg-white px-4 py-3.5 hover:border-[#0878F9]/35">
                    <a
                      href="mailto:bastos.weeme@gmail.com"
                      className="flex items-center gap-3 text-sm font-medium text-[#15115A] hover:text-[#0878F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF6FF] text-[#0878F9]">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span className="break-all">bastos.weeme@gmail.com</span>
                    </a>
                    <button
                      type="button"
                      data-pdf-hide="true"
                      onClick={() => handleCopy('bastos.weeme@gmail.com', 'email')}
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#EAF6FF] px-3.5 py-1.5 text-xs font-semibold text-[#0878F9] hover:bg-[#D6ECFF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* WhatsApp / Telefone Pessoal */}
                  <div className="card-interactive flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2F0FF] bg-white px-4 py-3.5 hover:border-[#0878F9]/35">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Conversar pelo WhatsApp com Wemerson Bastos no número (88) 99720-4035"
                      className="flex items-center gap-3 text-sm font-medium text-[#15115A] hover:text-[#0878F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF6FF] text-[#0878F9]">
                        <MessageCircle className="h-4 w-4" />
                      </span>
                      <div>
                        <span className="block tabular-nums">(88) 99720-4035</span>
                        <span className="block text-xs text-[#526080]">WhatsApp Direto</span>
                      </div>
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#0878F9] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <span>Conversar no WhatsApp</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="card-interactive flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2F0FF] bg-white px-4 py-3.5 hover:border-[#0878F9]/35">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF6FF] font-display text-xs font-bold text-[#0878F9]">
                        in
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[#15115A]">LinkedIn Profissional</p>
                        <p className="text-xs text-[#526080]">wemerson-bastos-129451252</p>
                      </div>
                    </div>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn de Wemerson Bastos"
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#0878F9] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <span>Acessar Perfil</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Instagram Pessoal */}
                  <div className="card-interactive flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2F0FF] bg-white px-4 py-3.5 hover:border-[#0878F9]/35">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF6FF] text-[#0878F9]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[#15115A]">Instagram Pessoal</p>
                        <p className="text-xs text-[#526080]">@wemerson.bastos7</p>
                      </div>
                    </div>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram pessoal de Wemerson Bastos (@wemerson.bastos7)"
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#0878F9] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <span>Instagram Pessoal</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* NEXORA — Agência de Desenvolvimento de Soluções Digitais */}
                  <div className="card-interactive flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#C9E5FF] bg-[#F4FAFF] px-4 py-3.5 hover:border-[#0878F9]/45">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15115A] text-[#00BFEF]">
                        <Code2 className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#15115A]">
                          NEXORA · Soluções Digitais
                        </p>
                        <p className="text-xs text-[#526080]">
                          Fundador da NEXORA · @nexora_dev_
                        </p>
                      </div>
                    </div>
                    <a
                      href={NEXORA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Conheça a NEXORA, agência de desenvolvimento de soluções digitais, no Instagram (@nexora_dev_)"
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#15115A] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0878F9] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15115A]"
                    >
                      <span>Conheça a NEXORA</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#00BFEF]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIBRANT BLUE CTA BAR ABOVE FOOTER */}
      <section className="bg-gradient-to-r from-[#0878F9] to-[#00BFEF] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 font-display text-lg font-bold text-white backdrop-blur-xs sm:flex">
              wb
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-white sm:text-xl">
                Vamos construir soluções para a educação e tecnologia?
              </h2>
              <p className="mt-1 text-xs text-white/90 sm:text-sm">
                Disponível para parcerias, projetos educacionais, desenvolvimento web e palestras.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive inline-flex items-center gap-2 rounded-full border border-white/85 bg-white/10 px-6 py-3 text-xs font-semibold text-white hover:bg-white/20 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href="mailto:bastos.weeme@gmail.com"
              className="btn-interactive inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold text-[#0878F9] shadow-sm hover:bg-[#F5FBFF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      {/* DEEP INDIGO FOOTER (#15115A) */}
      <footer className="bg-[#15115A] pt-16 pb-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 pb-12 md:grid-cols-12">
            {/* Brand & Identification */}
            <div className="md:col-span-5">
              <a
                href="#topo"
                className="font-display text-2xl font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                wemerson<span className="text-[#00BFEF]">.</span>bastos
              </a>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/75">
                Professor Pedagogo Especialista · Superintendente da SME de Tauá · Graduando em
                Análise e Desenvolvimento de Sistemas (Universidade Descomplica) · Fundador da
                NEXORA, agência de desenvolvimento de soluções digitais.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#00BFEF]">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Wemerson Bastos"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram pessoal de Wemerson Bastos (@wemerson.bastos7)"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Instagram Pessoal
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={NEXORA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conheça a NEXORA, agência de desenvolvimento de soluções digitais, no Instagram"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Conheça a NEXORA
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de Wemerson Bastos"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  WhatsApp
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="mailto:bastos.weeme@gmail.com"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  E-mail
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="md:col-span-2">
              <h3 className="font-display text-xs font-semibold text-[#00BFEF]">Navegação</h3>
              <ul className="mt-3 space-y-2 text-xs text-white/80">
                <li>
                  <a href="#sobre" className="hover:text-white hover:underline">
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a href="#competencias" className="hover:text-white hover:underline">
                    Competências
                  </a>
                </li>
                <li>
                  <a href="#atuacao" className="hover:text-white hover:underline">
                    Atuação Pública
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-white hover:underline">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#formacao" className="hover:text-white hover:underline">
                    Formações
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-display text-xs font-semibold text-[#00BFEF]">Atuação</h3>
              <ul className="mt-3 space-y-2 text-xs text-white/80">
                <li>SME de Tauá-CE</li>
                <li>Fundador da NEXORA</li>
                <li>Desenvolvimento Web</li>
                <li>Machine Learning</li>
                <li>Tecnologias Educacionais</li>
                <li>Pedagogia Empresarial</li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-display text-xs font-semibold text-[#00BFEF]">Contato</h3>
              <ul className="mt-3 space-y-2 text-xs text-white/80">
                <li>bastos.weeme@gmail.com</li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tabular-nums hover:text-white hover:underline"
                  >
                    (88) 99720-4035
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram pessoal de Wemerson Bastos"
                    className="hover:text-white hover:underline"
                  >
                    Instagram Pessoal: @wemerson.bastos7
                  </a>
                </li>
                <li>
                  <a
                    href={NEXORA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Conheça a NEXORA no Instagram"
                    className="hover:text-white hover:underline"
                  >
                    Conheça a NEXORA: @nexora_dev_
                  </a>
                </li>
                <li>Tauá — Ceará, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-xs text-white/60">
            <p>
              © {new Date().getFullYear()} Wemerson Bastos Evangelista. Apresentação profissional
              construída a partir de informações reais de trajetória acadêmica e profissional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
