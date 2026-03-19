
import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { TrophyIcon } from './icons/TrophyIcon';
import { GithubIcon } from './icons/GithubIcon';

// NOTE: To enable animations, you would typically install framer-motion
// For this draft, we simulate the structure. A simple fade transition is used.
// If framer-motion were installed: import { motion, AnimatePresence } from 'framer-motion';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-cyan-500 font-semibold mb-6">{children}</p>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS_DATA[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Under Progress':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Initial Phase Completed':
        return 'bg-blue-600/10 text-blue-500 border-blue-600/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => (
    <div key={project.id} className="fade-in">
      <div className="flex flex-wrap items-center gap-4 mb-1">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
        <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusColor(project.status)}`}>
            {project.status}
        </span>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project on GitHub"
            className="text-gray-400 hover:text-cyan-500 transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        )}
      </div>

      {project.achievement && (
        <div className="flex items-center gap-2 text-yellow-400 mt-3 mb-3">
            <TrophyIcon className="w-5 h-5 flex-shrink-0" />
            <p className="font-semibold text-base">{project.achievement}</p>
        </div>
      )}

      <p className="text-md text-cyan-600 mb-2">{project.category}</p>
      {project.role && (
        <p className="text-md text-gray-400 font-semibold mb-6">My Role: <span className="font-medium text-gray-300">{project.role}</span></p>
      )}

      <div className="space-y-6 text-gray-300">
        <div>
          <h4 className="font-semibold text-white text-lg mb-2">Project Overview</h4>
          <p>{project.description}</p>
        </div>

        {project.keyPoints && project.keyPoints.length > 0 && (
          <div>
            <h4 className="font-semibold text-white text-lg mb-2">Key Contributions</h4>
            <ul className="list-disc pl-5 space-y-2">
              {project.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-semibold text-white text-lg mb-2">Problem Solved</h4>
          <p>{project.problemSolved}</p>
        </div>
      </div>

      {project.teamNote && (
        <div className="mt-6">
            <blockquote className="border-l-4 border-cyan-600/50 pl-4 italic text-gray-400">
                {project.teamNote}
            </blockquote>
        </div>
      )}
      
      <div className="mt-8">
        <h4 className="font-semibold text-white text-lg mb-4">Gallery</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project.images.map((img, index) => (
            <div 
              key={index} 
              className="aspect-video bg-gray-800 rounded-lg overflow-hidden border-2 border-transparent hover:border-cyan-500 transition-all cursor-pointer group"
              onClick={() => setLightboxImage(img)}
            >
              <img 
                src={img} 
                alt={`${project.title} - view ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Single Video (Backward Compatibility) */}
      {project.videoUrl && (!project.videos || project.videos.length === 0) && (
        <div className="mt-8">
           <h4 className="font-semibold text-white text-lg mb-4">Demo Video</h4>
           <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg border-2 border-gray-700">
             <iframe 
                src={project.videoUrl} 
                title="Project Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
           </div>
        </div>
      )}

      {/* Multiple Videos */}
      {project.videos && project.videos.length > 0 && (
        <div className="mt-8">
          <h4 className="font-semibold text-white text-lg mb-4">Project Videos</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.videos.map((video, index) => (
              <div key={index} className="space-y-2">
                {video.title && <p className="text-sm font-medium text-gray-400">{video.title}</p>}
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg border-2 border-gray-700">
                  <iframe 
                    src={video.url} 
                    title={video.title || `Project Video ${index + 1}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="text-center">
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>A selection of my work in AI, Robotics, and Embedded Systems.</SectionSubtitle>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <aside className="md:col-span-1">
          <ul className="space-y-2 sticky top-24">
            {PROJECTS_DATA.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 ${
                    selectedProject.id === project.id
                      ? 'bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        
        <main className="md:col-span-3 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl">
           <ProjectDetail project={selectedProject} />
        </main>
      </div>

      {lightboxImage && (
        <div 
          role="dialog" 
          aria-modal="true" 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 fade-in-fast"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-20 right-8 text-white text-5xl font-light hover:text-cyan-500 transition-colors z-[101]"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image viewer"
          >
            &times;
          </button>
          <div 
            className="relative max-w-4xl max-h-[90vh] lightbox-image-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage} 
              alt="Expanded project view" 
              className="block max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}

      <style>{`
        .fade-in { animation: fadeInAnim 0.5s ease-in-out; } 
        @keyframes fadeInAnim { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        .fade-in-fast { animation: fadeInFastAnim 0.2s ease-in-out; }
        @keyframes fadeInFastAnim { from { opacity: 0; } to { opacity: 1; } }

        .lightbox-image-container { animation: zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </section>
  );
};

export default Projects;
