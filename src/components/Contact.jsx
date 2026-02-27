import { useState } from 'react';
import { COLORS, FONTS, FONT_SIZE, LETTER_SPACING, SPACING } from '../constants';
import SectionLabel from './SectionLabel';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const FORMSPREE_URL = 'https://formspree.io/f/mbdabjzg';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: '⭐', label: 'GitHub', href: 'https://github.com/bhavish00007', color: '#fff' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/bhavish-r-k-576b8a293', color: '#0A66C2' },
    { icon: '📧', label: 'Email', href: 'mailto:bhavishkolpe@gmail.com', color: '#E11D48' },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: `${SPACING.section} ${SPACING.sectionPadding}`,
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel accent={COLORS.danger} text="Contact" />

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
          Let's build something<br />
          <span style={{ color: COLORS.danger }}>together.</span>
        </h2>

        <p
          style={{
            color: COLORS.text.secondary,
            marginBottom: '4rem',
            fontSize: FONT_SIZE.md,
          }}
        >
          Open to full-time roles, freelance, and collaborations. I usually respond within 24 hours.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '4rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: SPACING.lg,
              minWidth: 300,
            }}
          >
            <input
              required
              type="text"
              name="name"
              className="form-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <input
              required
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />

            <textarea
              required
              name="message"
              className="form-input"
              placeholder="Your message..."
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              style={{ resize: 'vertical' }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                background: sent ? '#16A34A' : COLORS.danger,
                color: '#fff',
                border: 'none',
                padding: '14px',
                borderRadius: 10,
                fontFamily: FONTS.mono,
                fontSize: FONT_SIZE.sm,
                letterSpacing: LETTER_SPACING.medium,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'all 0.3s',
              }}
            >
              {loading ? 'Sending...' : sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>

            {error && (
              <div style={{ color: '#EF4444', fontSize: FONT_SIZE.sm }}>
                {error}
              </div>
            )}
          </form>

          {/* Sidebar */}
          <div style={{ width: 280 }}>
            <div
              style={{
                background: COLORS.bg.card,
                border: `1px solid ${COLORS.border.default}`,
                borderRadius: 16,
                padding: '2rem',
                marginBottom: SPACING.lg,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: FONT_SIZE.xs,
                  color: COLORS.text.ghost,
                  letterSpacing: LETTER_SPACING['2xl'],
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                Based in
              </div>

              <div
                style={{
                  fontFamily: FONTS.display,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                India 🇮🇳
              </div>
            </div>

            <div
              style={{
                background: COLORS.bg.card,
                border: `1px solid ${COLORS.border.default}`,
                borderRadius: 16,
                padding: '2rem',
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: FONT_SIZE.xs,
                  color: COLORS.text.ghost,
                  letterSpacing: LETTER_SPACING['2xl'],
                  textTransform: 'uppercase',
                  marginBottom: SPACING.lg,
                }}
              >
                Socials
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontFamily: FONTS.mono,
                      fontSize: FONT_SIZE.lg,
                      color: COLORS.text.secondary,
                    }}
                  >
                    <span>{social.icon}</span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
