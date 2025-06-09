'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  { src: '/images/img_head_1.png', alt: 'NVIDIA GeForce RTX 50 Series Gaming Graphics Cards' },
  { src: '/images/img_head_2.png', alt: 'New AMD Radeon RX GPU' },
  { src: '/images/img_head_3.jpg', alt: 'Intel Arc High Performance Graphics' }
];

const HeroSection: React.FC = () => {
  return (
    <section className="mt-1 px-1">
      <div className="relative bg-gray-400 rounded-lg overflow-hidden">
        <div className="relative w-full h-28 sm:h-94 md:h-90 lg:h-106">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
