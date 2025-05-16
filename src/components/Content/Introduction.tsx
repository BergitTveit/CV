import { FC } from "react";
import { userData } from "../../data/userData";

const Introduction: FC = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{userData.name}</h1>
      <h2 className="text-xl text-teal-700 mb-6">{userData.title}</h2>

      <div className="prose max-w-none text-gray-600 space-y-4">
        {userData.introduction.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
