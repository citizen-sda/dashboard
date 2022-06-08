import React from 'react';

const StatisticCard = ({ children, title, count }) => {
  return (
    <div className="text-center border border-black border-opacity-30 py-10 rounded-lg sm:flex sm:flex-row-reverse flex-none justify-center sm:justify-between items-center px-10">
      {children}
      <div>
        <h3 className="text-xl text-gray-800">{title}</h3>
        <p className="text-4xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
