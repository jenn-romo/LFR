export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface MediaItem {
  title: string;
  outlet: string;
  date: string;
  url: string;
  type: 'video' | 'article' | 'paper';
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}