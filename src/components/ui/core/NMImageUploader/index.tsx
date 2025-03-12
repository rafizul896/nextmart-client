import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";
import Image from "next/image";

interface INMImageUploaderProps {
  imageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
}

const NMImageUploader = ({
  imageFiles,
  setImageFiles,
}: INMImageUploaderProps) => {
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((pre) => [...pre, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }

    e.target.value = "";
  };

  return (
    <div>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        label
      </label>

      <div>
        {imagePreview.map((preView, index) => (
          <Image
            src={preView}
            key={index}
            alt="images"
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};

export default NMImageUploader;
