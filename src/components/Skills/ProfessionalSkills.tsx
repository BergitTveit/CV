import { FC } from 'react';
import { userData } from '../../data/userData';
import ProgressBar from './ProgressBar';
import SectionTitle from '../UI/SectionTitle';

const ProfessionalSkills: FC = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Faglig kompetanse" light />
      
      <div className="space-y-4 mt-4">
        {userData.professionalSkills.map((skill, index) => (
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

export default ProfessionalSkills;