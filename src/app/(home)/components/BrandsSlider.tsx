import { InfiniteSlider } from '@/components/motion/infinite-slider';
import Image from 'next/image';
import { brands } from '../data';

export default function BrandsSlider() {
  return (
    <section className="container">
      <InfiniteSlider gap={24} reverse>
        {brands.map(brand => (
          <Image
            key={brand}
            src={brand}
            alt={brand}
            width={120}
            height={120}
            className="h-[120px] w-auto bg-white"
          />
        ))}
      </InfiniteSlider>
    </section>
  );
}
