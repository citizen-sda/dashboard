import React from 'react';
import { IoMdAdd } from 'react-icons/io';

export const Badge = () => {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full border border-black border-opacity-10">
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
          <tr>
            <th>20001</th>
            <th>Trial</th>
            <td>Pengguna yang baru mendaftar.</td>
            <td>0</td>
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
            <th>20002</th>
            <th>Hunter</th>
            <td>
              Lencana ini diberikan kepada mereka yang mau memulai petualangan
              pencarian fasilitas umum, yang mengalami kerusakan.
            </td>
            <td>5</td>
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
            <th>20003</th>
            <th>Master</th>
            <td>
              Pengguna yang telah konsisten dalam menambahkan laporan, dan ingin
              membantu orang lain.
            </td>
            <td>19</td>
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

export default Badge;
