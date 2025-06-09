'use client';
import React from 'react';

interface Brand {
  id: number;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, logo: 'https://logos-world.net/wp-content/uploads/2022/03/ADATA-Logo.png' },
  { id: 2, logo: 'https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png' },
  { id: 3, logo: 'https://logodownload.org/wp-content/uploads/2014/09/msi-logo-1.png' },
  { id: 4, logo: 'https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png' },
  { id: 5, logo: 'https://logos-marcas.com/wp-content/uploads/2020/11/Gigabyte-Emblema-650x366.png' },
  { id: 6, logo: 'https://www.nyk.co.id/wp-content/uploads/2018/10/nyk-nemesis.png' },
  { id: 7, logo: 'https://images.squarespace-cdn.com/content/v1/5e9bd172ae3b9707c719b4a5/1675072135082-O80388QMRY9MNUM7J21J/ASIC+logo.png' },
  { id: 8, logo: 'https://microless.com/cdn/product_description/4127103_1590905207.jpg' },
];

const BrandSlider: React.FC = () => {
  // duplikat array supaya loop animasi lancar
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="overflow-hidden w-full  pt-10">
      <div className="flex animate-scrollLeft gap-10 whitespace-nowrap">
        {duplicatedBrands.map((brand, index) => (
          <div key={index} className="flex-shrink-0 w-40 flex justify-center items-center">
            <img
              src={brand.logo}
              alt={`Brand ${brand.id}`}
              className="w-32 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
