'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, className = '' }) => {
  return (
    <div className={`bg-gary-100 mt-1 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <div className="relative w-full h-64">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default Card;