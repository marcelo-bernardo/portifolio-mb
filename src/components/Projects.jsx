import { forwardRef, useEffect, useRef, useState } from 'react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';
import SectionLabel from './SectionLabel';
import { IconChevronLeft, IconChevronRight } from './Icons';
import './Projects.css';

const GAP = 24;

const Projects = forwardRef((_, ref) => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
  };

  const handlePrev = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const handleNext = () => scrollToIndex(Math.min(activeIndex + 1, projects.length - 1));

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.children[0]?.offsetWidth || 1;
    const idx = Math.round(track.scrollLeft / (cardWidth + GAP));
    const clamped = Math.min(Math.max(idx, 0), projects.length - 1);
    setActiveIndex(clamped);
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8);
  };

  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="projetos" ref={ref} className="projects">
      <div className="container">
        <SectionLabel index="02" title="Projetos" />
      </div>

      <div className="projects__carousel">
        <button
          className="projects__arrow projects__arrow--left"
          onClick={handlePrev}
          disabled={!canPrev}
          aria-label="Projeto anterior"
        >
          <IconChevronLeft />
        </button>

        <div className="projects__track" ref={trackRef} onScroll={handleScroll}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <button
          className="projects__arrow projects__arrow--right"
          onClick={handleNext}
          disabled={!canNext}
          aria-label="Próximo projeto"
        >
          <IconChevronRight />
        </button>
      </div>

      <div className="projects__dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`projects__dot ${i === activeIndex ? 'projects__dot--active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Ir para o projeto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
});

export default Projects;
