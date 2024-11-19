'use client';

import Image from 'next/image';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Hero1 from '@/assets/images/hero 1.png';
import Hero2 from '@/assets/images/hero 2.png';
import Hero3 from '@/assets/images/hero 3.png';
import Hero4 from '@/assets/images/hero 4.png';
import Hero5 from '@/assets/images/hero 5.png';
import Hero6 from '@/assets/images/hero 6.png';
import { BorderTrail } from '@/components/motion/border-trail';
import { useState } from 'react';

const heroImages = [
  { name: 'PC Gaming', src: Hero1 },
  { name: 'PC Gaming', src: Hero2 },
  { name: 'Laptop', src: Hero3 },
  { name: 'Nature 4', src: Hero4 },
  { name: 'Keyboard', src: Hero5 },
  { name: 'Mouse Gaming', src: Hero6 },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container py-8">
      <div className="swiper w-full overflow-hidden rounded-lg">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          spaceBetween={60}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 55,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.75,
            slideShadows: false,
          }}
          loop
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper"
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index} className="relative p-1">
              <Image
                src={image.src}
                alt={image.name}
                width={600}
                height={600}
                priority
                quality={100}
                placeholder="blur"
              />
              {index === activeIndex && (
                <BorderTrail
                  className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
                  size={120}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
