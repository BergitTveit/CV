import { FC } from "react";
import { userData } from "../../data/userData";
import SectionTitle from "../UI/SectionTitle";
import { ExternalLink } from "lucide-react";

const Portfolio: FC = () => {
  return (
    <div className="mb-8">
      <SectionTitle title="Portfolio Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {userData.portfolioProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all"
          >
            {/* <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded mb-3"
            /> */}
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-teal-700 transition-colors">
                {project.title}
              </h3>
              <ExternalLink
                size={18}
                className="text-gray-400 group-hover:text-teal-500 transition-colors"
              />
            </div>
            <div className="text-gray-600 mt-2">{project.description}</div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded group-hover:bg-teal-100 group-hover:text-teal-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
