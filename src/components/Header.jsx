import { useState } from 'react';
import { navItems } from '../data';
import './Header.css';

export default function Header({ activeKey, onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (key) => {
    onNavigate(key);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner container">
        <button className="header__brand" onClick={() => go('inicio')}>
          <span className="header__mark">MB</span>
          <span className="header__name">Marcelo Bernardo</span>
        </button>

        <nav className="header__nav">
          {navItems
            .filter((item) => item.key !== 'inicio')
            .map((item) => (
              <button
                key={item.key}
                className={`header__link ${activeKey === item.key ? 'header__link--active' : ''}`}
                aria-current={activeKey === item.key ? 'true' : undefined}
                onClick={() => go(item.key)}
              >
                {item.label}
              </button>
            ))}
        </nav>

        <a
          href="#contatos"
          className="btn btn--ghost header__cta"
          onClick={(e) => {
            e.preventDefault();
            go('contatos');
          }}
        >
          Fale comigo
        </a>

        <button
          className={`header__burger ${open ? 'header__burger--open' : ''}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="header__mobile">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`header__mobile-link ${activeKey === item.key ? 'header__link--active' : ''}`}
              onClick={() => go(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
