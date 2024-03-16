import Image from "next/image";
import { FC } from "react";

type BackgroundImageProps = {
    src: string;
    alt: string;
}

// See documentation for next/image background: https://image-component.nextjs.gallery/background
export const BackgroundImage: FC<BackgroundImageProps> = ({ src, alt }) => (
    <Image
        alt={alt}
        src={src}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
    />
);