
import React from 'react';

interface ProjectCardProps {
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block border-2 border-black p-6 rounded-lg hover:scale-105 transition-transform"
    >
      <h3 className="font-indie text-2xl">{title}</h3>
    </a>
  );
};

export default ProjectCard;
