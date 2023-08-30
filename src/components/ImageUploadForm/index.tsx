import React, { ChangeEvent, useState } from "react";
import axios from "axios";

type ImageUploadFormProps = {
  setThumbnailUrl: (url: string) => void;
};

const ImageUploadForm = ({ setThumbnailUrl }: ImageUploadFormProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (
      !selectedImage ||
      window.confirm("既に選択された画像を上書きしますか？")
    ) {
      setSelectedImage(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/uploads`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setThumbnailUrl(response.data.thumbnailUrl);

      console.log("Image uploaded:", response.data);
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="button" onClick={handleUpload}>
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploadForm;
