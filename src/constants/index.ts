// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavLink {
  id: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

// Navigation links
export const navLinks: NavLink[] = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Hero content
export const heroContent = {
  headline: "We Engineer Digital Experiences That Scale",
  subtext:
    "East Leviathans — a precision-focused dev studio specializing in full-stack web applications, AI-powered tools, and scalable SaaS platforms.",
  cta1: "View Our Work",
  cta2: "Start a Project",
};

// Services (6 items)
export const services: Service[] = [
  {
    icon: "🌐",
    title: "Web Applications",
    description:
      "Custom React, Next.js, and MERN stack applications built for performance and scale.",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Intelligent automation, chatbots, and ML-powered features integrated into your workflow.",
  },
  {
    icon: "🚀",
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS development from MVP to production with subscription billing and analytics.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with React Native for iOS and Android.",
  },
  {
    icon: "⚡",
    title: "APIs & Integrations",
    description:
      "RESTful and GraphQL APIs, third-party integrations, and microservice architectures.",
  },
  {
    icon: "🔧",
    title: "Automation & Tools",
    description:
      "Custom scripts, browser extensions, and workflow automation to streamline operations.",
  },
];

// Process steps (4 items)
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We dive deep into your requirements, goals, and target audience to map the perfect solution.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Wireframes, prototypes, and UI/UX design that balances aesthetics with functionality.",
  },
  {
    step: 3,
    title: "Develop",
    description:
      "Clean, scalable code with modern frameworks, CI/CD pipelines, and rigorous testing.",
  },
  {
    step: 4,
    title: "Deploy",
    description:
      "Launch with confidence — optimized hosting, monitoring, and ongoing support.",
  },
];

// Projects (placeholder - 4 items)
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description:
      "A full-stack SaaS platform for managing remote teams with real-time collaboration features.",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    image: "/images/placeholder-project.png",
  },
  {
    id: 2,
    title: "Project Beta",
    description:
      "AI-powered content generation tool with custom fine-tuned models and enterprise API.",
    tags: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    image: "/images/placeholder-project.png",
  },
  {
    id: 3,
    title: "Project Gamma",
    description:
      "E-commerce platform with advanced analytics dashboard and automated inventory management.",
    tags: ["MERN Stack", "Stripe", "Redis", "Docker"],
    image: "/images/placeholder-project.png",
  },
  {
    id: 4,
    title: "Project Delta",
    description:
      "Mobile-first fitness application with AI coaching and real-time progress tracking.",
    tags: ["React Native", "Firebase", "TensorFlow", "Node.js"],
    image: "/images/placeholder-project.png",
  },
];

// Team members (placeholder - 2 items)
export const teamMembers: TeamMember[] = [
  {
    name: "Member One",
    role: "Full-Stack Developer & AI Engineer",
    bio: "Specializes in building scalable web applications and integrating AI solutions that drive real business value.",
    avatar: "/images/placeholder-avatar.png",
  },
  {
    name: "Member Two",
    role: "Full-Stack Developer & UI/UX Specialist",
    bio: "Crafts pixel-perfect interfaces and robust backend systems with a keen eye for user experience.",
    avatar: "/images/placeholder-avatar.png",
  },
];

// Testimonials (placeholder - 3 items)
export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    text: "East Leviathans delivered beyond our expectations. Their attention to detail and technical expertise transformed our vision into a product our users love.",
    avatar: "/images/placeholder-avatar.png",
  },
  {
    name: "David Park",
    role: "Founder, DataFlow",
    text: "Working with EL was seamless. They understood our complex requirements and built a solution that scales effortlessly with our growing user base.",
    avatar: "/images/placeholder-avatar.png",
  },
  {
    name: "Emily Chen",
    role: "CTO, NovaBridge",
    text: "The team's ability to blend AI capabilities with clean, maintainable code is remarkable. They're our go-to development partners.",
    avatar: "/images/placeholder-avatar.png",
  },
];

// Tech stack icons for About section
export const techStack: string[] = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "AWS",
  "TailwindCSS",
  "GraphQL",
];

// Social links
export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "#", icon: "linkedin" },
  { name: "GitHub", url: "#", icon: "github" },
  { name: "Twitter", url: "#", icon: "twitter" },
];

// Footer data
export const footerLinks: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
