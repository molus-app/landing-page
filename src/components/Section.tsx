
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-16 snap-start ${className}`}
    >
      <div className="w-full max-w-3xl animate-fade-in">
        {children}
      </div>
    </section>
  );
};

export default Section;
