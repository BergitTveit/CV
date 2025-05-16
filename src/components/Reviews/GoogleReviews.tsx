import { FC, useEffect } from "react";

const GoogleReviews: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mt-12 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Lykke & Liten Google Reviews</h2>
      <div
        className="elfsight-app-03d7200c-7f91-444d-840d-34ef0c758bf7"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
