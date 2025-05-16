import { FC } from "react";
import { Globe, Instagram } from "lucide-react";
import { userData } from "../../data/userData";
import SectionTitle from "../UI/SectionTitle";
import { formatUrl } from "../../utils/formatUrl";

const PortofolioLinks: FC = () => {
  return (
    <div className="mb-6">
      <SectionTitle title="Portofolio" light />

      {userData.portofolio && (
        <div className="flex items-center">
          <Globe size={18} className="mr-3 text-teal-300" />
          <a
            href={userData.portofolio}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
          >
            {formatUrl(userData.portofolio, "social")}
          </a>
        </div>
      )}
    </div>
  );
};

export default PortofolioLinks;
