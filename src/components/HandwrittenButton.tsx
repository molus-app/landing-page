
import React from 'react';
import { cn } from '@/lib/utils';

interface HandwrittenButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
}

const HandwrittenButton: React.FC<HandwrittenButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  href,
  icon
}) => {
  const buttonClasses = cn(
    "relative inline-flex items-center justify-center px-8 py-3 border-2 border-black dark:border-white rounded-full font-indie text-xl hover:scale-105 transition-transform",
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default HandwrittenButton;
