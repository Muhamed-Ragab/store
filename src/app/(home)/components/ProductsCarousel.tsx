'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Autoplay, Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export type Product = {
  name: string;
  store: string;
  price: number;
  image: string;
  discount: number;
  rating: number;
};

type Props = {
  title: string;
  products: Product[];
};

export default function ProductsCarousel({ title, products }: Props) {
  return (
    <section className="container space-y-16">
      <div className="space-y-3">
        <h2 className="relative w-fit text-3xl font-bold after:absolute after:-bottom-[13.5px] after:left-0 after:h-0.5 after:w-full after:bg-cyan-500">
          {title}
        </h2>
        <hr />
      </div>
      <div className="swiper w-full select-none overflow-hidden rounded-lg">
        <Swiper
          navigation
          mousewheel
          keyboard
          grabCursor
          centeredSlides
          slidesPerView="auto"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            448: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Card className="relative mx-auto max-w-72">
                <CardHeader>
                  <figure className="mx-auto h-[150px] space-y-2 overflow-hidden">
                    <Image
                      src={product.image}
                      width={200}
                      height={200}
                      alt={product.name}
                      loading="lazy"
                      className="object-fit mx-auto h-full w-full rounded-lg"
                    />
                    <figcaption className="line-clamp-2">
                      {product.name}
                    </figcaption>
                  </figure>
                  <p className="absolute left-2 top-2 rounded-lg bg-cyan-500 px-2 py-1 text-white">
                    {product.discount}% off
                  </p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {product.store}
                  </p>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: product.rating }, (_, index) => (
                      <Star
                        key={index}
                        color="yellow"
                        fill="yellow"
                        size={16}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground line-through">
                      {product.price}
                    </p>
                    <p className="text-lg font-bold">
                      {product.price - product.price * (product.discount / 100)}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Add to cart</Button>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
