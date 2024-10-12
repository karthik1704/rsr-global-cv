import { SERVER_IMAGE_URL } from "@/app/constants";
import  NextImage from "next/image";
import { useParams } from "next/navigation";
import React, { use, useState, useTransition } from "react";

const DEFAULT_IMAGE_URL = "/images/256.png";
const MAX_SIZE_MB = 2;
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;

type Props = {
  onImageChange: (image: string) => void;
  image_url?: string;
};

const ImageUploader = ({onImageChange, image_url}:Props) => {
  const [image, setImage] = useState(image_url ? image_url : DEFAULT_IMAGE_URL);
  const [errorMessage, setErrorMessage]=useState('');
  const {id} = useParams<{id:string}>();

  const [isLoading, setIsLoading] = useState(false);
  
  interface HandleImageChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
  
  const handleImageChange = async (e: HandleImageChangeEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setErrorMessage(`File size exceeds ${MAX_SIZE_MB} MB`);
        setIsLoading(false);
        return;
      }

      const reader = new FileReader();
      const img = new Image();

      reader.onloadend = () => {
        img.src = reader.result as string;
      };

      img.onload = () => {
        const { width, height } = img;
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          setErrorMessage(`The image resolution must be within ${MAX_WIDTH}x ${MAX_HEIGHT}`);
          setIsLoading(false);
          return;
        }
        setErrorMessage('');
        setImage(reader.result as string);
        onImageChange(reader.result as string);
      };

      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch(`/api/image-upload?id=${id}`, {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        console.log(data);
        setImage(data.resume_image);
      } catch (error) {
        console.error('Error uploading image:', error);
        setErrorMessage('Error uploading image');
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (

    <div className="flex flex-col lg:flex-col w-full gap-4 items-center md:justify-center md:mx-auto mb-4">
  <div className="mb-4 md:mb-0 md:mr-4 relative w-[150px] h-[150px]">
    <NextImage
      src={isLoading? image : image?.split('/')[1]==="static" ? `${SERVER_IMAGE_URL}${image}` : image}
      alt="Profile Preview"
    fill
      className="w-[150px] h-[150px] object-cover rounded-full border-2 border-gray-300"
    />
  </div>
  <div className="flex flex-col items-center w-full md:w-auto">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="border border-gray-300 p-2 rounded w-full md:w-64 file-input disabled:opacity-50"
      disabled={isLoading}
    />
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    <p className="mt-2 text-sm text-gray-600">
      Please upload passport image, ensuring that the file size is within 2 MB.
    </p>
  </div>
</div>
  );
};

export default ImageUploader;
