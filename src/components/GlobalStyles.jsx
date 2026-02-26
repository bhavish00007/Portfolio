import { COLORS, FONTS } from '../constants';

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    /* Reset & Base Styles */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: ${COLORS.bg.dark};
      color: ${COLORS.text.primary};
      font-family: ${FONTS.body};
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* Selection & Scrollbar */
    ::selection {
      background: rgba(37, 99, 235, 0.35);
      color: #fff;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${COLORS.bg.dark};
    }

    ::-webkit-scrollbar-thumb {
      background: ${COLORS.primary};
      border-radius: 10px;
    }

    /* Links */
    a {
      text-decoration: none;
      color: inherit;
    }

    /* Animations */
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }

    @keyframes pulse-ring {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 14px rgba(37, 99, 235, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(28px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Component Classes */
    .nav-link {
      font-family: ${FONTS.mono};
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.45);
      transition: color 0.2s;
      cursor: pointer;
    }

    .nav-link:hover {
      color: #fff;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: ${COLORS.primary};
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      font-family: ${FONTS.mono};
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      border: none;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;
    }

    .btn-primary:hover {
      background: #1D4ED8;
      transform: translateY(-2px);
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      color: ${COLORS.text.primary};
      padding: 12px 24px;
      border-radius: 8px;
      font-family: ${FONTS.mono};
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      border: 1px solid ${COLORS.border.light};
      cursor: pointer;
      transition: border-color 0.2s, transform 0.2s, color 0.2s;
    }

    .btn-outline:hover {
      border-color: rgba(226, 232, 240, 0.4);
      color: #fff;
      transform: translateY(-2px);
    }

    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: ${FONTS.mono};
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .section-tag::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
    }

    .card {
      background: ${COLORS.bg.card};
      border: 1px solid ${COLORS.border.default};
      border-radius: 16px;
      transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .skill-card {
      background: ${COLORS.bg.card};
      border: 1px solid ${COLORS.border.default};
      border-radius: 14px;
      padding: 20px 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: default;
    }

    .skill-card:hover {
      transform: translateY(-7px) scale(1.03);
    }

    .form-input {
      width: 100%;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid ${COLORS.border.default};
      border-radius: 10px;
      padding: 13px 16px;
      color: ${COLORS.text.primary};
      font-family: ${FONTS.body};
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-input::placeholder {
      color: ${COLORS.text.muted};
    }

    .form-input:focus {
      border-color: ${COLORS.primary};
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-grid { flex-direction: column !important; text-align: center !important; }
      .about-grid { flex-direction: column !important; }
      .projects-grid { grid-template-columns: 1fr !important; }
      .contact-grid { flex-direction: column !important; }
      .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
      .ai-features-grid { grid-template-columns: 1fr !important; }
      .achievements-grid { grid-template-columns: 1fr !important; }
      .hero-btns { flex-direction: column !important; align-items: center !important; }
    }
  `}</style>
);

export default GlobalStyles;
