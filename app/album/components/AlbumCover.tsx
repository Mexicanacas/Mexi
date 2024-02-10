import Image from 'next/image';
import { FC } from 'react';

type Props = {
  src: string;
  alt: string;
  credit: string;
};

export const AlbumCover: FC<Props> = ({ src, alt, credit }) => (
  <section className="flex flex-col items-center">
    <Image src={src} alt={alt} height="250" width="250" className="shadow-md" />
    <p>{credit}</p>
  </section>
);
