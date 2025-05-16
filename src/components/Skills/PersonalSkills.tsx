import { FC } from 'react';
import { userData } from '../../data/userData';
import ProgressBar from './ProgressBar';
import SectionTitle from '../UI/SectionTitle';

const PersonalSkills: FC = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Personlige egenskaper" light />
      
      <div className="space-y-4 mt-4">
        {userData.personalSkills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              {/* <span className="text-teal-300">{skill.level}/10</span> */}
            </div>
            <ProgressBar value={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;