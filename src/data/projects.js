import { ExpensePreview, ChatPreview } from '../components/previews';

export const PROJECTS = [
  {
    id: 1,
    title: "OptimalCare",
    subtitle: "AI Chatbot",
    description:
      "AI-powered healthcare chatbot with a conversational interface. Helps patients get instant answers, book appointments, and navigate care pathways 24/7.",
    tags: ["Next.js", "Tailwind", "JavaScript", "AI"],
    github: "https://github.com/bhavish00007/chatbot-demo",
    live: "https://optimalcare-delta.vercel.app",
    accent: "#7C3AED",
    preview: ChatPreview,
  },
  {
    id: 2,
    title: "ExpenseFlow",
    subtitle: "Expense Tracker",
    description:
      "Full-stack expense tracking application with authentication, analytics dashboard, category management, and interactive charts for financial visibility.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/bhavish00007/expense-flow",
    live: "https://expense-flow-sand.vercel.app",
    accent: "#2563EB",
    preview: ExpensePreview,
  },
];
