'use client';
import React from 'react';

interface Brand {
  id: number;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, logo: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2025/5/11/1964b038-af17-4050-856b-10209e0545e2.jpg.webp?ect=4g' },
  { id: 2, logo: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/5/e90f3a36-a551-41ed-ab6e-035338f74b00.png.webp?ect=4g' },
  { id: 3, logo: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2025/5/11/10a60366-7160-43fe-8661-07140040449c.jpg.webp?ect=4g' },
  { id: 4, logo: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/4/8c225596-d214-48be-a31b-5f08be62b793.png.webp?ect=4g' },
  { id: 5, logo: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2025/4/14/f356fac1-ef85-4c19-af39-cf1094dc8447.jpg.webp?ect=4g' },
  { id: 6, logo: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2025/3/18/18e16e84-3105-4973-b16f-a066710999f5.jpg' },

];

const BrandSlidel: React.FC = () => {
  // duplikat array supaya loop animasi lancar
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="overflow-hidden w-full  pt-3">
      <div className="flex animate-scrollLeft gap-10 whitespace-nowrap">
        {duplicatedBrands.map((brand, index) => (
          <div key={index} className="flex-shrink-0 w-40 flex justify-center items-center">
            <img
              src={brand.logo}
              alt={`Brand ${brand.id}`}
              className="w-322 h-60 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default BrandSlidel;
