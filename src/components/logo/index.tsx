import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface FocusNestLogoProps {
  size?: Size;
  className?: string;
}

const FocusNestLogo: React.FC<FocusNestLogoProps> = ({ size = 'md', className = '' }) => {
  const fontSizes: Record<Size, string> = {
    sm: 'text-xl py-1',
    md: 'text-3xl py-2',
    lg: 'text-3xl py-2',
    xl: 'text-4xl py-2',
  };

  return (
    <div className={`inline-block ${className}`}>
      <span
        className={`${fontSizes[size]} font-bold tracking-wide`}
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
