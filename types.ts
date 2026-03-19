
export interface ProjectVideo {
  url: string;
  title?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  problemSolved: string;
  images: string[];
  videoUrl?: string; // Keeping for backward compatibility or single video
  videos?: ProjectVideo[];
  status: 'Completed' | 'Under Progress' | 'Initial Phase Completed';
  role?: string;
  teamNote?: string;
  achievement?: string;
  keyPoints?: string[];
  githubUrl?: string;
}

export interface Publication {
    title: string;
    conference: string;
    teamNote?: string;
    url?: string;
}

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    url?: string;
}

// FIX: Added the Experience interface for the Experience component.
export interface Experience {
    duration: string;
    title: string;
    organization: string;
    description: string;
}