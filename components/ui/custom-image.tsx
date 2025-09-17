"use client";

import { cn } from "@/lib/utils";
import placeholder from "@/public/images/placeholder.png";
import Image, { type StaticImageData } from "next/image";
import { type ComponentProps } from "react";

interface CustomImageProps extends Omit<ComponentProps<typeof Image>, "src"> {
  src: string | StaticImageData | null;
}

export const CustomImage = ({
  src,
  alt,
  className,
  ...rest
}: CustomImageProps) => {
  return (
    <Image
      src={src && src !== "null" ? src : placeholder.src}
      alt={alt ?? "Texte alternatif"}
      placeholder="blur"
      blurDataURL={placeholder.src}
      className={cn("object-cover", className)}
      {...rest}
    />
  );
};
