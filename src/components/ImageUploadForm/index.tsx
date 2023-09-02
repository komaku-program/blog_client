import React, { ChangeEvent, useState } from "react";
import axios from "axios";

type ImageUploadFormProps = {
  setThumbnailUrl: (url: string) => void;
};

const ImageUploadForm = ({ setThumbnailUrl }: ImageUploadFormProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [pleaseButton, setPleaseButton] = useState(true);

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
    setUploadSuccess(false);
    setUploadError(false);
    setPleaseButton(false);
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

      setUploadSuccess(true);
    } catch (error) {
      setUploadError(true);
      console.error("Image upload error:", error);
    }
  };

  return (
    <div>
      <label>サムネイル画像</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="button" onClick={handleUpload}>
        画像をアップロードする
      </button>
      {pleaseButton && (
        <p>ファイル選択後、「画像をアップロードする」を押して下さい</p>
      )}
      {uploadSuccess && <p>新しい画像のアップロードに成功しました</p>}
      {uploadError && <p>新しい画像のアップロードに失敗しました</p>}
    </div>
  );
};

export default ImageUploadForm;
