import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';
import SectionLabel from './SectionLabel';

const AISolutions = () => {
  const features = [
    {
      icon: '🕐',
      title: '24/7 Availability',
      description: 'Your AI chatbot never sleeps. Engage visitors at any hour, on any device.',
      color: '#0891B2',
    },
    {
      icon: '⚡',
      title: 'Instant Responses',
      description: 'Zero wait time. Customers get answers immediately without any queue.',
      color: COLORS.secondary,
    },
    {
      icon: '📈',
      title: 'Boost Conversions',
      description: 'Convert more visitors into leads with personalized, context-aware conversations.',
      color: '#16A34A',
    },
  ];

  const industries = [
    { label: '🏠 Real Estate', color: '#EA580C' },
    { label: '🛒 E-Commerce', color: COLORS.primary },
    { label: '🏥 Clinics', color: '#E11D48' },
  ];

  return (
    <section
      id="ai-solutions"
      style={{
        padding: `${SPACING.section} ${SPACING.sectionPadding}`,
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel accent={COLORS.accent} text="AI Solutions" />

        <h2
          style={{
            fontFamily: FONTS.display,
            fontWeight: 800,
            fontSize: 'clamp(2rem,3.5vw,2.8rem)',
            color: '#fff',
            margin: '1rem 0 0.5rem',
            letterSpacing: LETTER_SPACING.tight,
          }}
        >
          Custom Chatbot Services
        </h2>

        <p
          style={{
            color: COLORS.text.tertiary,
            marginBottom: SPACING['3xl'],
            fontSize: FONT_SIZE.md,
          }}
        >
          We build AI chatbots tailored to your business — deployed and production-ready.
        </p>

        {/* Feature cards */}
        <div
          className="ai-features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: SPACING.lg,
            marginBottom: '2rem',
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card"
              style={{ padding: SPACING.xl }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: SPACING.lg,
                  width: 52,
                  height: 52,
                  background: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontFamily: FONTS.display,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#fff',
                  marginBottom: '0.5rem',
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: COLORS.text.tertiary,
                  fontSize: FONT_SIZE.base,
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div
          style={{
            background: COLORS.bg.card,
            border: `1px solid ${COLORS.border.default}`,
            borderRadius: 16,
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: SPACING.lg,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: FONT_SIZE.xs,
                color: COLORS.text.ghost,
                letterSpacing: LETTER_SPACING['2xl'],
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Industries
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {industries.map((industry) => (
                <span
                  key={industry.label}
                  style={{
                    padding: '6px 14px',
                    background: `${industry.color}12`,
                    border: `1px solid ${industry.color}30`,
                    borderRadius: '100px',
                    fontFamily: FONTS.mono,
                    fontSize: FONT_SIZE.sm,
                    color: industry.color,
                  }}
                >
                  {industry.label}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://samvadxsystems.vercel.app/"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 400);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: COLORS.accent,
              color: '#fff',
              padding: '13px 26px',
              borderRadius: 10,
              fontFamily: FONTS.mono,
              fontSize: FONT_SIZE.sm,
              letterSpacing: LETTER_SPACING.small,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0E7490';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.accent;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🤖 Get Your Custom AI Chatbot →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
