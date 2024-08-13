import React, { useState } from "react";

const DEFAULT_IMAGE_URL = "https://via.placeholder.com/256?text=Profile+Image";

const ImageUploader = ({onImageChange}) => {
  const [image, setImage] = useState(DEFAULT_IMAGE_URL);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageChange(reader.result)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-start items-center">
      <div className="">
        <img
          src={image}
          alt="Profile Preview"
          className=" ml-7 w-24 h-24 object-cover rounded-full border-2 border-gray-300"
        />
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className=" border-gray-300 p-2 rounded file-input"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
