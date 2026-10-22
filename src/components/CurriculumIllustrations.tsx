import React from 'react';

interface IllustrationProps {
  isRevealed: boolean;
  parallaxBgOffset?: number;
  parallaxDetailOffset?: number;
}

/**
 * ILUSTRAÇÃO 1 — APRESENTAÇÃO PROFISSIONAL (Hero Section)
 * Dispositivo em primeiro plano exibindo perfil profissional (avatar, identificação
 * e 3 blocos de competências: Web, Educação e Dados/IA) sobreposto a dois cartões
 * de apoio (Formação/Currículo à esquerda e Projetos/Sistemas à direita).
 */
export const HeroProfileIllustration: React.FC<IllustrationProps> = ({
  isRevealed,
  parallaxBgOffset = 0,
  parallaxDetailOffset = 0,
}) => {
  return (
    <div
      className={`hero-illus-container illus-stage relative w-full max-w-[440px] py-2 select-none ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <svg
        role="img"
        aria-label="Ilustração de apresentação profissional: dispositivo central com perfil e blocos de competências sobre cartões de formação e projetos"
        viewBox="0 0 460 430"
        className="h-auto w-full drop-shadow-[0_20px_36px_rgba(21,17,90,0.22)]"
      >
        {/* Camada de Fundo com Parallax Discreto */}
        <g
          className="parallax-layer"
          style={{ '--parallax-offset': `${parallaxBgOffset}px` } as React.CSSProperties}
        >
          <circle cx="235" cy="215" r="174" fill="#EAF6FF" fillOpacity="0.14" />
          <circle
            cx="235"
            cy="215"
            r="136"
            fill="#FFFFFF"
            fillOpacity="0.12"
            stroke="#FFFFFF"
            strokeOpacity="0.24"
            strokeWidth="2"
          />
        </g>

        {/* CARTÃO DE FUNDO ESQUERDO: Formação & Currículo (Revelado em 110ms) */}
        <g
          className="illus-reveal"
          style={{ '--part-delay': '110ms' } as React.CSSProperties}
        >
          <g
            className="parallax-layer"
            style={{ '--parallax-offset': `${parallaxDetailOffset}px` } as React.CSSProperties}
          >
            <g className="hero-depth-left">
              <g transform="rotate(-10 135 205)">
                <rect
                  x="36"
                  y="98"
                  width="164"
                  height="212"
                  rx="20"
                  fill="#FFFFFF"
                  stroke="#15115A"
                  strokeWidth="2.5"
                />
                <rect x="52" y="116" width="132" height="84" rx="12" fill="#EAF6FF" />
                {/* Capelo Acadêmico */}
                <path
                  d="M118 136L150 150L118 164L86 150L118 136Z"
                  fill="#0878F9"
                  stroke="#15115A"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M99 157V171C99 176 107 181 118 181C129 181 137 176 137 171V157"
                  fill="#D6ECFF"
                  stroke="#15115A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M145 152V172"
                  stroke="#00BFEF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="145" cy="174" r="3" fill="#00BFEF" />

                {/* Linhas estruturadas de currículo */}
                <rect x="52" y="216" width="94" height="10" rx="5" fill="#15115A" />
                <rect x="52" y="234" width="122" height="8" rx="4" fill="#0878F9" />
                <rect x="52" y="250" width="108" height="8" rx="4" fill="#D6ECFF" />
                <rect x="52" y="266" width="80" height="8" rx="4" fill="#D6ECFF" />
              </g>
            </g>
          </g>
        </g>

        {/* CARTÃO DE FUNDO DIREITO: Projetos & Sistemas (Revelado em 210ms) */}
        <g
          className="illus-reveal"
          style={{ '--part-delay': '210ms' } as React.CSSProperties}
        >
          <g
            className="parallax-layer"
            style={{ '--parallax-offset': `${-parallaxDetailOffset}px` } as React.CSSProperties}
          >
            <g className="hero-depth-right">
              <g transform="rotate(11 332 230)">
                <rect
                  x="244"
                  y="122"
                  width="172"
                  height="202"
                  rx="20"
                  fill="#EAF6FF"
                  stroke="#15115A"
                  strokeWidth="2.5"
                />
                <rect
                  x="260"
                  y="140"
                  width="140"
                  height="24"
                  rx="8"
                  fill="#FFFFFF"
                  stroke="#CBE4FF"
                  strokeWidth="2"
                />
                <circle cx="273" cy="152" r="3.5" fill="#15115A" />
                <circle cx="284" cy="152" r="3.5" fill="#0878F9" />
                <circle cx="295" cy="152" r="3.5" fill="#00BFEF" />

                {/* Painel de Projeto */}
                <rect
                  x="260"
                  y="174"
                  width="140"
                  height="74"
                  rx="10"
                  fill="#FFFFFF"
                  stroke="#CBE4FF"
                  strokeWidth="2"
                />
                <rect x="278" y="216" width="14" height="18" rx="3" fill="#D6ECFF" />
                <rect x="300" y="204" width="14" height="30" rx="3" fill="#0878F9" fillOpacity="0.6" />
                <rect x="322" y="192" width="14" height="42" rx="3" fill="#0878F9" />
                <rect x="344" y="184" width="14" height="50" rx="3" fill="#15115A" />
                <circle cx="375" cy="198" r="5" fill="#00BFEF" />

                <rect x="260" y="262" width="102" height="9" rx="4.5" fill="#15115A" />
                <rect x="260" y="279" width="128" height="8" rx="4" fill="#0878F9" fillOpacity="0.5" />
                <rect x="260" y="294" width="84" height="8" rx="4" fill="#FFFFFF" />
              </g>
            </g>
          </g>
        </g>

        {/* DISPOSITIVO PRINCIPAL EM PRIMEIRO PLANO: Perfil Profissional (Revelado em 0ms) */}
        <g
          className="illus-reveal"
          style={{ '--part-delay': '0ms' } as React.CSSProperties}
        >
          <g className="hero-depth-front">
            <g transform="rotate(4 236 212)">
              <rect
                x="142"
                y="46"
                width="188"
                height="332"
                rx="30"
                fill="#15115A"
              />
              <rect
                x="151"
                y="56"
                width="170"
                height="312"
                rx="23"
                fill="#FFFFFF"
              />

              {/* Topo do Cartão de Perfil */}
              <path
                d="M151 79C151 66.2975 161.297 56 174 56H298C310.703 56 321 66.2975 321 79V134H151V79Z"
                fill="#EAF6FF"
              />
              <rect
                x="212"
                y="66"
                width="48"
                height="5"
                rx="2.5"
                fill="#15115A"
                fillOpacity="0.25"
              />

              {/* Avatar Profissional */}
              <circle
                cx="236"
                cy="128"
                r="34"
                fill="#FFFFFF"
                stroke="#15115A"
                strokeWidth="2.5"
              />
              <circle cx="236" cy="128" r="28" fill="#D6ECFF" />
              <circle cx="236" cy="119" r="10" fill="#15115A" />
              <path
                d="M217 147C217 136 255 136 255 147"
                fill="#0878F9"
                stroke="#15115A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Acento pontual ciano */}
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Barras de Identificação Visual */}
              <rect x="182" y="174" width="108" height="10" rx="5" fill="#15115A" />
              <rect x="198" y="190" width="76" height="7" rx="3.5" fill="#0878F9" />

              {/* Bloco 1: Desenvolvimento Web */}
              <rect
                x="165"
                y="210"
                width="142"
                height="38"
                rx="10"
                fill="#EAF6FF"
                stroke="#CBE4FF"
                strokeWidth="2"
              />
              <rect x="173" y="218" width="22" height="22" rx="6" fill="#0878F9" />
              <path
                d="M181 226L177 229L181 232M187 226L191 229L187 232"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="203" y="221" width="68" height="7" rx="3.5" fill="#15115A" />
              <rect x="203" y="233" width="90" height="6" rx="3" fill="#0878F9" fillOpacity="0.5" />

              {/* Bloco 2: Educação & Pedagogia */}
              <rect
                x="165"
                y="256"
                width="142"
                height="38"
                rx="10"
                fill="#EAF6FF"
                stroke="#CBE4FF"
                strokeWidth="2"
              />
              <rect x="173" y="264" width="22" height="22" rx="6" fill="#15115A" />
              <path
                d="M178 271H184V280H178V271ZM184 271H190V280H184V271Z"
                stroke="#FFFFFF"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <rect x="203" y="267" width="78" height="7" rx="3.5" fill="#15115A" />
              <rect x="203" y="279" width="82" height="6" rx="3" fill="#0878F9" fillOpacity="0.5" />

              {/* Bloco 3: Machine Learning & Dados */}
              <rect
                x="165"
                y="302"
                width="142"
                height="38"
                rx="10"
                fill="#EAF6FF"
                stroke="#CBE4FF"
                strokeWidth="2"
              />
              <rect x="173" y="310" width="22" height="22" rx="6" fill="#0878F9" />
              <circle cx="180" cy="321" r="2.2" fill="#FFFFFF" />
              <circle cx="188" cy="316" r="2.2" fill="#00BFEF" />
              <circle cx="188" cy="326" r="2.2" fill="#FFFFFF" />
              <path
                d="M182 320L186 317M182 322L186 325"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
              <rect x="203" y="313" width="62" height="7" rx="3.5" fill="#15115A" />
              <rect x="203" y="325" width="88" height="6" rx="3" fill="#0878F9" fillOpacity="0.5" />

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
 * ILUSTRAÇÃO 2 (SUBSTITUÍDA) — MESA DE TRABALHO: NOTEBOOK, LIVRO, DOCUMENTO E CÓDIGO (Seção #atuacao)
 * Cena profissional clara e equilibrada: notebook aberto sobre a mesa exibindo
 * uma interface simples que relaciona Educação e Tecnologia, acompanhado por
 * um livro pedagógico, documento de planejamento e símbolo de código (</>).
 */
export const WorkstationIllustration: React.FC<IllustrationProps> = ({
  isRevealed,
  parallaxBgOffset = 0,
  parallaxDetailOffset = 0,
}) => {
  return (
    <div
      className={`illus-stage relative w-full max-w-[420px] py-2 select-none ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <svg
        role="img"
        aria-label="Ilustração de estação de trabalho com notebook exibindo interface de Educação e Tecnologia, livro pedagógico, documento estruturado e símbolo de código sobre a mesa"
        viewBox="0 0 440 370"
        className="h-auto w-full drop-shadow-[0_16px_32px_rgba(8,120,249,0.12)]"
      >
        {/* Camada de Fundo com Parallax Suave */}
        <g
          className="parallax-layer"
          style={{ '--parallax-offset': `${parallaxBgOffset}px` } as React.CSSProperties}
        >
          <rect
            x="36"
            y="28"
            width="368"
            height="284"
            rx="36"
            fill="#D6ECFF"
          />
          <rect
            x="56"
            y="46"
            width="328"
            height="248"
            rx="28"
            fill="#FFFFFF"
            stroke="#CBE4FF"
            strokeWidth="2"
          />
        </g>

        {/* ELEMENTO SECUNDÁRIO 1 (120ms): Documento de Planejamento à esquerda + Símbolo de Código */}
        <g
          className="illus-reveal"
          style={{ '--part-delay': '120ms' } as React.CSSProperties}
        >
          <g
            className="parallax-layer"
            style={{ '--parallax-offset': `${parallaxDetailOffset}px` } as React.CSSProperties}
          >
            {/* Documento estruturado em segundo plano à esquerda */}
            <rect
              x="44"
              y="108"
              width="92"
              height="120"
              rx="14"
              fill="#FFFFFF"
              stroke="#15115A"
              strokeWidth="2.5"
            />
            <rect x="60" y="126" width="44" height="8" rx="4" fill="#0878F9" />
            {/* Itens de planejamento verificados */}
            <circle cx="66" cy="150" r="6" fill="#EAF6FF" stroke="#0878F9" strokeWidth="2" />
            <path
              d="M63.5 150L65.5 152L69 148"
              stroke="#0878F9"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="78" y="147" width="42" height="6" rx="3" fill="#15115A" />

            <circle cx="66" cy="170" r="6" fill="#EAF6FF" stroke="#0878F9" strokeWidth="2" />
            <path
              d="M63.5 170L65.5 172L69 168"
              stroke="#0878F9"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="78" y="167" width="36" height="6" rx="3" fill="#15115A" />

            <rect x="60" y="190" width="60" height="6" rx="3" fill="#D6ECFF" />
            <rect x="60" y="202" width="46" height="6" rx="3" fill="#D6ECFF" />

            {/* Pequeno Símbolo de Código (</>) no canto superior direito */}
            <rect
              x="334"
              y="66"
              width="58"
              height="44"
              rx="12"
              fill="#15115A"
              stroke="#15115A"
              strokeWidth="2.5"
            />
            <path
              d="M354 82L347 88L354 94M372 82L379 88L372 94M366 80L360 96"
              stroke="#00BFEF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* ELEMENTO PRINCIPAL (0ms): Notebook sobre a mesa com interface Educação & Tecnologia */}
        <g
          className="illus-reveal"
          style={{ '--part-delay': '0ms' } as React.CSSProperties}
        >
          {/* Tela do Notebook */}
          <rect
            x="108"
            y="82"
            width="224"
            height="152"
            rx="16"
            fill="#15115A"
          />
          <rect
            x="116"
            y="90"
            width="208"
            height="134"
            rx="10"
            fill="#F5FAFF"
          />

          {/* Barra superior da interface na tela */}
          <path
            d="M116 100C116 94.4772 120.477 90 126 90H314C319.523 90 324 94.4772 324 100V112H116V100Z"
            fill="#0878F9"
          />
          <circle cx="130" cy="101" r="3.5" fill="#FFFFFF" />
          <circle cx="141" cy="101" r="3.5" fill="#D6ECFF" />
          <circle cx="152" cy="101" r="3.5" fill="#00BFEF" />
          <rect x="168" y="98" width="76" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.85" />

          {/* Painel Esquerdo na Tela: Educação (Livro Aberto) */}
          <rect
            x="128"
            y="122"
            width="88"
            height="88"
            rx="10"
            fill="#FFFFFF"
            stroke="#CBE4FF"
            strokeWidth="2"
          />
          <path
            d="M154 142C160 142 166 144 172 148C178 144 184 142 190 142V166C184 166 178 168 172 172C166 168 160 166 154 166V142Z"
            fill="#EAF6FF"
            stroke="#0878F9"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M172 148V172" stroke="#15115A" strokeWidth="2" strokeLinecap="round" />
          <rect x="142" y="182" width="60" height="7" rx="3.5" fill="#15115A" />
          <rect x="150" y="194" width="44" height="6" rx="3" fill="#0878F9" />

          {/* Painel Direito na Tela: Tecnologia & Dados */}
          <rect
            x="224"
            y="122"
            width="88"
            height="88"
            rx="10"
            fill="#FFFFFF"
            stroke="#CBE4FF"
            strokeWidth="2"
          />
          {/* Gráfico e estrutura de sistema */}
          <rect x="240" y="162" width="10" height="16" rx="3" fill="#D6ECFF" />
          <rect x="256" y="152" width="10" height="26" rx="3" fill="#0878F9" fillOpacity="0.65" />
          <rect x="272" y="140" width="10" height="38" rx="3" fill="#0878F9" />
          <rect x="288" y="132" width="10" height="46" rx="3" fill="#15115A" />
          <circle cx="245" cy="142" r="4.5" fill="#00BFEF" />
          <rect x="238" y="186" width="60" height="7" rx="3.5" fill="#15115A" />
          <rect x="238" y="197" width="42" height="5" rx="2.5" fill="#D6ECFF" />

          {/* Base / Teclado do Notebook */}
          <path
            d="M88 234H352L364 252C366 255 363.8 259 360 259H80C76.2 259 74 255 76 252L88 234Z"
            fill="#D6ECFF"
            stroke="#15115A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <rect x="192" y="240" width="56" height="6" rx="3" fill="#15115A" fillOpacity="0.35" />
        </g>

        {/* ELEMENTO COMPLEMENTAR NA MESA (200ms): Livro Pedagógico apoiado à direita + Superfície da Mesa */}
        <g
          className="illus-reveal"
          style={{ '--part-delay': '200ms' } as React.CSSProperties}
        >
          {/* Livro superior sobre a mesa */}
          <rect
            x="324"
            y="214"
            width="78"
            height="20"
            rx="6"
            fill="#0878F9"
            stroke="#15115A"
            strokeWidth="2.5"
          />
          <rect x="334" y="220" width="58" height="8" rx="3" fill="#FFFFFF" />

          {/* Livro inferior com marcador ciano */}
          <rect
            x="316"
            y="234"
            width="88"
            height="25"
            rx="7"
            fill="#15115A"
            stroke="#15115A"
            strokeWidth="2.5"
          />
          <rect x="326" y="241" width="68" height="11" rx="4" fill="#EAF6FF" />
          {/* Marcador de página ciano */}
          <path d="M376 241V266L382 261L388 266V241H376Z" fill="#00BFEF" />

          {/* Linha sólida da Mesa de Trabalho */}
          <rect
            x="24"
            y="259"
            width="392"
            height="12"
            rx="6"
            fill="#15115A"
          />
          <rect
            x="64"
            y="271"
            width="312"
            height="8"
            rx="4"
            fill="#D6ECFF"
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
export const EducationTechBridgeIllustration: React.FC<IllustrationProps> = ({
  isRevealed,
  parallaxBgOffset = 0,
}) => {
  return (
    <div
      className={`illus-stage flex flex-col items-center py-2 select-none ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="relative w-full max-w-[290px]">
        <svg
          role="img"
          aria-label="Interface visual conectando um módulo de Educação e Pedagogia a um módulo de Código e Ciência de Dados"
          viewBox="0 0 300 470"
          className="h-auto w-full drop-shadow-[0_20px_36px_rgba(8,120,249,0.15)]"
        >
          {/* Halo de fundo com Parallax Suave */}
          <g
            className="parallax-layer"
            style={{ '--parallax-offset': `${parallaxBgOffset}px` } as React.CSSProperties}
          >
            <rect x="8" y="24" width="284" height="422" rx="42" fill="#EAF6FF" />
          </g>

          {/* PASSO 1 (0ms): Dispositivo / Interface Principal */}
          <g
            className="illus-reveal"
            style={{ '--part-delay': '0ms' } as React.CSSProperties}
          >
            <rect
              x="24"
              y="12"
              width="252"
              height="446"
              rx="34"
              fill="#15115A"
            />
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
            <rect
              x="122"
              y="32"
              width="56"
              height="5"
              rx="2.5"
              fill="#15115A"
              fillOpacity="0.35"
            />
            <rect x="52" y="46" width="38" height="20" rx="6" fill="#15115A" />
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

          {/* PASSO 2 (110ms): Módulo Superior — EDUCAÇÃO & PEDAGOGIA */}
          <g
            className="illus-reveal"
            style={{ '--part-delay': '110ms' } as React.CSSProperties}
          >
            <rect
              x="49"
              y="96"
              width="202"
              height="112"
              rx="16"
              fill="#FFFFFF"
              stroke="#15115A"
              strokeWidth="2.5"
            />
            <rect
              x="65"
              y="112"
              width="46"
              height="46"
              rx="12"
              fill="#EAF6FF"
              stroke="#0878F9"
              strokeWidth="2"
            />
            <path
              d="M76 126C80 126 85 128 88 131C91 128 96 126 100 126V144C96 144 91 146 88 149C85 146 80 144 76 144V126Z"
              fill="#FFFFFF"
              stroke="#15115A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <rect x="123" y="116" width="108" height="9" rx="4.5" fill="#15115A" />
            <rect x="123" y="131" width="84" height="7" rx="3.5" fill="#0878F9" />
            <rect x="123" y="144" width="96" height="6" rx="3" fill="#D6ECFF" />

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

          {/* PASSO 3 (220ms): Ponte Visual de Conexão Educação ↔ Tecnologia */}
          <g
            className="illus-reveal"
            style={{ '--part-delay': '220ms' } as React.CSSProperties}
          >
            <path
              d="M115 208V268M185 208V268"
              stroke="#0878F9"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <rect x="98" y="222" width="104" height="32" rx="16" fill="#15115A" />
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
            className="illus-reveal"
            style={{ '--part-delay': '160ms' } as React.CSSProperties}
          >
            <rect
              x="49"
              y="268"
              width="202"
              height="146"
              rx="16"
              fill="#FFFFFF"
              stroke="#15115A"
              strokeWidth="2.5"
            />
            <rect x="65" y="284" width="46" height="46" rx="12" fill="#15115A" />
            <path
              d="M82 301L76 307L82 313M94 301L100 307L94 313M90 299L86 315"
              stroke="#00BFEF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <rect x="123" y="288" width="96" height="9" rx="4.5" fill="#15115A" />
            <rect x="123" y="303" width="110" height="7" rx="3.5" fill="#0878F9" />
            <rect x="123" y="316" width="76" height="6" rx="3" fill="#D6ECFF" />

            <rect x="65" y="344" width="170" height="54" rx="10" fill="#EAF6FF" />
            <rect x="79" y="374" width="10" height="14" rx="3" fill="#D6ECFF" />
            <rect x="95" y="366" width="10" height="22" rx="3" fill="#0878F9" />
            <rect x="111" y="356" width="10" height="32" rx="3" fill="#15115A" />

            <circle cx="156" cy="363" r="5" fill="#0878F9" />
            <circle cx="156" cy="381" r="5" fill="#15115A" />
            <circle cx="184" cy="372" r="5.5" fill="#00BFEF" />
            <circle cx="212" cy="372" r="6" fill="#15115A" />
            <path
              d="M161 364L179 370M161 380L179 374M190 372H206"
              stroke="#15115A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

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

      <p className="mt-4 text-center font-display text-xs font-semibold tracking-wide text-[#4A5578]">
        Integração entre Prática Pedagógica e Engenharia de Software
      </p>
    </div>
  );
};
