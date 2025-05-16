import { FC } from 'react';
import Introduction from '../Content/Introduction';
import WorkExperience from '../Content/WorkExperience';
import Education from '../Content/Education';
import Portfolio from '../Content/Portfolio';
import GoogleReviews from '../Reviews/GoogleReviews';

const RightColumn: FC = () => {
  return (
    <div className="bg-white w-full md:w-2/3 p-6 md:p-8">
      <div className="space-y-10">
        <Introduction />
        <WorkExperience />
        <Education />
        <Portfolio />
        <GoogleReviews />
      </div>
    </div>
  );
};

export default RightColumn;