import { FC, useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  maxValue?: number;
  animated?: boolean;
}

const ProgressBar: FC<ProgressBarProps> = ({ 
  value, 
  maxValue = 10, 
  animated = true 
}) => {
  const [width, setWidth] = useState(animated ? 0 : (value / maxValue) * 100);
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setWidth((value / maxValue) * 100);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [animated, value, maxValue]);

  return (
    <div className="h-2 w-full bg-teal-800 rounded overflow-hidden">
      <div 
        className="h-full bg-teal-300 rounded transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;