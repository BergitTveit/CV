import { FC } from 'react';

interface SectionTitleProps {
  title: string;
  light?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, light = false }) => {
  return (
    <div className={`border-b ${light ? 'border-teal-600' : 'border-gray-200'} pb-2`}>
      <h2 className={`text-xl font-bold ${light ? 'text-teal-300' : 'text-teal-700'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;