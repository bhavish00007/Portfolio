import { useEffect, useState } from 'react';
import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'AI Solutions',
    'Achievements',
    'Contact',
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: SPACING.navHeight,
        background: scrolled ? 'rgba(6,6,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? `1px solid ${COLORS.border.default}` : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 clamp(1rem,4vw,3rem)`,
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: FONTS.display,
          fontWeight: 800,
          fontSize: '1.1rem',
          color: '#fff',
          letterSpacing: '-0.02em',
        }}
      >
        BRK<span style={{ color: COLORS.primary }}>.</span>
      </span>

      {/* Desktop Navigation */}
      <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            className="nav-link"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bhavishkolpe@gmail.com&su=Hiring Inquiry&body=Hello Bhavish,%0D%0A%0D%0AI would like to discuss an opportunity with you."
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
  style={{ padding: '8px 18px', fontSize: '0.7rem' }}
>
  Hire Me
</a>
    </nav>
  );
};

export default Navbar;
