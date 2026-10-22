import {
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  Code2,
  ExternalLink,
  Globe2,
  GraduationCap,
  Landmark,
  Lightbulb,
  Mail,
  Phone,
  ScrollText,
  Sparkles,
} from 'lucide-react';

const technicalSkills = [
  {
    title: 'Desenvolvimento Web',
    icon: Code2,
    items: ['HTML, CSS, JavaScript...', 'No-code', 'UX/UI'],
  },
  {
    title: 'Machine Learning Engineer',
    icon: BrainCircuit,
    items: [
      'Fundamentos de IA e aprendizado de máquina',
      'Modelagem e análise de dados',
      'Aplicações educacionais inteligentes',
    ],
  },
  {
    title: 'Desenvolvedor Educacional',
    icon: GraduationCap,
    items: [
      'Criação de plataformas e jogos educacionais',
      'Uso de tecnologias para engajamento e personalização',
      'Adequação à BNCC e metodologias ativas',
    ],
  },
  {
    title: 'Pedagogo Empresarial',
    icon: Building2,
    items: [
      'Treinamentos corporativos',
      'Desenvolvimento de equipes',
      'Gestão de aprendizagem organizacional',
    ],
  },
  {
    title: 'Pedagogo Especializado',
    icon: BookOpen,
    items: [
      'Alfabetização e letramento',
      'Psicomotricidade e desenvolvimento humano',
      'Educação inclusiva e recursos digitais',
    ],
  },
];

const courses = [
  { title: 'Formação Continuada em Educação Infantil', org: 'AVAMEC/MEC' },
  { title: 'Formação em Alfabetização e Letramento', org: 'AVAMEC/MEC' },
  { title: 'Formação em Educação Especial e Inclusiva', org: 'AVAMEC/MEC' },
  { title: 'Gestão Democrática e Participativa na Escola', org: 'MEC' },
  { title: 'Metodologias Ativas e Ensino Híbrido', org: 'Google for Education' },
  { title: 'Psicomotricidade na Educação Básica', org: 'Plataforma Lattes' },
  { title: 'Tecnologias Digitais Aplicadas à Educação', org: 'AVAMEC/MEC' },
  { title: 'Avaliação Educacional e da Aprendizagem', org: 'AVAMEC/MEC' },
  { title: 'Educação Socioemocional', org: 'Instituto Ayrton Senna' },
  { title: 'Planejamento e Gestão Escolar', org: 'AVAMEC/MEC' },
  { title: 'Educação Ambiental e Sustentabilidade', org: 'Plataforma Lattes' },
  { title: 'Formação de Gestores e Supervisores Escolares', org: 'AVAMEC/MEC' },
];

const languages = [
  { name: 'Português', level: 'Nativo', code: 'BR' },
  { name: 'Espanhol', level: 'Intermediário', code: 'ES' },
  { name: 'Inglês', level: 'Básico', code: 'US' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Header / Hero */}
      <header className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900/70 to-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Educação, Gestão Pública e Tecnologia da Informação</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Wemerson Bastos Evangelista
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            <strong className="font-semibold text-white">Professor Pedagogo Especialista</strong> com
            expertise em <strong className="font-semibold text-white">Tecnologia da Informação</strong>,
            atuando nas áreas de{' '}
            <strong className="font-semibold text-emerald-400">
              Desenvolvimento Web, Machine Learning e Tecnologias Educacionais
            </strong>
            .
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm leading-relaxed text-slate-300">
                Desde 2018, faço parte da rede municipal de ensino de Tauá-CE e, atualmente, sou{' '}
                <span className="font-semibold text-white">Superintendente da SME de Tauá</span>.
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas pela Descomplica.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Minha trajetória é guiada por um propósito claro: construir{' '}
                <span className="font-semibold text-emerald-300">
                  pontes entre a educação e a tecnologia
                </span>
                , criando soluções inteligentes que ampliem o alcance do conhecimento, personalizem o
                aprendizado e tornem o processo educacional mais inclusivo, dinâmico e eficaz.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm leading-relaxed text-slate-300">
                Acredito que o futuro da educação está na capacidade de integrar práticas pedagógicas
                sólidas com recursos tecnológicos de ponta, transformando salas de aula, treinamentos
                e ambientes corporativos em espaços vivos de inovação e impacto social.
              </p>
              <blockquote className="mt-6 flex items-start gap-3 border-l-2 border-emerald-500 pl-4 italic text-slate-200">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm">
                  &ldquo;Cada linha de código que escrevo é um passo rumo ao futuro que escolhi
                  construir — unindo conhecimento, propósito e inovação.&rdquo;
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        {/* Atuação Atual e Graduação */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Landmark className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Superintendente da SME de Tauá</h2>
                <p className="text-xs text-slate-400">Rede Municipal de Ensino de Tauá-CE</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Gestão de políticas públicas educacionais
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Planejamento estratégico e inovação
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Acompanhamento pedagógico e administrativo
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Graduação em Curso</h2>
                <p className="text-xs text-slate-400">Formação Acadêmica Superior</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Análise e Desenvolvimento de Sistemas pela{' '}
              <span className="font-medium text-white">Universidade Descomplica</span>.
            </p>
          </div>
        </section>

        {/* Competências Técnicas */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">Competências Técnicas</h2>
            <p className="mt-1 text-sm text-slate-400">
              Áreas de especialização combinando pedagogia, gestão e engenharia de software.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">{skill.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cursos e Formações Complementares */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <ScrollText className="h-6 w-6 text-emerald-400" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Cursos e Formações Complementares
              </h2>
              <p className="mt-0.5 text-sm text-slate-400">
                Formação continuada em gestão escolar, inclusão e tecnologias educacionais.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex items-center justify-between gap-4 rounded-lg border border-slate-800/90 bg-slate-900/30 px-4 py-3.5"
              >
                <span className="text-sm font-medium text-slate-200">{course.title}</span>
                <span className="shrink-0 rounded border border-slate-700 bg-slate-800/80 px-2.5 py-0.5 text-xs text-slate-300">
                  {course.org}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Idiomas & Contato */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-2.5">
              <Globe2 className="h-5 w-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white">Idiomas</h2>
            </div>
            <div className="mt-5 space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-950/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-slate-300">
                      {lang.code}
                    </span>
                    <span className="text-sm font-medium text-white">{lang.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div>
              <h2 className="text-xl font-bold text-white">Contato</h2>
              <p className="mt-1 text-sm text-slate-400">
                Aberto a colaborações e projetos que envolvam tecnologia, educação e impacto social.
              </p>

              <div className="mt-6 space-y-3.5 text-sm">
                <a
                  href="mailto:bastos.weeme@gmail.com"
                  className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-slate-200 transition hover:border-emerald-500/40 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>bastos.weeme@gmail.com</span>
                </a>

                <a
                  href="tel:+5588997204035"
                  className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-slate-200 transition hover:border-emerald-500/40 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>(88) 99720-4035</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/wemerson-bastos-129451252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-slate-200 transition hover:border-emerald-500/40 hover:text-white"
                >
                  <span className="font-medium">LinkedIn — Meu Perfil</span>
                  <ExternalLink className="h-4 w-4 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
