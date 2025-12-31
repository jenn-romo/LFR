import { ExperienceItem, MediaItem, BlogPost } from '../types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "SWISH XR / SWISH XR Hooper",
    role: "Chief Operating Officer",
    period: "March 2025 – Present",
    description: "Leading operations for the first-ever basketball simulator gaming system without goggles or headsets.",
    achievements: [
      "Jumped into the world of VR/XR technology after months of strategic preparation.",
      "Launched the SWISH XR Hooper system to market.",
      "Overseeing day-to-day operations, supply chain, and strategic growth initiatives."
    ]
  },
  {
    company: "VORA VERA LLC",
    role: "Chief of Strategy and New Business Development",
    period: "2022 – Present",
    description: "Building and executing business plans for a $50M portfolio.",
    achievements: [
      "Optimized supply chain strategies leading to first product launches and revenue generation.",
      "Established strategic partnerships with Amazon Global Logistics.",
      "Managing portfolio execution and strategic growth."
    ]
  },
  {
    company: "PurpleSun Inc.",
    role: "Founder & CEO",
    period: "2012 – 2022",
    description: "Founded and scaled a healthcare technology company from startup to exit.",
    achievements: [
      "Secured 20+ global patents & trademarks (US, Canada, Japan, Europe, Australia, China).",
      "Scaled revenues 10x with over $10M in customer contracts.",
      "Secured $40M term sheet for M&A from a strategic partner.",
      "Achieved 65%+ gross margin and ISO 13485 quality management approval.",
      "Secured a new global regulatory standard via ASTM E35 committee vote.",
      "Commercialized complex electromechanical equipment and mobile apps."
    ]
  }
];

export const MEDIA_DATA: MediaItem[] = [
  {
    title: "New technology uses UV light to disinfect hospitals",
    outlet: "CBS News",
    date: "2020",
    url: "https://www.cbsnews.com/video/new-technology-uses-uv-light-to-disinfect-hospitals/",
    type: "video"
  },
  {
    title: "Hospitals Vie to Fund a Health-Tech Breakthrough",
    outlet: "The Wall Street Journal",
    date: "2018",
    url: "https://www.wsj.com/articles/hospitals-vie-to-fund-a-health-tech-breakthrough-1520430189",
    type: "article"
  },
  {
    title: "PurpleSun FMUV: Weapon of Defense Battling COVID-19",
    outlet: "PR Newswire",
    date: "2020",
    url: "https://www.prnewswire.com/news-releases/purplesun-fmuv-weapon-of-defense-battling-an-invisible-enemy-covid-19-301135627.html",
    type: "article"
  },
  {
    title: "13 Expert Tips For Maintaining Authenticity",
    outlet: "Newsweek Expert Forum",
    date: "2021",
    url: "https://www.newsweek.com/13-expert-tips-maintaining-authenticity-1576945",
    type: "article"
  },
  {
    title: "PurpleSun Featured Technology",
    outlet: "YouTube",
    date: "2019",
    url: "https://www.youtube.com/watch?v=M452d-nz_Gs",
    type: "video"
  }
];

export const SKILLS = [
  "Corporate Strategy",
  "Supply Chain Optimization",
  "Manufacturing & Operations",
  "Commercialization",
  "Mergers & Acquisitions (M&A)",
  "R&D & Innovation",
  "Intellectual Property (IP)",
  "Financial Planning (P&L)",
  "Regulatory Standards (ISO/UL)"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Execution: The Only Strategy That Matters",
    excerpt: "Why the most beautiful business plans fail and how to build a culture of relentless execution.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Leadership"
  },
  {
    id: 2,
    title: "Navigating the Regulatory Landscape in MedTech",
    excerpt: "Lessons learned from securing FDA, UL, and global patents for complex medical devices.",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Innovation"
  },
  {
    id: 3,
    title: "Scaling Operations: From Startup to Enterprise",
    excerpt: "Key operational shifts required when moving from early-stage growth to large-scale distribution.",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Growth"
  }
];