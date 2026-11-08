import React from 'react';

interface LogoProps {
  className?: string;
  variant?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img
      src="/assets/aistudio/logo_lives_saved_project_clean.png"
      alt="Lives Saved Project"
      className={`h-10 sm:h-12 w-auto object-contain shrink-0 transition-opacity hover:opacity-95 cursor-pointer ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
