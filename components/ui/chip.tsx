'use client';

import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-colors duration-200';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    secondary: 'bg-green-100 text-green-800 hover:bg-green-200',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };
  
  const chipClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${onClick ? 'cursor-pointer' : ''} ${className}`;
  
  return (
    <span className={chipClasses} onClick={onClick}>
      {children}
    </span>
  );
};

export default Chip;