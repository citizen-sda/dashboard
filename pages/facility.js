import React from 'react';
import { IoMdAdd } from 'react-icons/io';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://k4b978r7ldkv68nte2cz.sycwell.xyz/api/facility`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const Facility = ({ data }) => {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full border border-black border-opacity-10">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>ID Facility</th>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Category</th>
            <th className="flex justify-end">
              <IoMdAdd className="text-2xl" />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {data.map((item) => (
            <tr key={item.id_facility}>
              <th>{item.id_facility}</th>
              <td>{item.name}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.category.name}</td>
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

export default Facility;
