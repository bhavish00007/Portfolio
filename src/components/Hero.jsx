import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';
import { Typed, TechPill } from './hero/HeroElements';

const Hero = () => {
  const roleStrings = [
    'Full Stack Developer',
    'AI Integration Engineer',
    'Open Source Contributor',
  ];

  const techPills = [
    { label: '⚛ React', color: '#61DAFB', style: { top: '22%', right: '8%' } },
    { label: '🐍 Python', color: '#3776AB', style: { top: '40%', right: '3%' } },
    {
      label: '🤖 AI/ML',
      color: COLORS.secondary,
      style: { bottom: '32%', right: '10%' },
    },
    {
      label: '⚡ Node.js',
      color: '#339933',
      style: { top: '65%', left: '2%' },
    },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: `80px clamp(1rem,5vw,4rem)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '15%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'rgba(37,99,235,0.05)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(124,58,237,0.06)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      {/* Floating tech pills */}
      {techPills.map((pill) => (
        <TechPill key={pill.label} {...pill} />
      ))}

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 800,
          animation: 'slideUp 0.8s ease both',
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(22,163,74,0.1)',
            border: '1px solid rgba(22,163,74,0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#16A34A',
              animation: 'pulse-ring 2s infinite',
            }}
          />
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: FONT_SIZE.sm,
              color: '#16A34A',
              letterSpacing: LETTER_SPACING.large,
            }}
          >
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: FONTS.display,
            fontSize: 'clamp(3.2rem, 7vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: LETTER_SPACING.tight,
            marginBottom: '1.25rem',
          }}
        >
          <span style={{ color: '#fff' }}>Bhavish</span>
          <br />
          <span style={{ color: '#fff' }}>R K</span>
        </h1>

        {/* Animated role */}
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            marginBottom: '1.5rem',
            minHeight: '2rem',
          }}
        >
          <Typed strings={roleStrings} />
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '1.05rem',
            color: COLORS.text.secondary,
            lineHeight: 1.8,
            maxWidth: 560,
            marginBottom: '2.5rem',
          }}
        >
          I build modern web applications and AI-powered solutions. From clean
          frontends to scalable backends — I ship things that work.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-btns"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a href="#projects" className="btn-primary">
            View Projects <span>→</span>
          </a>
          <a
            href="/Resume_College Format.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            ↓ Resume
          </a>
          <a href="#contact" className="btn-outline">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
