import { forwardRef } from 'react';
import { profile } from '../data';
import SectionLabel from './SectionLabel';
import './About.css';

const About = forwardRef((_, ref) => {
  return (
    <section id="sobre" ref={ref} className="about container">
      <SectionLabel index="01" title="Sobre mim" />

      <div className="about__grid">
        <div className="about__bio">
          {profile.bioParagraphs.map((p, i) => (
            <p key={i} className="about__paragraph">
              {p}
            </p>
          ))}

          <blockquote className="about__quote">
            <span className="about__quote-mark">“</span>
            {profile.quote}
          </blockquote>
        </div>

        <dl className="about__facts">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="about__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
});

export default About;
