import { forwardRef } from 'react';
import { skillGroups } from '../data';
import SectionLabel from './SectionLabel';
import './Skills.css';

const Skills = forwardRef((_, ref) => {
  return (
    <section id="habilidades" ref={ref} className="skills container">
      <SectionLabel index="03" title="Habilidades" />

      <div className="skills__table">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills__row">
            <span className="skills__row-label">{group.title}</span>
            <div className="skills__tags">
              {group.items.map((item) => (
                <span key={item} className="skills__tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
