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
        "http://localhost:3001/api/v1/uploads",
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
    <form action="http://localhost:3001/api/v1/uploads" method="post">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </form>
  );
};

export default ImageUploadForm;