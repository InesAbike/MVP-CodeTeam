"use client";

import { cn } from "@/lib/utils";
import horizontalPlaceholder from "@/public/images/placeholder-h.svg";
import verticalPlaceholder from "@/public/images/placeholder-v.svg";
import Image, { type StaticImageData } from "next/image";
import { type ComponentProps } from "react";

interface CustomImageProps extends Omit<ComponentProps<typeof Image>, "src"> {
  src: string | StaticImageData | null;
  placeholderFormat?: "vertical" | "horizontal";
}

export const CustomImage = ({
  src,
  alt,
  className,
  placeholderFormat = "horizontal",
  ...rest
}: CustomImageProps) => {
  const placeholder =
    placeholderFormat === "horizontal"
      ? horizontalPlaceholder
      : verticalPlaceholder;

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
