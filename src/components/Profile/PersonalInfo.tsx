import { FC } from 'react';
import { userData } from '../../data/userData';
import SectionTitle from '../UI/SectionTitle';

const PersonalInfo: FC = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Personal Info" light />
      
      <div className="space-y-3 mt-4">
        <div className="flex justify-between">
          <span className="text-teal-300">Birth Date:</span>
          <span>{userData.birthDate}</span>
        </div>
        
        <div>
          <div className="text-teal-300 mb-1">Languages:</div>
          <div className="space-y-1">
            {userData.languages.map((lang, index) => (
              <div key={index} className="flex justify-between">
                <span>{lang.language}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;