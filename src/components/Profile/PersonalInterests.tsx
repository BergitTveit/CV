import { FC } from 'react';
import { userData } from '../../data/userData';
import SectionTitle from '../UI/SectionTitle';

const PersonalInterests: FC = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Interesser" light />
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {userData.interests.map((interest, index) => (
            <span 
              key={index} 
              className="inline-block bg-teal-600 px-3 py-1 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInterests;