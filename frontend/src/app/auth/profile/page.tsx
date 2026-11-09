"use client";

import { authClient } from "@/lib/auth-client";
import { useState, useRef } from "react";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // Для отображения новой картинки
  const [error, setError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0];

    if (file) {
      // Проверяем тип файла
      const validTypes = ["image/png", "image/jpeg", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        setError("Поддерживаются только файлы PNG, JPEG и SVG");
        return;
      }
      setProfileImg(file);
      
      // Создаем временную ссылку для мгновенного отображения превью
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>User info</h2>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>Your profile image:</p>

      {previewUrl || user?.image ? (<img 
            src={previewUrl ?? user?.image ?? undefined} 
            alt="Avatar" 
            style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover" }} 
          />)
         : (
          <p>"пусто"</p>
        )}
      <button onClick={handleButtonClick}>change profile image</button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".png,.jpg,.jpeg,.svg"
        hidden
        onChange={handleProfileImage}
      />
    </div>
  );
}
