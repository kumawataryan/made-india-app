// components/MasonryGrid.js
import Image from 'next/image';

const images = [
  "/designs/design-1.png",
  "/designs/design-2.png",
  "/designs/design-3.png",
  "/designs/design-4.png",
  "/designs/design-5.png",
  "/designs/design-6.png",
  "/designs/design-7.png",
  "/designs/design-8.png",
];

export default function MasonryGrid() {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-2 xl:columns-4 2xl:columns-4 gap-4 space-y-4 p-4 pb-100">
      {images.map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="responsive"
            width={500} // Width of the image
            height={500} // Height of the image
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}
