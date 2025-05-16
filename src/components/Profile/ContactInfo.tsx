import { FC } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";
import { userData } from "../../data/userData";
import SectionTitle from "../UI/SectionTitle";
import { formatUrl } from "../../utils/formatUrl";

const ContactInfo: FC = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Contact" light />

      <div className="space-y-3 mt-4">
        <div className="flex items-center">
          <Mail size={18} className="mr-3 text-teal-300" />
          <a
            href={`mailto:${userData.email}`}
            className="hover:text-teal-300 transition-colors"
          >
            {userData.email}
          </a>
        </div>

        <div className="flex items-center">
          <Phone size={18} className="mr-3 text-teal-300" />
          <a
            href={`tel:${userData.phone}`}
            className="hover:text-teal-300 transition-colors"
          >
            {userData.phone}
          </a>
        </div>

        <div className="flex items-center">
          <MapPin size={18} className="mr-3 text-teal-300" />
          <span>{userData.location}</span>
        </div>

        {userData.gitProfile && (
          <div className="flex items-center">
            <Github size={18} className="mr-3 text-teal-300" />
            <a
              href={userData.gitProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              {formatUrl(userData.gitProfile, "social")}
            </a>
          </div>
        )}
        {userData.linkedInProfil && (
          <div className="flex items-center">
            <Linkedin size={18} className="mr-3 text-teal-300" />
            <a
              href={userData.linkedInProfil}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              {formatUrl(userData.linkedInProfil, "social")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
