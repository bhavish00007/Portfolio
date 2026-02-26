/**
 * Project preview SVG components
 */

export const ExpensePreview = () => (
  <svg
    viewBox="0 0 400 220"
    style={{ width: '100%', height: '100%', display: 'block' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="400" height="220" fill="#080818" />
    {/* Sidebar */}
    <rect x="0" y="0" width="80" height="220" fill="#0D0D22" />
    <rect x="10" y="20" width="60" height="8" rx="4" fill="#2563EB" opacity="0.8" />
    <rect x="14" y="40" width="40" height="5" rx="2.5" fill="#fff" opacity="0.2" />
    <rect x="14" y="55" width="50" height="5" rx="2.5" fill="#fff" opacity="0.1" />
    <rect x="14" y="70" width="45" height="5" rx="2.5" fill="#fff" opacity="0.1" />
    {/* Top bar */}
    <rect x="80" y="0" width="320" height="36" fill="#0D0D1A" />
    <rect x="94" y="12" width="80" height="12" rx="6" fill="#fff" opacity="0.08" />
    <circle cx="370" cy="18" r="10" fill="#2563EB" opacity="0.6" />
    {/* Stat cards */}
    <rect x="90" y="48" width="65" height="50" rx="8" fill="#111128" stroke="#1A1A3A" strokeWidth="1" />
    <rect x="100" y="58" width="30" height="5" rx="2.5" fill="#2563EB" opacity="0.6" />
    <rect x="100" y="70" width="45" height="8" rx="4" fill="#fff" opacity="0.7" />
    <rect x="165" y="48" width="65" height="50" rx="8" fill="#111128" stroke="#1A1A3A" strokeWidth="1" />
    <rect x="175" y="58" width="30" height="5" rx="2.5" fill="#7C3AED" opacity="0.6" />
    <rect x="175" y="70" width="45" height="8" rx="4" fill="#fff" opacity="0.7" />
    <rect x="240" y="48" width="65" height="50" rx="8" fill="#111128" stroke="#1A1A3A" strokeWidth="1" />
    <rect x="250" y="58" width="30" height="5" rx="2.5" fill="#16A34A" opacity="0.6" />
    <rect x="250" y="70" width="45" height="8" rx="4" fill="#fff" opacity="0.7" />
    {/* Bar chart */}
    <rect x="90" y="108" width="140" height="90" rx="8" fill="#111128" stroke="#1A1A3A" strokeWidth="1" />
    <rect x="100" y="115" width="50" height="5" rx="2.5" fill="#fff" opacity="0.3" />
    <rect x="104" y="158" width="16" height="30" rx="3" fill="#2563EB" opacity="0.8" />
    <rect x="124" y="148" width="16" height="40" rx="3" fill="#2563EB" opacity="0.6" />
    <rect x="144" y="140" width="16" height="48" rx="3" fill="#2563EB" opacity="0.9" />
    <rect x="164" y="152" width="16" height="36" rx="3" fill="#2563EB" opacity="0.5" />
    <rect x="184" y="135" width="16" height="53" rx="3" fill="#7C3AED" opacity="0.8" />
    {/* Donut placeholder */}
    <rect x="240" y="108" width="120" height="90" rx="8" fill="#111128" stroke="#1A1A3A" strokeWidth="1" />
    <circle
      cx="300"
      cy="153"
      r="26"
      fill="none"
      stroke="#2563EB"
      strokeWidth="10"
      strokeDasharray="70 100"
      opacity="0.9"
    />
    <circle
      cx="300"
      cy="153"
      r="26"
      fill="none"
      stroke="#7C3AED"
      strokeWidth="10"
      strokeDasharray="30 100"
      strokeDashoffset="-70"
      opacity="0.7"
    />
    <circle
      cx="300"
      cy="153"
      r="26"
      fill="none"
      stroke="#16A34A"
      strokeWidth="10"
      strokeDasharray="20 100"
      strokeDashoffset="-100"
      opacity="0.7"
    />
  </svg>
);

export const ChatPreview = () => (
  <svg
    viewBox="0 0 400 220"
    style={{ width: '100%', height: '100%', display: 'block' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="400" height="220" fill="#080818" />
    {/* Header */}
    <rect x="0" y="0" width="400" height="44" fill="#0D0D22" />
    <circle cx="24" cy="22" r="12" fill="#7C3AED" opacity="0.5" />
    <text x="42" y="27" fontFamily="monospace" fontSize="10" fill="white" opacity="0.8">
      OptimalCare AI
    </text>
    <circle cx="380" cy="22" r="6" fill="#16A34A" />
    {/* Chat messages */}
    {/* Bot */}
    <rect x="12" y="56" width="220" height="32" rx="14" fill="#111128" stroke="#7C3AED44" strokeWidth="1" />
    <text x="24" y="75" fontFamily="monospace" fontSize="8" fill="#C4B5FD">
      How can I help you today?
    </text>
    {/* User */}
    <rect x="168" y="100" width="220" height="32" rx="14" fill="#2563EB" opacity="0.85" />
    <text x="180" y="119" fontFamily="monospace" fontSize="8" fill="white">
      I need to book a clinic appointment
    </text>
    {/* Bot */}
    <rect x="12" y="144" width="260" height="44" rx="14" fill="#111128" stroke="#7C3AED44" strokeWidth="1" />
    <text x="24" y="161" fontFamily="monospace" fontSize="8" fill="#C4B5FD">
      Sure! I can help with that.
    </text>
    <text x="24" y="178" fontFamily="monospace" fontSize="8" fill="#C4B5FD">
      Which clinic are you looking for?
    </text>
    {/* Input bar */}
    <rect x="8" y="198" width="360" height="18" rx="9" fill="#111128" stroke="#1A1A2E" strokeWidth="1" />
    <text x="18" y="211" fontFamily="monospace" fontSize="7" fill="white" opacity="0.25">
      Type a message...
    </text>
    <circle cx="356" cy="207" r="7" fill="#7C3AED" />
  </svg>
);
