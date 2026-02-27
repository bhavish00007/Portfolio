import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';
import SectionLabel from './SectionLabel';

const About = () => {
  const techStack = [
    'React',
    'Node.js',
    'Python',
    'AI/ML',
    'MongoDB',
    'Next.js',
  ];

  return (
    <section
      id="about"
      style={{
        padding: `${SPACING.section} ${SPACING.sectionPadding}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          className="about-grid"
          style={{
            display: 'flex',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Profile card */}
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: 280,
                height: 340,
                borderRadius: 20,
                background: COLORS.bg.card,
                border: `1px solid ${COLORS.border.default}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: COLORS.primary,
                }}
              />

              {/* Profile photo */}
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: 20,
                  border: `2px solid ${COLORS.primary}`,
                }}
              >
                <img
                  src="/me.jpg"
                  alt="Bhavish R K"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Name & title */}
         <span
  style={{
    fontFamily: FONTS.mono,
    fontSize: FONT_SIZE.xs,
    color: '#ffffff', 
    letterSpacing: LETTER_SPACING['2xl'],
    textTransform: 'uppercase',
  }}
>
  Bhavish R K
</span>
<span
  style={{
    fontFamily: FONTS.mono,
    fontSize: FONT_SIZE.xs - 0.05,
    color: '#2DD4F7', 
    letterSpacing: LETTER_SPACING.xl,
    marginTop: 6,
  }}
>
  Full Stack Dev
</span>

              {/* Corner decorations */}
              <div
                style={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  width: 30,
                  height: 30,
                  borderTop: `2px solid ${COLORS.secondary}`,
                  borderRight: `2px solid ${COLORS.secondary}`,
                  borderRadius: '0 6px 0 0',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 14,
                  left: 14,
                  width: 30,
                  height: 30,
                  borderBottom: `2px solid ${COLORS.secondary}`,
                  borderLeft: `2px solid ${COLORS.secondary}`,
                  borderRadius: '0 0 0 6px',
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <SectionLabel accent={COLORS.cyan} text="About Me" />

            <h2
              style={{
                fontFamily: FONTS.display,
                fontWeight: 800,
                fontSize: 'clamp(2rem,3.5vw,2.8rem)',
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: SPACING.lg,
                letterSpacing: LETTER_SPACING.tight,
              }}
            >
              Information Science
              <br />
              <span style={{ color: COLORS.cyan }}>Undergrad.</span>
            </h2>

            <p
              style={{
                color: COLORS.text.secondary,
                lineHeight: 1.85,
                marginBottom: '1rem',
                fontSize: FONT_SIZE.md,
              }}
            >
              Passionate about building scalable web applications and
              AI-powered solutions. I'm an Information Science undergraduate
              with a sharp focus on creating software that solves real problems.
            </p>

            <p
              style={{
                color: COLORS.text.secondary,
                lineHeight: 1.85,
                marginBottom: '2rem',
                fontSize: FONT_SIZE.md,
              }}
            >
              I actively participate in hackathons, contribute to open source,
              and have a strong foundation in Data Structures &amp; Algorithms.
              I love the challenge of turning complex ideas into clean, working
              products.
            </p>

            {/* Tech stack badges */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '5px 14px',
                    background: `${COLORS.cyan}07`,
                    border: `1px solid ${COLORS.cyan}20`,
                    borderRadius: '100px',
                    fontFamily: FONTS.mono,
                    fontSize: FONT_SIZE.xs,
                    color: COLORS.cyan,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
