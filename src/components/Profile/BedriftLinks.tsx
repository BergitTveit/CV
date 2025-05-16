import { FC } from "react";
import { Globe, Instagram } from "lucide-react";
import { userData } from "../../data/userData";
import SectionTitle from "../UI/SectionTitle";
import { formatUrl } from "../../utils/formatUrl";

const BedriftLinks: FC = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Bedrift" light />

      {userData.website && (
        <div className="flex items-center">
          <Globe size={18} className="mr-3 text-teal-300" />
          <a
            href={userData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
          >
            {userData.website.replace(/^https?:\/\//, "")}
          </a>
        </div>
      )}
      {userData.instagram && (
        <div className="flex items-center">
          <Instagram size={18} className="mr-3 text-teal-300" />
          <a
            href={userData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
          >
            {formatUrl(userData.instagram, "social")}
          </a>
        </div>
      )}
    </div>
  );
};

export default BedriftLinks;
