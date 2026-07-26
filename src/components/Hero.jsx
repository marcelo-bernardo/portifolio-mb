import { IconArrowUpRight, IconDownload } from './Icons';
import { profile } from '../data';
import perfil from '../assets/perfil.png';
import './Hero.css';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero container">
      <div className="hero__copy">
        <span className="hero__badge">
          <span className="hero__badge-dot" />
          Disponível para novos projetos
        </span>

        <h1 className="hero__name">
          Marcelo
          <br />
          Bernardo
        </h1>

        <p className="hero__role">Desenvolvedor &amp; Técnico em Informática</p>
        <p className="hero__intro">
          Transformo ideias em software — do rascunho no papel ao código em produção.
        </p>

        <div className="hero__actions">
          <a
            href="#projetos"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projetos');
            }}
          >
            Ver projetos
            <IconArrowUpRight />
          </a>
          <a
            href="#contatos"
            className="btn btn--ghost"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contatos');
            }}
          >
            Fale comigo
          </a>
        </div>

        <a href={profile.cvUrl} download className="hero__resume">
          <IconDownload />
          Baixar currículo
        </a>
      </div>

      <div className="hero__portrait">
        <div className="hero__portrait-frame" />
        <img src={perfil} alt="Foto de Marcelo Bernardo" className="hero__portrait-img" />
      </div>
    </section>
  );
}