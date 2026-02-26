import { useState } from 'react';
import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';
import { ACHIEVEMENTS } from '../data/achievements';
import SectionLabel from './SectionLabel';

/**
 * AchievementCard - Individual achievement card
 */
const AchievementCard = ({ icon, label, detail, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: SPACING.xl,
        display: 'flex',
        alignItems: 'center',
        gap: SPACING.lg,
        borderColor: isHovered ? `${color}50` : COLORS.border.default,
        boxShadow: isHovered ? `0 0 30px ${color}15` : 'none',
      }}
    >
      {/* Icon wrapper */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          flexShrink: 0,
          background: `${color}15`,
          border: `1px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
        }}
      >
        {icon}
      </div>

      {/* Text content */}
      <div>
        <div
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            fontSize: '1.05rem',
            color: '#fff',
            marginBottom: 4,
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: FONT_SIZE.xs,
            color,
            letterSpacing: LETTER_SPACING.medium,
          }}
        >
          {detail}
        </div>
      </div>

      {/* Arrow indicator */}
      <div
        style={{
          marginLeft: 'auto',
          color: isHovered ? color : COLORS.text.ghost,
          fontSize: '1.2rem',
          transition: 'color 0.3s',
        }}
      >
        →
      </div>
    </div>
  );
};

/**
 * Achievements - Section displaying milestones
 */
const Achievements = () => {
  return (
    <section
      id="achievements"
      style={{
        padding: `${SPACING.section} ${SPACING.sectionPadding}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel accent={COLORS.warning} text="Achievements" />

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
          Milestones &amp; Recognition
        </h2>

        <div
          className="achievements-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: SPACING.lg,
          }}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
