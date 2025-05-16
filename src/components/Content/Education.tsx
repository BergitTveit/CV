import { FC } from "react";
import { userData } from "../../data/userData";
import SectionTitle from "../UI/SectionTitle";

const Education: FC = () => {
  return (
    <div className="mb-8">
      <SectionTitle title="Education" />

      <div className="space-y-6 mt-6">
        {userData.education.map((edu, index) => (
          <div
            key={index}
            className="relative pl-6 border-l-2 border-teal-200 hover:border-teal-500 transition-colors"
          >
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px] top-1.5"></div>
            <div className="mb-1 flex justify-between flex-wrap">
              <h3 className="text-lg font-medium text-gray-800">
                {edu.degree}
              </h3>
              <span className="text-teal-600 font-medium">{edu.period}</span>
            </div>
            <div className="text-gray-700 mb-2">
              {edu.institution}, {edu.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
