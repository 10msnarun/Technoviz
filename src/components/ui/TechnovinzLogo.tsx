import React from 'react';

interface TechnovinzLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export const TechnovinzLogo: React.FC<TechnovinzLogoProps> = ({
  className = '',
  showWordmark = true,
  size = 'md',
  theme = 'dark',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Monogram Symbol */}
      <div
        className={`${iconSizes[size]} rounded-lg bg-[#282923] flex items-center justify-center p-1.5 shadow-xs border border-[#3d3f37] group-hover:border-[#D8C4A8] transition-colors`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top T Crossbar */}
          <path
            d="M5 8 H27"
            stroke="#D8C4A8"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* T Stem curving/angling */}
          <path
            d="M16 8 V15 L19.5 24 L24.5 13"
            stroke="#F8F5EF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Intersecting V Contour */}
          <path
            d="M10 13 L15 24 L17.5 18"
            stroke="#A38B70"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle anchor point */}
          <circle cx="19.5" cy="26" r="1.2" fill="#D8C4A8" />
        </svg>
      </div>

      {showWordmark && (
        <span
          className={`font-serif font-bold tracking-tight ${textSizes[size]} ${
            isDark ? 'text-[#272722]' : 'text-white'
          }`}
        >
          Technovinz
        </span>
      )}
    </div>
  );
};
