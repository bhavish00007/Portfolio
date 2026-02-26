import { useState } from 'react';
import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';
import { PROJECTS } from '../data/projects';
import SectionLabel from './SectionLabel';

/**
 * ProjectCard - Individual project card with preview
 */
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, subtitle, description, tags, github, live, accent, preview: Preview } = project;

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? `${accent}55` : COLORS.border.default,
        boxShadow: isHovered ? `0 0 40px ${accent}15, 0 20px 60px rgba(0,0,0,0.5)` : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Preview area */}
      <div
        style={{
          height: 200,
          overflow: 'hidden',
          background: COLORS.bg.dark,
          borderBottom: `1px solid ${isHovered ? `${accent}30` : COLORS.border.default}`,
          transition: 'border-color 0.3s',
        }}
      >
        <Preview />
      </div>

      {/* Content */}
      <div style={{ padding: SPACING.xl }}>
        {/* Subtitle with accent */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}>
          <div
            style={{
              width: 28,
              height: 3,
              background: accent,
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: FONT_SIZE.sm,
              color: accent,
              letterSpacing: LETTER_SPACING.xl,
              textTransform: 'uppercase',
            }}
          >
            {subtitle}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#fff',
            marginBottom: '0.75rem',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: COLORS.text.secondary,
            fontSize: FONT_SIZE.base,
            lineHeight: 1.75,
            marginBottom: SPACING.lg,
          }}
        >
          {description}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: SPACING.lg }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '4px 10px',
                background: `${accent}12`,
                border: `1px solid ${accent}25`,
                borderRadius: '100px',
                fontFamily: FONTS.mono,
                fontSize: FONT_SIZE.xs,
                color: accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: accent,
              color: '#fff',
              padding: '9px 18px',
              borderRadius: 8,
              fontFamily: FONTS.mono,
              fontSize: FONT_SIZE.sm,
              letterSpacing: LETTER_SPACING.small,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ⭐ GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'transparent',
                color: COLORS.text.secondary,
                padding: '9px 18px',
                borderRadius: 8,
                fontFamily: FONTS.mono,
                fontSize: FONT_SIZE.sm,
                border: `1px solid ${COLORS.border.lighter}`,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(226,232,240,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLORS.text.secondary;
                e.currentTarget.style.borderColor = COLORS.border.lighter;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Projects - Section displaying featured projects
 */
const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: `${SPACING.section} ${SPACING.sectionPadding}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel accent={COLORS.secondary} text="Work" />

        {/* Header with link */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: SPACING.lg,
            margin: `1rem 0 ${SPACING.sectionBottom}`,
          }}
        >
          <h2
            style={{
              fontFamily: FONTS.display,
              fontWeight: 800,
              fontSize: 'clamp(2rem,3.5vw,2.8rem)',
              color: '#fff',
              letterSpacing: LETTER_SPACING.tight,
            }}
          >
            Selected Projects
          </h2>

          <a
            href="https://github.com/bhavish00007"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: FONTS.mono,
              fontSize: FONT_SIZE.sm,
              color: COLORS.text.tertiary,
              borderBottom: `1px solid ${COLORS.border.light}`,
              paddingBottom: 2,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.text.tertiary)}
          >
            All on GitHub →
          </a>
        </div>

        {/* Projects grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '1.5rem',
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
