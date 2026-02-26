import { FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';

const SectionLabel = ({ accent, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <div
      style={{
        width: 22,
        height: 2.5,
        background: accent,
        borderRadius: 2,
      }}
    />
    <span
      style={{
        fontFamily: FONTS.mono,
        fontSize: FONT_SIZE.sm,
        color: accent,
        letterSpacing: LETTER_SPACING['2xl'],
        textTransform: 'uppercase',
      }}
    >
      {text}
    </span>
  </div>
);

export default SectionLabel;
