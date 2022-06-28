import React from 'react';
import { IoMdAdd } from 'react-icons/io';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://k4b978r7ldkv68nte2cz.sycwell.xyz/api/badge`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const Badge = ({ data }) => {
  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full border border-black border-opacity-10">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>ID Badge</th>
            <th>Name</th>
            <th>Description</th>
            <th>Requirement</th>
            <th className="flex justify-end">
              <IoMdAdd className="text-2xl" />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {data.map((item) => (
            <tr key={item.id_badgelist}>
              <th>{item.id_badgelist}</th>
              <th>{item.name}</th>
              <td>{item.description}</td>
              <td>{item.requirement}</td>
              <td>
                <button className="btn btn-ghost btn-md text-white bg-green-700 m-1">
                  edit
                </button>
                <button className="btn btn-ghost btn-md text-white bg-red-700 m-1">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Badge;
