import { FC, ReactNode } from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <LeftColumn />
            <RightColumn />
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} - CV Bergit Louise Tveit</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
