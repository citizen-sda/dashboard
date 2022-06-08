import React from 'react';
import StatisticCard from '../components/StatisticCard';
import {
  IoHappyOutline,
  IoSync,
  IoCheckmarkCircleOutline,
  IoListCircleOutline,
} from 'react-icons/io5';

const Dashboard = () => {
  return (
    <main>
      <div className="grid sm:grid-cols-2  xl:grid-cols-4 grid-cols-1 gap-10">
        <StatisticCard title="User Aktif" count="60">
          <IoHappyOutline className="text-5xl text-white p-2 bg-yellow-500 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
        <StatisticCard title="Ditinjau" count="4">
          <IoSync className="text-5xl text-white p-2 bg-gray-500 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
        <StatisticCard title="Diverifikasi" count="16">
          <IoCheckmarkCircleOutline className="text-5xl text-white p-2 bg-green-500 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
        <StatisticCard title="Total Laporan" count="20">
          <IoListCircleOutline className="text-5xl text-white p-2 bg-blue-400 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
      </div>
    </main>
  );
};

export default Dashboard;
