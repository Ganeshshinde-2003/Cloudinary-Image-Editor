"use client";

import { CldImage, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <div className="min-h-screen/2  flex flex-col justify-center items-center">
      <header className="text-4xl font-bold mb-8">Upload Image to See Magic</header>
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <CldUploadButton
            onUpload={(result: CloudinaryUploadWidgetResults) => {
              if (result.info && typeof result.info !== "string") {
                setImageId(result.info.public_id);
              }
            }}
            uploadPreset="upqrmtad"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload Image
          </CldUploadButton>
        </div>
        {imageId && (
          <div className="p-6">
            <CldImage
              width="500"
              height="300"
              src={imageId}
              sizes="100vw"
              alt="Description of my image"
            />
          </div>
        )}
      </div>
    </div>
  );
}
