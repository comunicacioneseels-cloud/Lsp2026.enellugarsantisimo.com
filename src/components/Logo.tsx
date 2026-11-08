import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light' }) => {
  const isLight = variant === 'light'; // Light text on dark bg

  return (
    <div className={`flex items-center gap-2 select-none shrink-0 ${className}`}>
      {/* Wordmark Lockup */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black italic text-xs tracking-wider uppercase ${
              isLight ? 'text-white' : 'text-[#2D2B50]'
            }`}
            style={{ fontStyle: 'italic', letterSpacing: '0.08em' }}
          >
            LIVES
          </span>
        </div>
        <div className="flex items-center gap-1.5 -mt-0.5">
          <span
            className={`font-black text-xl sm:text-2xl tracking-tighter uppercase font-sans ${
              isLight ? 'text-white drop-shadow-sm' : 'text-[#2D2B50]'
            }`}
            style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
          >
            SAVED
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase self-end mb-1 ${
              isLight ? 'text-[#35D5C5]' : 'text-[#FF6B5E]'
            }`}
          >
            PROJECT
          </span>
        </div>
      </div>

      {/* Dove / Flame Emblem */}
      <svg
        className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 ${isLight ? 'text-white' : 'text-[#2D2B50]'}`}
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Stylized Holy Dove & Flame Icon of Iglesia En el Lugar Santísimo */}
        <path d="M22 6C20.5 8.5 19 12 19 15C19 17 20 18.5 21.5 19.5C21 17.5 21.5 15 23 13C24 11.5 25.5 10 26 8.5C26.5 10.5 27.5 13 27 15.5C28.5 14 30.5 12 32 9.5C31 13 29 16.5 26.5 19C30 18.5 33.5 17 36 15C34.5 18 31.5 21 28 22.5C31.5 23 34.5 22.5 37 21C35 24 31 27 26 28C22 28.8 18 27.5 15.5 25C13.5 23 12.5 20 12.5 17C12.5 12 16.5 8 22 6Z" />
        <path d="M12 21C9 22 6.5 24.5 5 28C7.5 27 11 26.5 14 27.5C12.5 29 11 31 10 33C13 32 16.5 30.5 19 28C17 26 14.5 23.5 12 21Z" />
        <circle cx="21" cy="9" r="1.5" />
      </svg>
    </div>
  );
};
