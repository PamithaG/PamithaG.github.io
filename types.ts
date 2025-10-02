export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools & DevOps';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl: string;
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  location?: string;
}