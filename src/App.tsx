import React, { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Copy,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  Layers,
  Mail,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import {
  CollaborationKnowledgeIllustration,
  EducationTechBridgeIllustration,
  HeroProfileIllustration,
} from './components/CurriculumIllustrations';

interface Course {
  title: string;
  institution: string;
  category: 'avamec' | 'parceiros' | 'lattes';
  area: string;
}

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
    title: 'Soluções Web & No-Code',
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
  { language: 'Português', level: 'Nativo', detail: 'Comunicação acadêmica, técnica e institucional' },
  { language: 'Espanhol', level: 'Intermediário', detail: 'Leitura técnica e conversação intermediária' },
  { language: 'Inglês', level: 'Básico', detail: 'Leitura de documentação técnica e fundamentos' },
];

const readmePreviewContent = `<div align="center">

<!-- Cabeçalho em onda com a paleta azul e ciano (#0878F9 -> #00BFEF) -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0878F9,100:00BFEF&height=220&section=header&text=Wemerson%20Bastos%20Evangelista&fontSize=38&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Professor%20Pedagogo%20Especialista%20%E2%80%A2%20Superintendente%20da%20SME%20de%20Tau%C3%A1%20%E2%80%A2%20Desenvolvimento%20Web%20%26%20IA&descAlignY=58&descSize=16" alt="Wemerson Bastos Evangelista" />

<br />

<!-- Botões em formato de cápsula (estilo referência) -->
<a href="https://professional-resume-sigma.vercel.app">
  <img src="https://img.shields.io/badge/Curr%C3%ADculo_Profissional-Acessar_na_Vercel-0878F9?style=for-the-badge&logo=vercel&logoColor=white" alt="Currículo Profissional" />
</a>
<a href="https://www.linkedin.com/in/wemerson-bastos-129451252">
  <img src="https://img.shields.io/badge/LinkedIn-Conectar_no_LinkedIn-00BFEF?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>
<a href="mailto:bastos.weeme@gmail.com">
  <img src="https://img.shields.io/badge/E--mail-bastos.weeme%40gmail.com-0878F9?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" />
</a>
<a href="tel:+5588997204035">
  <img src="https://img.shields.io/badge/Telefone-(88)_99720--4035-15115A?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Telefone" />
</a>

</div>

<br />

<!-- 2. FAIXA COMPACTA DE TECNOLOGIAS E DOMÍNIOS -->
<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-0878F9?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-0878F9?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-0878F9?style=flat-square&logo=javascript&logoColor=white)
![No-Code](https://img.shields.io/badge/No--Code-00BFEF?style=flat-square)
![UX/UI](https://img.shields.io/badge/UX%2FUI_Design-00BFEF?style=flat-square&logo=figma&logoColor=white)
![Machine Learning](https://img.shields.io/badge/Machine_Learning_%26_IA-15115A?style=flat-square)
![Análise de Dados](https://img.shields.io/badge/Modelagem_e_An%C3%A1lise_de_Dados-15115A?style=flat-square)
![Tecnologias Educacionais](https://img.shields.io/badge/Tecnologias_Educacionais_(BNCC)-0878F9?style=flat-square)
![Google for Education](https://img.shields.io/badge/Google_for_Education-00BFEF?style=flat-square&logo=google&logoColor=white)

</div>

---

## 📌 Sobre Mim

Sou **Professor Pedagogo Especialista** com expertise em **Tecnologia da Informação**, atuando nas áreas de **Desenvolvimento Web, Machine Learning e Tecnologias Educacionais**.

Desde 2018, faço parte da rede municipal de ensino de Tauá-CE e, atualmente, sou **Superintendente da SME de Tauá**. Atualmente estou cursando **Análise e Desenvolvimento de Sistemas** pela **Universidade Descomplica**.

Minha trajetória é guiada por um propósito claro: construir **pontes entre a educação e a tecnologia**, criando soluções inteligentes que ampliem o alcance do conhecimento, personalizem o aprendizado e tornem o processo educacional mais inclusivo, dinâmico e eficaz.

Acredito que o futuro da educação está na capacidade de integrar práticas pedagógicas sólidas com recursos tecnológicos de ponta, transformando salas de aula, treinamentos e ambientes corporativos em espaços vivos de inovação e impacto social.

> 💡 *"Cada linha de código que escrevo é um passo rumo ao futuro que escolhi construir — unindo conhecimento, propósito e inovação."*

📄 **Confira meu currículo profissional completo online:** [professional-resume-sigma.vercel.app](https://professional-resume-sigma.vercel.app)

---

## 🛠️ Competências e Áreas de Atuação

<table>
  <tr>
    <td width="33%" valign="top">
      <h3 align="center">💻 Desenvolvimento Web</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>No-code</li>
        <li>UX/UI</li>
      </ul>
    </td>
    <td width="33%" valign="top">
      <h3 align="center">🤖 Machine Learning Engineer</h3>
      <ul>
        <li>Fundamentos de IA e aprendizado de máquina</li>
        <li>Modelagem e análise de dados</li>
        <li>Aplicações educacionais inteligentes</li>
      </ul>
    </td>
    <td width="33%" valign="top">
      <h3 align="center">🎓 Desenvolvedor Educacional</h3>
      <ul>
        <li>Criação de plataformas e jogos educacionais</li>
        <li>Uso de tecnologias para engajamento e personalização</li>
        <li>Adequação à BNCC e metodologias ativas</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <h3 align="center">🏢 Pedagogo Empresarial</h3>
      <ul>
        <li>Treinamentos corporativos</li>
        <li>Desenvolvimento de equipes</li>
        <li>Gestão de aprendizagem organizacional</li>
      </ul>
    </td>
    <td width="33%" valign="top">
      <h3 align="center">📚 Pedagogo Especializado</h3>
      <ul>
        <li>Alfabetização e letramento</li>
        <li>Psicomotricidade e desenvolvimento humano</li>
        <li>Educação inclusiva e recursos digitais</li>
      </ul>
    </td>
    <td width="33%" valign="top">
      <h3 align="center">🖥️ Graduação em Curso</h3>
      <ul>
        <li><strong>Análise e Desenvolvimento de Sistemas</strong></li>
        <li>Universidade Descomplica</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🏛️ Experiência e Gestão Pública

<details open>
  <summary><strong>Superintendente da SME de Tauá — Rede Municipal de Ensino de Tauá-CE (Desde 2018 na rede)</strong></summary>
  <br />
  <ul>
    <li><strong>Políticas Públicas:</strong> Gestão de políticas públicas educacionais no município de Tauá-CE.</li>
    <li><strong>Estratégia e Inovação:</strong> Planejamento estratégico e inovação voltados à rede de ensino.</li>
    <li><strong>Gestão Integrada:</strong> Acompanhamento pedagógico e administrativo.</li>
  </ul>
</details>

<details>
  <summary><strong>Soluções e Frentes de Desenvolvimento Educacional</strong></summary>
  <br />
  <ul>
    <li><strong>Plataformas e Jogos Educacionais:</strong> Recursos interativos voltados ao engajamento, personalização e alinhamento à BNCC e metodologias ativas.</li>
    <li><strong>Aplicações Educacionais Inteligentes:</strong> Integração de fundamentos de IA, Machine Learning e modelagem de dados na educação.</li>
    <li><strong>Desenvolvimento Web & No-Code:</strong> Construção de interfaces acessíveis com HTML, CSS, JavaScript, UX/UI e ferramentas No-code.</li>
    <li><strong>Educação Inclusiva e Corporativa:</strong> Treinamentos corporativos, alfabetização, psicomotricidade e tecnologias assistivas/digitais.</li>
  </ul>
</details>

---

## 📜 Cursos e Formações Complementares

| Curso / Formação | Instituição Certificadora | Eixo Temático |
| :--- | :---: | :--- |
| **Formação Continuada em Educação Infantil** | \`AVAMEC/MEC\` | Educação Básica |
| **Formação em Alfabetização e Letramento** | \`AVAMEC/MEC\` | Alfabetização |
| **Formação em Educação Especial e Inclusiva** | \`AVAMEC/MEC\` | Educação Inclusiva |
| **Gestão Democrática e Participativa na Escola** | \`MEC\` | Gestão Escolar |
| **Metodologias Ativas e Ensino Híbrido** | \`Google for Education\` | Inovação e Tecnologia |
| **Psicomotricidade na Educação Básica** | \`Plataforma Lattes\` | Desenvolvimento Humano |
| **Tecnologias Digitais Aplicadas à Educação** | \`AVAMEC/MEC\` | Tecnologias Educacionais |
| **Avaliação Educacional e da Aprendizagem** | \`AVAMEC/MEC\` | Gestão Pedagógica |
| **Educação Socioemocional** | \`Instituto Ayrton Senna\` | Formação Integral |
| **Planejamento e Gestão Escolar** | \`AVAMEC/MEC\` | Planejamento Estratégico |
| **Educação Ambiental e Sustentabilidade** | \`Plataforma Lattes\` | Sustentabilidade |
| **Formação de Gestores e Supervisores Escolares** | \`AVAMEC/MEC\` | Liderança Educacional |

---

## 🌍 Idiomas

<div align="center">

![Português](https://img.shields.io/badge/🇧🇷_Português-Nativo-0878F9?style=for-the-badge)
![Espanhol](https://img.shields.io/badge/🇪🇸_Espanhol-Intermediário-00BFEF?style=for-the-badge)
![Inglês](https://img.shields.io/badge/🇺🇸_Inglês-Básico-15115A?style=for-the-badge)

</div>

---

## 📫 Contato e Links Profissionais

<div align="center">

💬 *Aberto a colaborações e projetos que envolvam tecnologia, educação e impacto social.*

| Canal | Link / Contato Direto |
| :--- | :--- |
| **Currículo Profissional (Web)** | [professional-resume-sigma.vercel.app](https://professional-resume-sigma.vercel.app) |
| **E-mail** | [bastos.weeme@gmail.com](mailto:bastos.weeme@gmail.com) |
| **Telefone / WhatsApp** | (88) 99720-4035 |
| **LinkedIn** | [linkedin.com/in/wemerson-bastos-129451252](https://www.linkedin.com/in/wemerson-bastos-129451252) |

<br />

<!-- Rodapé em onda com azul profundo (#15115A -> #0878F9) -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:15115A,100:0878F9&height=110&section=footer" alt="Rodapé" />

</div>`;

