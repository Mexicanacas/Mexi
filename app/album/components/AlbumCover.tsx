import Image from 'next/image';
import { FC } from 'react';

type Props = {
  src: string;
  alt: string;
};

export const AlbumCover: FC<Props> = ({ src, alt }) => (
  <Image src={src} alt={alt} height="250" width="250" className="shadow-md" />
);
