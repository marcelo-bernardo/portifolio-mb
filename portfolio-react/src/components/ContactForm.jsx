import { forwardRef, useCallback, useState } from 'react';
import { profile, socials } from '../data';
import SectionLabel from './SectionLabel';
import { IconSend, IconLinkedin, IconGithub, IconWhatsapp } from './Icons';
import './ContactForm.css';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/marcelobernardo501@gmail.com';

const INITIAL_FORM = { name: '', email: '', message: '' };

const ICONS = {
  linkedin: IconLinkedin,
  github: IconGithub,
  whatsapp: IconWhatsapp,
};

function Field({ id, label, as: Control = 'input', disabled, ...props }) {
  return (
    <div className="contact__field">
      <label htmlFor={id}>{label}</label>
      <Control id={id} disabled={disabled} {...props} />
    </div>
  );
}

const ContactForm = forwardRef(function ContactForm(_, ref) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const isSending = status === 'sending';

  const handleChange = useCallback(
    (field) => (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) return;

    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Contato do portfólio — ${name}`,
        }),
      });

      if (!res.ok) throw new Error('Falha no envio');

      setStatus('sent');
      setForm(INITIAL_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contatos" ref={ref} className="contact container">
      <SectionLabel index="04" title="Vamos conversar" />

      <div className="contact__stack">
        <p className="contact__lead">
          Tem um projeto em mente ou só quer bater um papo sobre tecnologia? Me manda uma
          mensagem.
        </p>

        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email}
        </a>

        {/* Formulário acima dos ícones */}
        <form
          className="contact__form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Formulário de contato"
        >
          <Field
            id="contact-name"
            name="name"
            label="Nome"
            type="text"
            autoComplete="name"
            placeholder="Como posso te chamar?"
            value={form.name}
            onChange={handleChange('name')}
            required
            disabled={isSending}
          />

          <Field
            id="contact-email"
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="nome@exemplo.com"
            value={form.email}
            onChange={handleChange('email')}
            required
            disabled={isSending}
          />

          <Field
            id="contact-message"
            name="message"
            label="Mensagem"
            as="textarea"
            rows={4}
            placeholder="Escreva sua mensagem aqui..."
            value={form.message}
            onChange={handleChange('message')}
            required
            disabled={isSending}
          />

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar mensagem'}
            <IconSend aria-hidden="true" />
          </button>

          {status === 'sent' && (
            <p className="contact__feedback contact__feedback--ok" role="status">
              Mensagem enviada! Responderei em breve.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__feedback contact__feedback--error" role="alert">
              Não consegui enviar. Tente novamente ou use o e-mail acima.
            </p>
          )}
        </form>

        {/* Ícones em linha horizontal */}
        <ul className="contact__socials" aria-label="Redes sociais">
          {socials.map(({ id, label, handle, url }) => {
            const Icon = ICONS[id];
            return (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  title={`${label} — ${handle}`}
                  aria-label={`${label}: ${handle}`}
                >
                  <Icon aria-hidden="true" />
                  <span className="contact__social-label">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
});

export default ContactForm;
