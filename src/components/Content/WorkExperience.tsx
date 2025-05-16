import { FC } from 'react';
import { userData } from '../../data/userData';
import SectionTitle from '../UI/SectionTitle';

const WorkExperience: FC = () => {
  return (
    <div className="mb-8">
      <SectionTitle title="Work Experience" />
      
      <div className="space-y-6 mt-6">
        {userData.workExperience.map((job, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-teal-200 hover:border-teal-500 transition-colors">
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px] top-1.5"></div>
            <div className="mb-1 flex justify-between flex-wrap">
              <h3 className="text-lg font-medium text-gray-800">{job.position}</h3>
              <span className="text-teal-600 font-medium">{job.period}</span>
            </div>
            <div className="text-gray-700 mb-2">{job.company}, {job.location}</div>
            <p className="text-gray-600">{job.description}</p>
            
            {job.achievements && job.achievements.length > 0 && (
              <div className="mt-2">
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;