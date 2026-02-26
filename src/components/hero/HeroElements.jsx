import { useEffect, useState } from 'react';
// Adjust path: components/hero -> go up two levels to reach src/constants
import { COLORS, FONTS, FONT_SIZE } from '../../constants';

/**
 * Typed - Typing effect component that cycles through strings
 */
export const Typed = ({ strings }) => {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        setText(currentString.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // Pause before deleting
        if (charIndex + 1 === currentString.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        setText(currentString.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // Move to next string
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
          setCharIndex(0);
        }
      }
    }, isDeleting ? 40 : 75);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings]);

  return (
    <span style={{ color: COLORS.primary }}>
      {text}
      <span
        style={{
          animation: 'blink 1s step-end infinite',
          color: COLORS.secondary,
        }}
      >
        |
      </span>
    </span>
  );
};

/**
 * TechPill - Floating tech badge with animation
 */
export const TechPill = ({ label, color, style }) => {
  const floatDuration = 2.5 + Math.random();

  return (
    <div
      style={{
        position: 'absolute',
        background: COLORS.bg.card,
        border: `1px solid ${color}55`,
        borderRadius: '100px',
        padding: '8px 14px',
        fontFamily: FONTS.mono,
        fontSize: FONT_SIZE.sm,
        color,
        animation: `float ${floatDuration}s ease-in-out infinite`,
        boxShadow: `0 0 20px ${color}20`,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {label}
    </div>
  );
};
