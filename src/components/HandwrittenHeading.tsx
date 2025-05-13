
import React from 'react';

interface HandwrittenHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const HandwrittenHeading: React.FC<HandwrittenHeadingProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-indie mb-8 ${className}`}>
      {children}
    </h2>
  );
};

export default HandwrittenHeading;
