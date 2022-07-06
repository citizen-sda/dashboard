import React from 'react';
import StatisticCard from '../components/StatisticCard';
import {
  IoHappyOutline,
  IoSync,
  IoCheckmarkCircleOutline,
  IoListCircleOutline,
} from 'react-icons/io5';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/statistic`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Dashboard = () => {
  return (
    <main>
      <div className="grid sm:grid-cols-2  xl:grid-cols-4 grid-cols-1 gap-10">
        <StatisticCard title="User Aktif" count={data.total_user}>
          <IoHappyOutline className="text-5xl text-white p-2 bg-yellow-500 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
        <StatisticCard title="Ditinjau" count={data.total_ditinjau}>
          <IoSync className="text-5xl text-white p-2 bg-gray-500 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
        <StatisticCard title="Diverifikasi" count={data.total_diverifikasi}>
          <IoCheckmarkCircleOutline className="text-5xl text-white p-2 bg-green-500 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
        <StatisticCard title="Total Laporan" count={data.total_report}>
          <IoListCircleOutline className="text-5xl text-white p-2 bg-blue-400 rounded-full mx-auto sm:mx-0 m-4 sm:m-0" />
        </StatisticCard>
      </div>
    </main>
  );
};

export default Dashboard;
