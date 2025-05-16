import { FC } from 'react';
import { userData } from '../../data/userData';

const ProfileImage: FC = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-600 shadow-lg mb-4">
        <img 
          src={userData.profileImage} 
          alt={userData.name} 
          className="w-full h-full object-cover"
        />
      </div>
      {/* <h1 className="text-2xl font-bold text-center">{userData.name}</h1>
      <p className="text-teal-300 text-lg">{userData.title}</p> */}
    </div>
  );
};

export default ProfileImage;