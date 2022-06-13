import React from 'react';
import { IoMdAdd } from 'react-icons/io';

export const Badge = () => {
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
            <th>
              <IoMdAdd className="text-2xl" />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <thead />
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img
                      src="/assets/badge/trial.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Trial</div>
                </div>
              </div>
            </td>
            <td>Pengguna yang baru mendaftar.</td>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-400 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-xs bg-red-400 m-1">
                delete
              </button>
            </th>
          </tr>
          {/* <!-- row 2 --> */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img
                      src="/assets/badge/hunter.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hunter</div>
                </div>
              </div>
            </td>
            <td>
              Lencana ini diberikan kepada mereka yang mau memulai petualangan
              pencarian fasilitas umum, yang mengalami kerusakan.
            </td>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-400 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-xs bg-red-400 m-1">
                delete
              </button>
            </th>
          </tr>
          {/* <!-- row 3 --> */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img
                      src="/assets/badge/master.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Master</div>
                </div>
              </div>
            </td>
            <td>
              Pengguna yang telah konsisten dalam menambahkan laporan, dan ingin
              membantu orang lain.
            </td>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-400 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-xs bg-red-400 m-1">
                delete
              </button>
            </th>
          </tr>
          {/* <!-- row 4 --> */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img
                      src="/assets/badge/general.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">General</div>
                </div>
              </div>
            </td>
            <td>
              Hanya pengguna andal, menonjol, dan aktifitas paling tinggi lebih
              dari pengguna lain yang akan mendapatkan lencana ini.
            </td>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-400 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-xs bg-red-400 m-1">
                delete
              </button>
            </th>
          </tr>
          {/* <!-- row 5 --> */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img
                      src="/assets/badge/elite.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Elite</div>
                </div>
              </div>
            </td>
            <td>
              Pengguna yang sempurna! Mengunggah banyak laporan dan telah
              diverifikasi oleh admin.
            </td>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-400 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-xs bg-red-400 m-1">
                delete
              </button>
            </th>
          </tr>
          {/* <!-- row 6 --> */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img
                      src="/assets/badge/supreme.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Supreme</div>
                </div>
              </div>
            </td>
            <td>
              Pengguna terbaik yang telah melampaui jumlah laporan fasilitas
              pengguna lain.
            </td>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-400 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-xs bg-red-400 m-1">
                delete
              </button>
            </th>
          </tr>
          {/* <!-- row 7 --> */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img
                      src="/assets/badge/developer.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Dev</div>
                </div>
              </div>
            </td>
            <td>Pembuat Aplikasi.</td>
            <th>
              <button className="btn btn-ghost btn-xs bg-green-400 m-1">
                edit
              </button>
              <button className="btn btn-ghost btn-xs bg-red-400 m-1">
                delete
              </button>
            </th>
          </tr>
        </tbody>
        {/* <!-- foot --> */}
      </table>
    </div>
  );
};

export default Badge;
