import { FONTS, FONT_SIZE, LETTER_SPACING } from '../constants';
import { COLORS } from '../constants/colors';

const Footer = () => {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/bhavish00007' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/bhavish-rk' },
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border.default}`,
        padding: '2rem clamp(1rem,5vw,4rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: FONTS.display,
          fontWeight: 800,
          fontSize: '1rem',
          color: '#fff',
        }}
      >
        BRK<span style={{ color: COLORS.primary }}>.</span>
      </span>

      {/* Copyright */}
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: FONT_SIZE.sm,
          color: COLORS.text.ghost,
          letterSpacing: LETTER_SPACING.large,
        }}
      >
        © 2025 Bhavish R K · Built with React
      </span>

      {/* Social Links */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: FONTS.mono,
              fontSize: FONT_SIZE.sm,
              color: COLORS.text.ghost,
              letterSpacing: LETTER_SPACING.large,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.text.ghost)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
