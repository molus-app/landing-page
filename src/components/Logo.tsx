
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-5xl font-indie">
        <span className="flex items-center">
          M
          <div className="h-0.5 w-8 bg-black dark:bg-white mt-1 ml-1"></div>
        </span>
      </div>
    </div>
  );
};

export default Logo;
