'use client';

import React from 'react';
import Image from 'next/image';

interface CertificationCardProps {
  title: string;
  imageUrl: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-[300px]">
      <div className="relative flex-grow">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#5409DA] p-4 min-h-[80px] flex items-center justify-center">
        <h3 className="text-lg font-semibold text-white text-center line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

export default CertificationCard; 