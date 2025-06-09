'use client';

import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center rounded font-medium';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };
  
  const tagClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <span className={tagClasses}>
      {children}
    </span>
  );
};

export default Tag;