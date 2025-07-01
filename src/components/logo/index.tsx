import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface FocusNestLogoProps {
  size?: Size;
  className?: string;
}

const FocusNestLogo: React.FC<FocusNestLogoProps> = ({ size = 'md', className = '' }) => {
  const fontSizes: Record<Size, string> = {
    sm: 'text-xl px-0 py-0',
    md: 'text-2xl px-12 py-2',
    lg: 'text-3xl px-8',
    xl: 'text-4xl px-10',
  };

  return (
    <div className={`inline-block ${className}`}>
      <span
        className={`${fontSizes[size]} font-bold tracking-wide ${className}`}
        style={{
          fontFamily: 'cursive, "Comic Sans MS", sans-serif',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        FocusNest
      </span>
    </div>
  );
};
export default FocusNestLogo;


