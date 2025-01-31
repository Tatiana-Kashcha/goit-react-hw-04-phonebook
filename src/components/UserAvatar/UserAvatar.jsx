import { useState } from 'react';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { storage } from '../../firebase/firebaseConfig';

import noImageIcon from '../../images/avatar.png';
import * as s from './UserAvatar.styled';

export const UserAvatar = ({ avatar, userName }) => {
  const [photoURL, setPhotoURL] = useState(avatar);
  console.log(photoURL);

  const auth = getAuth();

  // Завантаження фото в Firebase Storage
  const uploadPhotoToFirebase = async file => {
    const storageRef = ref(storage, `profile_photos/${file.name}`);

    try {
      // Завантажити файл
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      setPhotoURL(downloadURL);
      console.log('Фото завантажено:', downloadURL);

      await updateProfile(auth.currentUser, { photoURL: downloadURL });
      console.log('Profile photo updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      await uploadPhotoToFirebase(file);
    }
  };

  // Відкрити вибір файлу
  const handlePhotoClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <s.Thumb>
      <s.Avatar
        src={photoURL ? photoURL : noImageIcon}
        alt={photoURL ? `Avatar ${userName}` : 'Default avatar'}
        onClick={handlePhotoClick}
      />
      <s.Upload
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </s.Thumb>
  );
};
