import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING } from '../constants';
import { Typed } from './hero/HeroElements';

const Hero = () => {
  const roleStrings = [
    'Full Stack Developer',
    'AI Integration Engineer',
    'Open Source Contributor',
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px clamp(1rem,5vw,4rem)',
        backgroundColor: '#0b0f19', // clean solid background (no gradients)
      }}
    >
      <div
        style={{
          maxWidth: 800,
        }}
      >
        {/* Status Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.25)',
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
              background: '#22c55e',
            }}
          />
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: FONT_SIZE.sm,
              color: '#22c55e',
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
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: LETTER_SPACING.tight,
            marginBottom: '1.2rem',
            color: '#ffffff',
          }}
        >
          Bhavish
          <br />
          R K
        </h1>

        {/* Role Animation */}
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            marginBottom: '1.5rem',
            minHeight: '2rem',
            color: '#60a5fa',
          }}
        >
          <Typed strings={roleStrings} />
        </div>

        {/* Human Description */}
        <p
          style={{
            fontSize: '1.05rem',
            color: COLORS.text.secondary,
            lineHeight: 1.8,
            maxWidth: 560,
            marginBottom: '2.5rem',
          }}
        >
          I build full-stack web applications and AI-integrated systems that
          solve real-world problems. I focus on writing clean code, building
          scalable backends, and delivering production-ready solutions.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {/* View Projects */}
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>

          {/* Resume (WORKING) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;