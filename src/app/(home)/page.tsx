import { InView } from '@/components/motion/in-view';
import { PropsWithChildren } from 'react';
import ArrowUpBtn from './components/ArrowUpBtn';
import BrandsSlider from './components/BrandsSlider';
import Categories from './components/Categories';
import Hero from './components/Hero';
import ProductsCarousel from './components/ProductsCarousel';
import { products } from './data';

export default function Home() {
  return (
    <main className="space-y-32 py-8">
      <Hero />
      <Categories />
      <BlurredAnimation>
        <ProductsCarousel
          products={[...products, ...products]}
          title="Best Sellers"
        />
      </BlurredAnimation>
      <BlurredAnimation>
        <ProductsCarousel
          products={[...products, ...products]}
          title="New Arrivals"
        />
      </BlurredAnimation>
      <BlurredAnimation>
        <ProductsCarousel
          products={[...products, ...products]}
          title="Accessories"
        />
      </BlurredAnimation>
      <BlurredAnimation>
        <ProductsCarousel
          products={[...products, ...products]}
          title="Keyboards"
        />
      </BlurredAnimation>
      <BlurredAnimation>
        <ProductsCarousel products={[...products, ...products]} title="Mouse" />
      </BlurredAnimation>
      <BlurredAnimation>
        <ProductsCarousel
          products={[...products, ...products]}
          title="Headsets"
        />
      </BlurredAnimation>
      <BrandsSlider />
      <ArrowUpBtn />
    </main>
  );
}

function BlurredAnimation({ children }: PropsWithChildren) {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.95,
          filter: 'blur(4px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      viewOptions={{ margin: '0px 0px -100px 0px' }}
    >
      {children}
    </InView>
  );
}
