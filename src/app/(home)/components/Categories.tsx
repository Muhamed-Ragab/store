import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../data';

export default function Categories() {
  return (
    <section className="container">
      <h1 className="relative mx-auto pb-2 text-center text-3xl font-bold after:absolute after:left-1/2 after:top-full after:h-0.5 after:w-16 after:-translate-x-1/2 after:bg-cyan-500">
        Categories
      </h1>

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ name, src }) => (
          <Link
            href={`/categories/${name.toLowerCase().replace(' ', '-')}`}
            key={name}
            className="group flex flex-col items-center gap-2 rounded-lg p-2"
          >
            <Image
              src={src}
              alt={name}
              className="duration-200 group-hover:scale-125"
              width={182}
              height={182}
              quality={100}
              priority
            />
            <h2 className="text-center text-sm font-bold sm:text-lg">{name}</h2>
          </Link>
        ))}
      </ul>
    </section>
  );
}
