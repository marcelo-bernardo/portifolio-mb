import './Footer.css';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__text">© 2026 Marcelo Bernardo</span>
        <button
          className="footer__top"
          onClick={() => onNavigate('inicio')}
        >
          Voltar ao topo ↑
        </button>
      </div>
    </footer>
  );
}
