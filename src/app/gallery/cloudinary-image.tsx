"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useState, useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/full-heart";

export function CloudinaryImage(props: any & { imageData: SearchResult; path: string }) {
  const [transition, startTransition] = useTransition();
  const { imageData, path } = props;
  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            setIsFavorited(false);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, false, path);
            });
          }}
          className="absolute top-2 right-2 text-red-500 hover:text-white cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true, path);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
        />
      )}
    </div>
  );
}