export default function App() {
  const [openAccordion, setOpenAccordion] = useState<string>('sme-taua');
  const [courseFilter, setCourseFilter] = useState<'all' | 'avamec' | 'parceiros' | 'lattes'>('all');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [readmeModalOpen, setReadmeModalOpen] = useState(false);

  // Motion & IntersectionObserver State
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [heroIllusActive, setHeroIllusActive] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setMotionEnabled(false);
      setHeroIllusActive(true);
      setVisibleSections({
        pilares: true,
        sobre: true,
        atuacao: true,
        solucoes: true,
        formacao: true,
        contato: true,
      });
      return;
    }

    // Activate Hero Illustration smoothly on first frame without delaying main text
    const timer = window.requestAnimationFrame(() => {
      setHeroIllusActive(true);
    });

    // Observe Hero visibility to pause ambient float when outside viewport
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    // Observe each section once for gentle entry reveal
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionKey = entry.target.getAttribute('data-reveal-section');
          if (entry.isIntersecting && sectionKey) {
            setVisibleSections((prev) =>
              prev[sectionKey] ? prev : { ...prev, [sectionKey]: true },
            );
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -36px 0px' },
    );

    Object.values(sectionRefs.current).forEach((node) => {
      if (node) sectionObserver.observe(node);
    });

    return () => {
      window.cancelAnimationFrame(timer);
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const registerSectionRef = (key: string) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el;
  };

  const getRevealClass = (key: string) => {
    if (!motionEnabled) return 'reveal-visible';
    return visibleSections[key] ? 'reveal-ready reveal-visible' : 'reveal-ready';
  };

  const filteredCourses =
    courseFilter === 'all'
      ? courses
      : courses.filter((course) => course.category === courseFilter);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <div className={`min-h-screen bg-white text-[#15115A] ${!motionEnabled ? 'motion-disabled' : ''}`}>
      {/* HERO & TOP BAR (Blue-to-Cyan Gradient with Harmonized Planes) */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0878F9] via-[#0789F6] to-[#00BFEF] text-white">
        {/* Subtle Layered Diagonal Shapes */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M-100 520L1540 240V720H-100V520Z" fill="#00BFEF" />
          <path d="M-100 380L1540 640V720H-100V380Z" fill="#0558C8" fillOpacity="0.45" />
        </svg>

        {/* Top Bar Contract: 3 zones (Brand | 5 Nav Links | 1 Primary Action) */}
        <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-6">
          <a
            href="#topo"
            id="topo"
            className="font-display text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            wemerson<span className="text-[#D8F3FF]">.</span>bastos
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-white/95"
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
            className="relative z-20 mx-6 mb-4 rounded-2xl border border-white/20 bg-[#0767D8]/95 p-5 backdrop-blur-md md:hidden"
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

        {/* 1. HERO CONTENT: Immediately available text/buttons on left + ILUSTRAÇÃO 1 on right */}
        <section
          ref={heroRef}
          className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pt-8 pb-20 md:grid-cols-12 md:pt-12 md:pb-24"
        >
          <div className="md:col-span-7">
            <p className="text-sm font-medium tracking-wide text-[#E0F4FF]">
              Wemerson Bastos Evangelista · Tauá-CE
            </p>

            <h1 className="mt-3 font-display text-4xl leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.35rem] [text-wrap:balance]">
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#formacao"
                className="btn-interactive inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0878F9] shadow-lg shadow-[#054494]/20 hover:bg-[#F5FBFF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
            </div>
          </div>

          {/* Right Column: ILUSTRAÇÃO 1 — Apresentação Profissional */}
          <div className="relative flex items-center justify-center md:col-span-5">
            <HeroProfileIllustration
              isActive={heroIllusActive}
              isHeroVisible={isHeroInView}
              motionEnabled={motionEnabled}
            />
          </div>
        </section>
      </div>

      {/* 2. COMPACT TECHNOLOGIES BAND */}
      <section
        aria-label="Tecnologias e áreas de domínio"
        className="border-b border-[#CBE4FF] bg-[#D9EFFF] py-5"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
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
      <section
        ref={registerSectionRef('pilares')}
        data-reveal-section="pilares"
        className="relative bg-[#EAF6FF] pt-16 pb-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {corePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                style={{ '--reveal-delay': `${idx * 80}ms` } as React.CSSProperties}
                className={`flex flex-col items-center text-center ${getRevealClass('pilares')}`}
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
                <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-[#4A5578]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
            className={`mt-12 text-center ${getRevealClass('pilares')}`}
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
        ref={registerSectionRef('sobre')}
        data-reveal-section="sobre"
        className="scroll-mt-20 bg-white py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className={`mx-auto max-w-3xl text-center ${getRevealClass('sobre')}`}>
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
              pela Universidade Descomplica, criando soluções inteligentes que ampliam o alcance do
              conhecimento, personalizam o aprendizado e tornam o processo educacional mais
              inclusivo, dinâmico e eficaz.
            </p>
          </div>

          {/* Central Interface Hub (ILUSTRAÇÃO 3) flanked by the 6 Real Competency Blocks */}
          <div
            id="competencias"
            className="scroll-mt-20 mt-16 grid items-center gap-10 lg:grid-cols-12"
          >
            {/* Left 3 Competencies */}
            <div className="space-y-8 lg:col-span-4">
              {leftCompetencies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{ '--reveal-delay': `${(idx + 1) * 80}ms` } as React.CSSProperties}
                    className={`flex items-start gap-4 lg:flex-row-reverse lg:text-right ${getRevealClass(
                      'sobre',
                    )}`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#15115A]/15 bg-[#0878F9] text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#15115A]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#526080]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center: ILUSTRAÇÃO 3 — Educação e Tecnologia */}
            <div className="flex justify-center lg:col-span-4">
              <EducationTechBridgeIllustration
                isActive={!motionEnabled || Boolean(visibleSections.sobre)}
              />
            </div>

            {/* Right 3 Competencies */}
            <div className="space-y-8 lg:col-span-4">
              {rightCompetencies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{ '--reveal-delay': `${(idx + 2) * 80}ms` } as React.CSSProperties}
                    className={`flex items-start gap-4 ${getRevealClass('sobre')}`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#15115A]/15 bg-[#0878F9] text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#15115A]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#526080]">
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

      {/* 5. EXPERIÊNCIA E ATUAÇÃO (Soft Ice Blue Section with ILUSTRAÇÃO 2 — Colaboração e Conhecimento) */}
      <section
        id="atuacao"
        ref={registerSectionRef('atuacao')}
        data-reveal-section="atuacao"
        className="scroll-mt-20 bg-[#EAF6FF] py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className={`mx-auto max-w-2xl text-center ${getRevealClass('atuacao')}`}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0878F9] sm:text-4xl">
              Integrando pedagogia, gestão e código
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5578] sm:text-base">
              Acredito que o futuro da educação está na capacidade de integrar práticas pedagógicas
              sólidas com recursos tecnológicos de ponta, transformando salas de aula, treinamentos
              e ambientes corporativos em espaços vivos de inovação e impacto social.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
            {/* Left: ILUSTRAÇÃO 2 — Colaboração e Conhecimento */}
            <div className="flex justify-center lg:col-span-5">
              <CollaborationKnowledgeIllustration
                isActive={!motionEnabled || Boolean(visibleSections.atuacao)}
              />
            </div>

            {/* Right Interactive Accordion List */}
            <div className="space-y-4 lg:col-span-7">
              {accordionAreas.map((item, idx) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div
                    key={item.id}
                    style={{ '--reveal-delay': `${(idx + 1) * 75}ms` } as React.CSSProperties}
                    className={`card-interactive rounded-2xl border border-[#C9E5FF] bg-[#F7FBFF] hover:border-[#0878F9]/40 hover:shadow-md hover:shadow-[#0878F9]/10 ${getRevealClass(
                      'atuacao',
                    )}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? '' : item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0878F9] text-white">
                          <Check className="h-4 w-4 stroke-[2.5]" />
                        </span>
                        <div>
                          <h3 className="font-display text-base font-bold text-[#15115A]">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 text-xs text-[#526080]">{item.summary}</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#0878F9] transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#DDF0FF] px-5 pt-3 pb-5 pl-16">
                        <ul className="space-y-2 text-xs leading-relaxed text-[#3E4C6E] sm:text-sm">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2.5">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0878F9]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FRENTES DE DESENVOLVIMENTO E SOLUÇÕES (White Section: Informational Cards remain stable) */}
      <section
        id="solucoes"
        ref={registerSectionRef('solucoes')}
        data-reveal-section="solucoes"
        className="scroll-mt-20 bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left Editorial Column */}
            <div className={`lg:col-span-4 lg:sticky lg:top-10 ${getRevealClass('solucoes')}`}>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#0878F9] [text-wrap:balance]">
                Soluções educacionais e tecnológicas com propósito
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#526080]">
                Atuação voltada ao desenvolvimento de plataformas, recursos digitais inclusivos,
                análise de dados educacionais e formação de equipes em escolas e organizações.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#526080]">
                Aberto a colaborações e projetos que envolvam tecnologia, educação e impacto social.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="btn-interactive inline-flex items-center justify-center rounded-full bg-[#0878F9] px-7 py-3 text-xs font-semibold text-white shadow-md shadow-[#0878F9]/20 hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                >
                  Propor Colaboração
                </a>
                <button
                  type="button"
                  onClick={() => setReadmeModalOpen(true)}
                  className="btn-interactive inline-flex items-center gap-2 rounded-full border border-[#BFE2FF] bg-[#F2F9FF] px-5 py-3 text-xs font-semibold text-[#0878F9] hover:bg-[#E0F2FF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Ver README.md</span>
                </button>
              </div>
            </div>

            {/* Right 2x2 Informational Card Grid (Stable appearance) */}
            <div className="grid gap-7 sm:grid-cols-2 lg:col-span-8">
              {solutionCards.map((card, idx) => (
                <article
                  key={card.title}
                  style={{ '--reveal-delay': `${(idx + 1) * 80}ms` } as React.CSSProperties}
                  className={`flex flex-col items-center rounded-2xl border border-[#E6F2FF] bg-white p-8 text-center shadow-[0_14px_40px_-12px_rgba(8,120,249,0.12)] ${getRevealClass(
                    'solucoes',
                  )}`}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#EAF6FF]">
                    {card.type === 'platform' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl border border-[#15115A]/20 bg-[#0878F9] text-white shadow-xs">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                    )}
                    {card.type === 'ml' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl bg-[#15115A] text-white shadow-xs">
                        <BrainCircuit className="h-6 w-6 text-[#00BFEF]" />
                      </div>
                    )}
                    {card.type === 'web' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl border border-[#15115A]/20 bg-[#0878F9] text-white shadow-xs">
                        <Code2 className="h-6 w-6 text-white" />
                      </div>
                    )}
                    {card.type === 'inclusion' && (
                      <div className="flex h-14 w-12 flex-col items-center justify-center rounded-xl bg-[#15115A] text-white shadow-xs">
                        <Landmark className="h-6 w-6 text-[#00BFEF]" />
                      </div>
                    )}
                  </div>

                  <p className="mt-5 text-xs font-medium text-[#5A6B8C]">{card.subtitle}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-[#0878F9]">
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
        ref={registerSectionRef('formacao')}
        data-reveal-section="formacao"
        className="scroll-mt-20 relative bg-[#EAF6FF] py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className={`mx-auto max-w-2xl text-center ${getRevealClass('formacao')}`}>
            <h2 className="font-display text-3xl font-bold text-[#0878F9] sm:text-4xl">
              Trajetória Acadêmica e Profissional
            </h2>
            <p className="mt-2 text-sm text-[#4A5578]">
              Evolução contínua entre docência, gestão pública municipal e engenharia de sistemas
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {trajectorySteps.map((item, idx) => (
              <div
                key={item.step}
                style={{ '--reveal-delay': `${(idx + 1) * 80}ms` } as React.CSSProperties}
                className={`flex flex-col items-center text-center ${getRevealClass('formacao')}`}
              >
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#D6ECFF]">
                  <span className="absolute -left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#CBE4FF] bg-white font-display text-sm font-bold text-[#0878F9] shadow-xs">
                    {item.step}
                  </span>
                  <div className="flex h-12 w-16 items-center justify-center rounded-xl border border-[#15115A]/15 bg-[#0878F9] font-display text-xs font-bold text-white shadow-xs">
                    {item.period}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-[#0878F9]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#4A5578] sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Courses Table */}
          <div
            style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
            className={`mt-24 ${getRevealClass('formacao')}`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-[#0878F9] sm:text-4xl">
                Cursos e Formações Complementares
              </h2>
              <p className="mt-2 text-sm text-[#4A5578]">
                12 certificações em gestão escolar, tecnologias digitais, inclusão e metodologias
                ativas
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCourseFilter('all')}
                className={`btn-interactive rounded-full px-5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
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
                className={`btn-interactive rounded-full px-5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
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
                className={`btn-interactive rounded-full px-5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
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
                className={`btn-interactive rounded-full px-5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9] ${
                  courseFilter === 'lattes'
                    ? 'bg-[#0878F9] text-white shadow-xs'
                    : 'bg-white text-[#15115A] hover:bg-[#D8EEFF]'
                }`}
              >
                Plataforma Lattes (2)
              </button>
            </div>

            {/* Blue / Navy / White Table */}
            <div className="mt-8 overflow-hidden rounded-2xl shadow-[0_18px_45px_-15px_rgba(8,120,249,0.18)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
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
                    {filteredCourses.map((course, idx) => (
                      <tr
                        key={course.title}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F5FAFF]'}
                      >
                        <td className="px-6 py-4 font-semibold text-[#15115A]">{course.title}</td>
                        <td className="bg-[#0878F9] px-6 py-4 text-center font-medium text-white">
                          {course.institution}
                        </td>
                        <td className="px-6 py-4 text-center text-xs font-medium text-[#4A5578]">
                          {course.area}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Idiomas Row (Informational Cards remain stable) */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {languages.map((item) => (
                <div
                  key={item.language}
                  className="flex flex-col justify-between rounded-2xl border border-[#CDE6FF] bg-white p-6 shadow-xs"
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
        ref={registerSectionRef('contato')}
        data-reveal-section="contato"
        className="scroll-mt-20 bg-white py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: Author Quote */}
            <div className={`relative lg:col-span-6 ${getRevealClass('contato')}`}>
              <h2 className="font-display text-2xl font-bold text-[#15115A] sm:text-3xl">
                Propósito e Conexão Profissional
              </h2>

              <div className="mt-4 flex items-center gap-1.5 text-[#0878F9]">
                <Sparkles className="h-5 w-5 text-[#00BFEF]" />
                <span className="text-xs font-semibold tracking-wide text-[#0878F9]">
                  Educação · Tecnologia · Impacto Social
                </span>
              </div>

              <blockquote className="relative mt-6 rounded-2xl border border-[#E2F0FF] bg-[#F4FAFF] p-7 text-base leading-relaxed text-[#3E4C6E]">
                <p className="relative z-10 italic">
                  &ldquo;Cada linha de código que escrevo é um passo rumo ao futuro que escolhi
                  construir — unindo conhecimento, propósito e inovação.&rdquo;
                </p>
                <footer className="mt-4 text-xs font-bold text-[#0878F9]">
                  Wemerson Bastos Evangelista{' '}
                  <span className="font-normal text-[#526080]">
                    | Professor Pedagogo Especialista & Superintendente da SME de Tauá
                  </span>
                </footer>
              </blockquote>
            </div>

            {/* Right: Direct Contact Cards */}
            <div
              style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
              className={`space-y-4 lg:col-span-6 ${getRevealClass('contato')}`}
            >
              <div className="rounded-2xl border border-[#DCEEFF] bg-[#F9FCFF] p-6">
                <h3 className="font-display text-lg font-bold text-[#15115A]">
                  Canais Diretos de Contato
                </h3>
                <p className="mt-1 text-xs text-[#526080]">
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
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF6FF] text-[#0878F9]">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span>bastos.weeme@gmail.com</span>
                    </a>
                    <button
                      type="button"
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

                  {/* Telefone */}
                  <div className="card-interactive flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2F0FF] bg-white px-4 py-3.5 hover:border-[#0878F9]/35">
                    <a
                      href="tel:+5588997204035"
                      className="flex items-center gap-3 text-sm font-medium text-[#15115A] hover:text-[#0878F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF6FF] text-[#0878F9]">
                        <Phone className="h-4 w-4" />
                      </span>
                      <span className="tabular-nums">(88) 99720-4035</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('(88) 99720-4035', 'phone')}
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#EAF6FF] px-3.5 py-1.5 text-xs font-semibold text-[#0878F9] hover:bg-[#D6ECFF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      {copiedField === 'phone' ? (
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

                  {/* LinkedIn */}
                  <div className="card-interactive flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2F0FF] bg-white px-4 py-3.5 hover:border-[#0878F9]/35">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF6FF] font-display text-xs font-bold text-[#0878F9]">
                        in
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[#15115A]">LinkedIn Profissional</p>
                        <p className="text-xs text-[#526080]">wemerson-bastos-129451252</p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/wemerson-bastos-129451252"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full bg-[#0878F9] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0663D0] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878F9]"
                    >
                      <span>Acessar Perfil</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIBRANT BLUE CTA BAR ABOVE FOOTER */}
      <section className="bg-gradient-to-r from-[#0878F9] to-[#00BFEF] py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 font-display text-lg font-bold text-white backdrop-blur-xs">
              wb
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-white">
                Vamos construir soluções para a educação e tecnologia?
              </h2>
              <p className="text-xs text-white/90 sm:text-sm">
                Disponível para parcerias, projetos educacionais, desenvolvimento web e palestras.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setReadmeModalOpen(true)}
              className="btn-interactive inline-flex items-center gap-2 rounded-full border border-white/80 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/15 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Copiar README do GitHub</span>
            </button>
            <a
              href="mailto:bastos.weeme@gmail.com"
              className="btn-interactive inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-[#0878F9] shadow-sm hover:bg-[#F5FBFF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      {/* 8. DEEP INDIGO FOOTER (#15115A) */}
      <footer className="bg-[#15115A] pt-16 pb-12 text-white">
        <div className="mx-auto max-w-6xl px-6">
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
                Análise e Desenvolvimento de Sistemas (Universidade Descomplica).
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-[#00BFEF]">
                <a
                  href="https://www.linkedin.com/in/wemerson-bastos-129451252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="mailto:bastos.weeme@gmail.com"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  E-mail
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="tel:+5588997204035"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  (88) 99720-4035
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
                <li className="tabular-nums">(88) 99720-4035</li>
                <li>Tauá — Ceará, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Wemerson Bastos Evangelista. Apresentação profissional
              construída a partir de informações reais de trajetória acadêmica e profissional.
            </p>

            {/* Controle acessível de movimento */}
            <button
              type="button"
              onClick={() => setMotionEnabled((prev) => !prev)}
              aria-pressed={!motionEnabled}
              className="rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
            >
              {motionEnabled ? 'Reduzir animações' : 'Ativar animações'}
            </button>
          </div>
        </div>
      </footer>

      {/* Modal for GitHub Profile README.md inspection & copy */}
      {readmeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="readme-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#15115A]/70 p-4 backdrop-blur-xs"
        >
          <div className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E2F0FF] px-6 py-4">
              <div>
                <h2
                  id="readme-modal-title"
                  className="font-display text-base font-bold text-[#15115A]"
                >
                  README.md para Perfil do GitHub
                </h2>
                <p className="text-xs text-[#526080]">
                  O arquivo /README.md do projeto está atualizado com seu link da Vercel e paleta
                  azul/ciano.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setReadmeModalOpen(false)}
                aria-label="Fechar janela"
                className="rounded-full p-2 text-[#526080] hover:bg-[#EAF6FF] hover:text-[#0878F9]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto bg-[#F7FBFF] p-6">
              <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-[#15115A]">
                {readmePreviewContent}
              </pre>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-[#E2F0FF] px-6 py-4">
              <button
                type="button"
                onClick={() => handleCopy(readmePreviewContent, 'readme')}
                className="btn-interactive inline-flex items-center gap-2 rounded-full bg-[#0878F9] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#0663D0]"
              >
                {copiedField === 'readme' ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Markdown Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copiar Markdown</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setReadmeModalOpen(false)}
                className="btn-interactive rounded-full border border-[#CBE4FF] px-5 py-2.5 text-xs font-semibold text-[#15115A] hover:bg-[#EAF6FF]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
