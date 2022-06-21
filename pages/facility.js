import React from 'react';
import { IoMdAdd } from 'react-icons/io';

export const Facility = () => {
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
          <tr>
            <th>41001</th>
            <td>Alun-Alun Sidoarjo</td>
            <td>-7.445954316021162</td>
            <td>112.71776955433619</td>
            <td>Taman</td>
            <td>
              <button className="btn btn-ghost btn-md text-white bg-green-700 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-md text-white bg-red-700 m-1">
                delete
              </button>
            </td>
          </tr>
          {/* <!-- row 2 --> */}
          <tr>
            <th>41002</th>
            <td>Taman APKASI</td>
            <td>-7.537348480289772</td>
            <td>112.70083801090094</td>
            <td>Taman</td>
            <td>
              <button className="btn btn-ghost btn-md text-white bg-green-700 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-md text-white bg-red-700 m-1">
                delete
              </button>
            </td>
          </tr>
          {/* <!-- row 3 --> */}
          <tr>
            <th>42001</th>
            <td>Halte Keramean</td>
            <td>-7.492537167945791</td>
            <td>112.71091306363122</td>
            <td>Halte</td>
            <td>
              <button className="btn btn-ghost btn-md text-white bg-green-700 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-md text-white bg-red-700 m-1">
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Facility;
