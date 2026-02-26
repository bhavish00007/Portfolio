import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, PADDING, SPACING } from '../constants';

export const styleUtils = {
  // Common button styles
  buttonBase: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: FONTS.mono,
    fontSize: '0.75rem',
    letterSpacing: LETTER_SPACING.medium,
  },

  buttonPrimary: {
    background: COLORS.primary,
    color: '#fff',
    padding: PADDING.button,
    borderRadius: 8,
  },

  buttonOutline: {
    background: 'transparent',
    color: COLORS.text.primary,
    padding: PADDING.button,
    border: `1px solid ${COLORS.border.light}`,
    borderRadius: 8,
  },

  // Card styles
  card: {
    background: COLORS.bg.card,
    border: `1px solid ${COLORS.border.default}`,
    borderRadius: 16,
    transition: 'all 0.3s ease',
  },

  // Text styles
  sectionTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: FONTS.mono,
    fontSize: FONT_SIZE.sm,
    color: COLORS.text.tertiary,
    letterSpacing: LETTER_SPACING['2xl'],
    textTransform: 'uppercase',
    marginBottom: SPACING.lg,
  },

  sectionTitle: {
    fontFamily: FONTS.display,
    fontWeight: 800,
    fontSize: FONT_SIZE['5xl'],
    color: '#fff',
    marginBottom: SPACING.lg,
    letterSpacing: LETTER_SPACING.tight,
  },

  // Container
  container: {
    maxWidth: 1100,
    margin: '0 auto',
  },

  // Flex utilities
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

// Hover effects
export const hoverEffects = {
  elevate: {
    transition: 'transform 0.2s ease',
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
  },
};
