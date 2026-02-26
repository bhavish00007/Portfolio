import { useState } from 'react';
import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';
import { SKILLS } from '../data/skills.jsx';
import SectionLabel from './SectionLabel';

/**
 * SkillCard - Individual skill card with hover effect
 */
const SkillCard = ({ name, color, svg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? `${color}55` : COLORS.border.default,
        boxShadow: isHovered
          ? `0 0 24px ${color}20, 0 12px 32px rgba(0,0,0,0.4)`
          : 'none',
      }}
    >
      <div style={{ width: 36, height: 36 }}>{svg}</div>

      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: FONT_SIZE.xs,
          letterSpacing: LETTER_SPACING.small,
          color: isHovered ? color : COLORS.text.ghost,
          transition: 'color 0.3s',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        {name}
      </span>
    </div>
  );
};

/**
 * Skills - Section displaying tech stack
 */
const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: `${SPACING.section} ${SPACING.sectionPadding}`,
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel accent={COLORS.orange} text="Tech Stack" />

        <h2
          style={{
            fontFamily: FONTS.display,
            fontWeight: 800,
            fontSize: 'clamp(2rem,3.5vw,2.8rem)',
            color: '#fff',
            margin: `1rem 0 ${SPACING.sectionBottom}`,
            letterSpacing: LETTER_SPACING.tight,
          }}
        >
          Tools I work with
        </h2>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6,1fr)',
            gap: '1rem',
          }}
        >
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
