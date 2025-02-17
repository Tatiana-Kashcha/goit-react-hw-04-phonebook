import { useState } from 'react';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { storage } from '../../firebase/firebaseConfig';

import noImageIcon from '../../images/avatar.png';
import * as s from './UserAvatar.styled';

export const UserAvatar = ({ user }) => {
  const auth = getAuth();

  const userName = user?.displayName;
  const avatar = user?.photoURL;
  const userId = user?.uid;

  const [photoURL, setPhotoURL] = useState(avatar);

  // Завантаження фото в Firebase Storage
  const uploadPhotoToFirebase = async file => {
    const storageRef = ref(storage, `profile_photos/${file.name}_${userId}`);

    try {
      // Завантажити файл
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      setPhotoURL(downloadURL);
      console.log('Photo downloaded:', downloadURL);

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
