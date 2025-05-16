import { FC } from "react";
import ProfileImage from "../Profile/ProfileImage";
import ContactInfo from "../Profile/ContactInfo";
import PersonalInfo from "../Profile/PersonalInfo";
import ProfessionalSkills from "../Skills/ProfessionalSkills";
import PersonalSkills from "../Skills/PersonalSkills";
import PersonalInterests from "../Profile/PersonalInterests";
import BedriftLinks from "../Profile/BedriftLinks";
import PortofolioLinks from "../Profile/PortfolioLink";

const LeftColumn: FC = () => {
  return (
    <div className="bg-teal-700 text-white w-full md:w-1/3 p-6">
      <div className="space-y-8">
        <ProfileImage />
        <ContactInfo />
        <BedriftLinks />

        <PersonalInfo />
        <ProfessionalSkills />
        <PersonalSkills />
        <PersonalInterests />
        <PortofolioLinks />
      </div>
    </div>
  );
};

export default LeftColumn;
