import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeKey, setActiveKey] = useState('inicio');
  const refs = {
    sobre: useRef(null),
    projetos: useRef(null),
    habilidades: useRef(null),
    contatos: useRef(null),
  };

  useEffect(() => {
    const sections = Object.entries(refs)
      .filter(([, ref]) => ref.current)
      .map(([key, ref]) => ({ key, el: ref.current }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.el === entry.target);
            if (match) setActiveKey(match.key);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s.el));

    const onScroll = () => {
      if (window.scrollY < 80) setActiveKey('inicio');
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = (key) => {
    if (key === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveKey('inicio');
      return;
    }
    refs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Header activeKey={activeKey} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About ref={refs.sobre} />
        <Projects ref={refs.projetos} />
        <Skills ref={refs.habilidades} />
        <ContactForm ref={refs.contatos} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
