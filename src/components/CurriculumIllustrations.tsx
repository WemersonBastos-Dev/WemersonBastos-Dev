import React from 'react';

interface HeroIllustrationProps {
  isActive: boolean;
  isHeroVisible: boolean;
  motionEnabled: boolean;
}

interface SectionIllustrationProps {
  isActive: boolean;
}

/**
 * ILUSTRAÇÃO 1 — APRESENTAÇÃO PROFISSIONAL (Hero Section)
 * Dispositivo em primeiro plano exibindo perfil profissional (avatar, identificação
 * e 3 blocos de competências: Web, Educação e Dados/IA) sobreposto a dois cartões
 * de apoio (Formação/Currículo à esquerda e Projetos/Sistemas à direita).
 */
export const HeroProfileIllustration: React.FC<HeroIllustrationProps> = ({
  isActive,
  isHeroVisible,
  motionEnabled,
}) => {
  const floatClass =
    motionEnabled && isHeroVisible
      ? 'ambient-float-active'
      : 'ambient-float-Active ambient-float-paused';

  return (
    <div
      className={`hero-illus-stage relative w-full max-w-[440px] select-none ${
        isActive ? 'illus-active' : ''
      }`}
    >
      <svg
        role="img"
        aria-label="Ilustração de apresentação profissional: dispositivo central com perfil e competências cercado por cartões de formação acadêmica e projetos tecnológicos"
        viewBox="0 0 460 430"
        className="h-auto w-full drop-shadow-[0_20px_36px_rgba(21,17,90,0.24)]"
      >
        {/* Planos circulares de fundo (respiro suave sobre o azul da seção) */}
        <g className={floatClass}>
          <circle cx="235" cy="215" r="176" fill="#EAF6FF" fillOpacity="0.14" />
          <circle
            cx="235"
            cy="215"
            r="138"
            fill="#FFFFFF"
            fillOpacity="0.12"
            stroke="#FFFFFF"
            strokeOpacity="0.22"
            strokeWidth="1.5"
          />
        </g>

        {/* CARTÃO DE FUNDO ESQUERDO: Formação & Currículo (Revelado após o dispositivo: 90ms) */}
        <g
          className="illus-part"
          style={{ '--part-delay': '90ms' } as React.CSSProperties}
        >
          <g className="hero-card-left">
            <g transform="rotate(-11 135 205)">
              <rect
                x="34"
                y="96"
                width="166"
                height="214"
                rx="20"
                fill="#FFFFFF"
                stroke="#15115A"
                strokeWidth="2.5"
              />
              {/* Área do ícone de formação acadêmica */}
              <rect
                x="50"
                y="114"
                width="134"
                height="86"
                rx="12"
                fill="#EAF6FF"
              />
              {/* Capelo / Formação Pedagógica e Acadêmica */}
              <path
                d="M117 136L151 151L117 166L83 151L117 136Z"
                fill="#0878F9"
                stroke="#15115A"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M97 158V173C97 178 106 183 117 183C128 183 137 178 137 173V158"
                fill="#D6ECFF"
                stroke="#15115A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M145 153V174"
                stroke="#00BFEF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="145" cy="176" r="3" fill="#00BFEF" />

              {/* Blocos estruturados de currículo */}
              <rect x="50" y="216" width="96" height="10" rx="5" fill="#15115A" />
              <rect x="50" y="234" width="126" height="8" rx="4" fill="#0878F9" />
              <rect x="50" y="250" width="112" height="8" rx="4" fill="#D6ECFF" />
              <rect x="50" y="266" width="84" height="8" rx="4" fill="#D6ECFF" />
              {/* Selo discreto de certificação */}
              <circle cx="164" cy="270" r="10" fill="#EAF6FF" stroke="#0878F9" strokeWidth="2" />
              <path
                d="M160 270L163 273L169 267"
                stroke="#0878F9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>

        {/* CARTÃO DE FUNDO DIREITO: Projetos & Sistemas (Revelado em 170ms) */}
        <g
          className="illus-part"
          style={{ '--part-delay': '170ms' } as React.CSSProperties}
        >
          <g className="hero-card-right">
            <g transform="rotate(12 332 230)">
              <rect
                x="244"
                y="122"
                width="174"
                height="204"
                rx="20"
                fill="#EAF6FF"
                stroke="#15115A"
                strokeWidth="2.5"
              />
              {/* Barra superior de janela de projeto */}
              <rect
                x="260"
                y="140"
                width="142"
                height="24"
                rx="7"
                fill="#FFFFFF"
                stroke="#CBE4FF"
                strokeWidth="1.5"
              />
              <circle cx="272" cy="152" r="3.5" fill="#15115A" />
              <circle cx="283" cy="152" r="3.5" fill="#0878F9" />
              <circle cx="294" cy="152" r="3.5" fill="#00BFEF" />

              {/* Painel visual de projeto e dados */}
              <rect
                x="260"
                y="174"
                width="142"
                height="74"
                rx="10"
                fill="#FFFFFF"
                stroke="#CBE4FF"
                strokeWidth="1.5"
              />
              {/* Gráfico de evolução / dados educacionais */}
              <rect x="276" y="216" width="14" height="18" rx="3" fill="#D6ECFF" />
              <rect x="298" y="206" width="14" height="28" rx="3" fill="#0878F9" fillOpacity="0.55" />
              <rect x="320" y="194" width="14" height="40" rx="3" fill="#0878F9" />
              <rect x="342" y="186" width="14" height="48" rx="3" fill="#15115A" />
              <circle cx="374" cy="198" r="10" fill="#00BFEF" fillOpacity="0.2" />
              <circle cx="374" cy="198" r="4.5" fill="#00BFEF" />

              {/* Linhas de estrutura de projeto */}
              <rect x="260" y="262" width="104" height="9" rx="4.5" fill="#15115A" />
              <rect x="260" y="279" width="132" height="8" rx="4" fill="#0878F9" fillOpacity="0.45" />
              <rect x="260" y="294" width="88" height="8" rx="4" fill="#FFFFFF" />
            </g>
          </g>
        </g>

        {/* DISPOSITIVO PRINCIPAL EM PRIMEIRO PLANO: Perfil Profissional (Revelado em 0ms) */}
        <g
          className="illus-part"
          style={{ '--part-delay': '0ms' } as React.CSSProperties}
        >
          <g className="hero-device-front">
            <g transform="rotate(5 236 212)">
              {/* Moldura estrutural azul-marinho */}
              <rect
                x="142"
                y="46"
                width="188"
                height="332"
                rx="30"
                fill="#15115A"
              />
              {/* Tela clara para contraste limpo e leitura imediata */}
              <rect
                x="151"
                y="56"
                width="170"
                height="312"
                rx="23"
                fill="#FFFFFF"
              />

              {/* Topo colorido do cartão de perfil */}
              <path
                d="M151 79C151 66.2975 161.297 56 174 56H298C310.703 56 321 66.2975 321 79V134H151V79Z"
                fill="#EAF6FF"
              />
              {/* Alto-falante discreto do dispositivo */}
              <rect
                x="212"
                y="66"
                width="48"
                height="5"
                rx="2.5"
                fill="#15115A"
                fillOpacity="0.25"
              />

              {/* Avatar Profissional em destaque */}
              <circle
                cx="236"
                cy="128"
                r="34"
                fill="#FFFFFF"
                stroke="#15115A"
                strokeWidth="2.5"
              />
              <circle cx="236" cy="128" r="29" fill="#D6ECFF" />
              {/* Silhueta profissional limpa */}
              <circle cx="236" cy="119" r="10.5" fill="#15115A" />
              <path
                d="M217 148C217 136.5 255 136.5 255 148"
                fill="#0878F9"
              />
              <path
                d="M217 148C217 136.5 255 136.5 255 148"
                stroke="#15115A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Detalhe ciano de verificação do perfil */}
              <circle
                cx="261"
                cy="150"
                r="8.5"
                fill="#00BFEF"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              <path
                d="M257.5 150L260 152.5L265 147.5"
                stroke="#15115A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Identificação visual do perfil (Nome e Área) */}
              <rect x="182" y="174" width="108" height="10" rx="5" fill="#15115A" />
              <rect x="198" y="190" width="76" height="7" rx="3.5" fill="#0878F9" />

              {/* BLOCO DE COMPETÊNCIA 1: Desenvolvimento Web */}
              <rect
                x="165"
                y="210"
                width="142"
                height="38"
                rx="10"
                fill="#EAF6FF"
                stroke="#CBE4FF"
                strokeWidth="1.5"
              />
              <rect x="173" y="218" width="22" height="22" rx="6" fill="#0878F9" />
              <path
                d="M181 226L177 229L181 232M187 226L191 229L187 232"
                stroke="#FFFFFF"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="203" y="221" width="68" height="7" rx="3.5" fill="#15115A" />
              <rect x="203" y="233" width="92" height="6" rx="3" fill="#0878F9" fillOpacity="0.45" />

              {/* BLOCO DE COMPETÊNCIA 2: Educação & Gestão Pedagógica */}
              <rect
                x="165"
                y="256"
                width="142"
                height="38"
                rx="10"
                fill="#EAF6FF"
                stroke="#CBE4FF"
                strokeWidth="1.5"
              />
              <rect x="173" y="264" width="22" height="22" rx="6" fill="#15115A" />
              <path
                d="M178 271H184V280H178V271ZM184 271H190V280H184V271Z"
                stroke="#00BFEF"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <rect x="203" y="267" width="78" height="7" rx="3.5" fill="#15115A" />
              <rect x="203" y="279" width="84" height="6" rx="3" fill="#0878F9" fillOpacity="0.45" />

              {/* BLOCO DE COMPETÊNCIA 3: Machine Learning & Dados */}
              <rect
                x="165"
                y="302"
                width="142"
                height="38"
                rx="10"
                fill="#EAF6FF"
                stroke="#CBE4FF"
                strokeWidth="1.5"
              />
              <rect x="173" y="310" width="22" height="22" rx="6" fill="#0878F9" />
              <circle cx="180" cy="321" r="2.2" fill="#FFFFFF" />
              <circle cx="188" cy="316" r="2.2" fill="#00BFEF" />
              <circle cx="188" cy="326" r="2.2" fill="#FFFFFF" />
              <path
                d="M182 320L186 317M182 322L186 325"
                stroke="#FFFFFF"
                strokeWidth="1.4"
              />
              <rect x="203" y="313" width="62" height="7" rx="3.5" fill="#15115A" />
              <rect x="203" y="325" width="90" height="6" rx="3" fill="#0878F9" fillOpacity="0.45" />

              {/* Barra inferior do sistema */}
              <rect
                x="210"
                y="353"
                width="52"
                height="5"
                rx="2.5"
                fill="#15115A"
                fillOpacity="0.2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

/**
 * ILUSTRAÇÃO 2 — COLABORAÇÃO E CONHECIMENTO (Seção #atuacao)
 * Quadro/notebook compartilhado revelado primeiro, seguido pelas três figuras
 * humanas em tons harmoniosos da paleta e linhas de conexão progressivas.
 */
export const CollaborationKnowledgeIllustration: React.FC<SectionIllustrationProps> = ({
  isActive,
}) => {
  return (
    <div
      className={`relative w-full max-w-[390px] select-none ${
        isActive ? 'illus-active' : ''
      }`}
    >
      <svg
        role="img"
        aria-label="Ilustração representando compartilhamento de conhecimento e colaboração em torno de um painel digital e notebook compartilhado"
        viewBox="0 0 400 380"
        className="h-auto w-full"
      >
        {/* Círculos de fundo como apoio discreto sobre #EAF6FF */}
        <circle cx="200" cy="195" r="168" fill="#D6ECFF" />
        <circle
          cx="200"
          cy="195"
          r="132"
          fill="#FFFFFF"
          stroke="#CBE4FF"
          strokeWidth="2"
        />

        {/* Linhas de conexão progressivas (aparição única) */}
        <path
          className="illus-line-draw"
          style={{ '--line-delay': '260ms' } as React.CSSProperties}
          d="M112 232C125 190 148 165 176 155"
          stroke="#0878F9"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="illus-line-draw"
          style={{ '--line-delay': '320ms' } as React.CSSProperties}
          d="M288 232C275 190 252 165 224 155"
          stroke="#00BFEF"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* PASSO 1 (0ms): Quadro / Interface de Conhecimento Compartilhado ao Topo/Centro */}
        <g
          className="illus-part"
          style={{ '--part-delay': '0ms' } as React.CSSProperties}
        >
          <rect
            x="96"
            y="54"
            width="208"
            height="122"
            rx="18"
            fill="#FFFFFF"
            stroke="#15115A"
            strokeWidth="2.5"
          />
          {/* Barra superior do quadro compartilhado */}
          <path
            d="M96 72C96 62.0589 104.059 54 114 54H286C295.941 54 304 62.0589 304 72V82H96V72Z"
            fill="#15115A"
          />
          <circle cx="114" cy="68" r="4" fill="#00BFEF" />
          <circle cx="126" cy="68" r="4" fill="#0878F9" />
          <rect x="142" y="65" width="68" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.8" />

          {/* Coluna Esquerda do Quadro: Conhecimento Pedagógico (Livro / Estrutura) */}
          <rect x="112" y="94" width="82" height="66" rx="10" fill="#EAF6FF" />
          <path
            d="M138 112C143 112 148 114 153 117C158 114 163 112 168 112V134C163 134 158 136 153 139C148 136 143 134 138 134V112Z"
            fill="#FFFFFF"
            stroke="#0878F9"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect x="126" y="146" width="54" height="6" rx="3" fill="#15115A" />

          {/* Coluna Direita do Quadro: Fluxo Digital e Dados */}
          <rect x="206" y="94" width="82" height="66" rx="10" fill="#EAF6FF" />
          <circle cx="226" cy="116" r="6" fill="#0878F9" />
          <circle cx="266" cy="116" r="6" fill="#15115A" />
          <circle cx="246" cy="138" r="6" fill="#00BFEF" />
          <path
            d="M232 116H260M230 121L242 134M262 121L250 134"
            stroke="#15115A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="220" y="148" width="54" height="5" rx="2.5" fill="#0878F9" />
        </g>

        {/* PASSO 2 (100ms): Figura Central ao Fundo (Conhecimento & Pesquisa) */}
        <g
          className="illus-part"
          style={{ '--part-delay': '100ms' } as React.CSSProperties}
        >
          <circle
            cx="200"
            cy="214"
            r="22"
            fill="#FFFFFF"
            stroke="#15115A"
            strokeWidth="2.5"
          />
          <path
            d="M160 288C160 256 240 256 240 288V304H160V288Z"
            fill="#D6ECFF"
            stroke="#15115A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </g>

        {/* PASSO 3 (180ms): Figura Colaboradora à Esquerda (Azul Principal) */}
        <g
          className="illus-part"
          style={{ '--part-delay': '180ms' } as React.CSSProperties}
        >
          <circle
            cx="126"
            cy="232"
            r="24"
            fill="#FFFFFF"
            stroke="#15115A"
            strokeWidth="2.5"
          />
          <path
            d="M80 318C80 278 172 278 172 318V332H80V318Z"
            fill="#0878F9"
            stroke="#15115A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Detalhe de gola clara */}
          <path
            d="M114 283L126 297L138 283"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* PASSO 4 (250ms): Figura Colaboradora à Direita (Azul-Marinho & Ciano) */}
        <g
          className="illus-part"
          style={{ '--part-delay': '250ms' } as React.CSSProperties}
        >
          <circle
            cx="274"
            cy="232"
            r="24"
            fill="#FFFFFF"
            stroke="#15115A"
            strokeWidth="2.5"
          />
          <path
            d="M228 318C228 278 320 278 320 318V332H228V318Z"
            fill="#15115A"
            stroke="#15115A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Detalhe ciano discreto */}
          <path
            d="M262 283L274 297L286 283"
            stroke="#00BFEF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* PASSO 5 (300ms): Notebook / Documento Compartilhado na Mesa Central */}
        <g
          className="illus-part"
          style={{ '--part-delay': '300ms' } as React.CSSProperties}
        >
          <rect
            x="152"
            y="286"
            width="96"
            height="52"
            rx="10"
            fill="#FFFFFF"
            stroke="#15115A"
            strokeWidth="2.5"
          />
          <rect x="168" y="302" width="64" height="7" rx="3.5" fill="#0878F9" />
          <rect x="178" y="315" width="44" height="6" rx="3" fill="#D6ECFF" />
          <circle cx="200" cy="312" r="4" fill="#00BFEF" />
          {/* Base da mesa / plataforma */}
          <rect
            x="64"
            y="332"
            width="272"
            height="10"
            rx="5"
            fill="#15115A"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * ILUSTRAÇÃO 3 — EDUCAÇÃO E TECNOLOGIA (Seção #competencias)
 * Interface estruturada integrando Educação (livro/trilha pedagógica) e
 * Tecnologia (código/dados) conectadas por uma ponte visual limpa.
 */
export const EducationTechBridgeIllustration: React.FC<SectionIllustrationProps> = ({
  isActive,
}) => {
  return (
    <div
      className={`flex flex-col items-center select-none ${
        isActive ? 'illus-active' : ''
      }`}
    >
      <div className="relative w-full max-w-[290px]">
        <svg
          role="img"
          aria-label="Interface visual conectando um módulo de Educação e Pedagogia a um módulo de Código e Ciência de Dados"
          viewBox="0 0 300 470"
          className="h-auto w-full drop-shadow-[0_20px_36px_rgba(8,120,249,0.16)]"
        >
          {/* Halo de fundo suave */}
          <rect
            x="8"
            y="24"
            width="284"
            height="422"
            rx="42"
            fill="#EAF6FF"
          />

          {/* PASSO 1 (0ms): Dispositivo / Interface Principal */}
          <g
            className="illus-part"
            style={{ '--part-delay': '0ms' } as React.CSSProperties}
          >
            {/* Moldura Azul-Marinho */}
            <rect
              x="24"
              y="12"
              width="252"
              height="446"
              rx="34"
              fill="#15115A"
            />
            {/* Superfície interna clara */}
            <rect
              x="33"
              y="22"
              width="234"
              height="426"
              rx="26"
              fill="#F5FAFF"
            />

            {/* Cabeçalho da Interface */}
            <path
              d="M33 48C33 33.6406 44.6406 22 59 22H241C255.359 22 267 33.6406 267 48V78H33V48Z"
              fill="#0878F9"
            />
            {/* Alto-falante superior */}
            <rect
              x="122"
              y="32"
              width="56"
              height="5"
              rx="2.5"
              fill="#15115A"
              fillOpacity="0.35"
            />
            {/* Identidade WB limpa no cabeçalho da interface */}
            <rect
              x="52"
              y="46"
              width="38"
              height="20"
              rx="6"
              fill="#15115A"
            />
            <text
              x="71"
              y="60"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="700"
              fontFamily="Poppins, sans-serif"
            >
              WB
            </text>
            <rect x="100" y="50" width="96" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.9" />
            <rect x="100" y="60" width="64" height="5" rx="2.5" fill="#D6ECFF" />
            <circle cx="240" cy="56" r="6" fill="#00BFEF" />
          </g>

          {/* PASSO 2 (100ms): Módulo Superior — EDUCAÇÃO & PEDAGOGIA (Livro + Trilha) */}
          <g
            className="illus-part"
            style={{ '--part-delay': '100ms' } as React.CSSProperties}
          >
            <rect
              x="49"
              y="96"
              width="202"
              height="112"
              rx="16"
              fill="#FFFFFF"
              stroke="#CBE4FF"
              strokeWidth="2"
            />
            {/* Ícone de Livro Aberto (Educação) */}
            <rect
              x="65"
              y="112"
              width="46"
              height="46"
              rx="12"
              fill="#EAF6FF"
              stroke="#0878F9"
              strokeWidth="1.8"
            />
            <path
              d="M76 126C80 126 85 128 88 131C91 128 96 126 100 126V144C96 144 91 146 88 149C85 146 80 144 76 144V126Z"
              fill="#FFFFFF"
              stroke="#15115A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Barras de estrutura pedagógica */}
            <rect x="123" y="116" width="108" height="9" rx="4.5" fill="#15115A" />
            <rect x="123" y="131" width="84" height="7" rx="3.5" fill="#0878F9" />
            <rect x="123" y="144" width="96" height="6" rx="3" fill="#D6ECFF" />

            {/* Indicadores de etapas de aprendizagem */}
            <rect x="65" y="172" width="52" height="20" rx="6" fill="#EAF6FF" />
            <circle cx="77" cy="182" r="4" fill="#0878F9" />
            <rect x="85" y="179" width="24" height="6" rx="3" fill="#15115A" />

            <rect x="124" y="172" width="52" height="20" rx="6" fill="#EAF6FF" />
            <circle cx="136" cy="182" r="4" fill="#00BFEF" />
            <rect x="144" y="179" width="24" height="6" rx="3" fill="#15115A" />

            <rect x="183" y="172" width="52" height="20" rx="6" fill="#EAF6FF" />
            <circle cx="195" cy="182" r="4" fill="#0878F9" />
            <rect x="203" y="179" width="24" height="6" rx="3" fill="#15115A" />
          </g>

          {/* PASSO 3 (240ms): Ponte Visual de Conexão Educação ↔ Tecnologia */}
          <path
            className="illus-line-draw"
            style={{ '--line-delay': '240ms' } as React.CSSProperties}
            d="M115 208V268M185 208V268"
            stroke="#0878F9"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <g
            className="illus-part"
            style={{ '--part-delay': '220ms' } as React.CSSProperties}
          >
            <rect
              x="98"
              y="222"
              width="104"
              height="32"
              rx="16"
              fill="#15115A"
            />
            <circle cx="122" cy="238" r="6" fill="#00BFEF" />
            <path
              d="M136 238H164"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="178" cy="238" r="6" fill="#0878F9" />
          </g>

          {/* PASSO 4 (160ms): Módulo Inferior — TECNOLOGIA, CÓDIGO & IA */}
          <g
            className="illus-part"
            style={{ '--part-delay': '160ms' } as React.CSSProperties}
          >
            <rect
              x="49"
              y="268"
              width="202"
              height="146"
              rx="16"
              fill="#FFFFFF"
              stroke="#CBE4FF"
              strokeWidth="2"
            />
            {/* Ícone de Código (</>) */}
            <rect
              x="65"
              y="284"
              width="46"
              height="46"
              rx="12"
              fill="#15115A"
            />
            <path
              d="M82 301L76 307L82 313M94 301L100 307L94 313M90 299L86 315"
              stroke="#00BFEF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Bloco de estrutura de código e sistemas */}
            <rect x="123" y="288" width="96" height="9" rx="4.5" fill="#15115A" />
            <rect x="123" y="303" width="110" height="7" rx="3.5" fill="#0878F9" />
            <rect x="123" y="316" width="76" height="6" rx="3" fill="#D6ECFF" />

            {/* Painel inferior de Machine Learning e Análise de Dados */}
            <rect
              x="65"
              y="344"
              width="170"
              height="54"
              rx="10"
              fill="#EAF6FF"
            />
            {/* Barras de análise de dados */}
            <rect x="79" y="374" width="10" height="14" rx="3" fill="#94C8FF" />
            <rect x="95" y="366" width="10" height="22" rx="3" fill="#0878F9" />
            <rect x="111" y="356" width="10" height="32" rx="3" fill="#15115A" />

            {/* Rede de nós de IA conectada */}
            <circle cx="156" cy="363" r="5" fill="#0878F9" />
            <circle cx="156" cy="381" r="5" fill="#15115A" />
            <circle cx="184" cy="372" r="5.5" fill="#00BFEF" />
            <circle cx="212" cy="372" r="6" fill="#15115A" />
            <path
              d="M161 364L179 370M161 380L179 374M190 372H206"
              stroke="#15115A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* Indicador inferior do dispositivo */}
          <rect
            x="110"
            y="432"
            width="80"
            height="5"
            rx="2.5"
            fill="#15115A"
            fillOpacity="0.22"
          />
        </svg>
      </div>

      {/* Rótulo essencial em HTML para acessibilidade e nitidez */}
      <p className="mt-3 text-center font-display text-xs font-semibold tracking-wide text-[#4A5578]">
        Integração entre Prática Pedagógica e Engenharia de Software
      </p>
    </div>
  );
};
