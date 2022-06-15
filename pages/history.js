import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const History = () => {
  return (
    <div className="grid sm:grid-cols-2  xl:grid-cols-4 grid-cols-1 gap-10">
      {/* Card1 */}
      <div className="flex justify-center sm:justify-right">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/assets/images/fasilitas.png" alt="Fasilitas" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Halte Keramean
              <div class="px-3 py-1 mt-1 bg-green-700 text-xs text-white rounded-xl">
                Diverifikasi
              </div>
            </h2>
            <p>
              Tolong dong, ini halte banyak coretan dan kaca banyak yang pecah
            </p>

            {/* Tombol Lihat Lokasi */}
            <a
              className="flex place-self-start items-center text-primary"
              href="http://maps.google.com/maps?q="
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat lokasi
              <FiArrowUpRight className="ml-1 mt-1" />
            </a>

            <div className="border border-t border-black border-opacity-20 mt-4 mb-3" />
            <div class="card-actions flex items-center justify-start mt-4">
              <div className="w-10 sm:w-8">
                <img
                  className="rounded-full"
                  src="/assets/images/profil.jpg"
                  width="60"
                  height="60"
                />
              </div>
              <div>
                <p class="text-md">Jagad Yudha Awali</p>
                <div className="flex items-center">
                  <span className="">Hunter</span>
                  <div className="w-5 sm:w-5 ml-1">
                    <img
                      className="rounded-full"
                      src="/assets/badge/hunter.png"
                      width="60"
                      height="60"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid mt-6">
              <button className="px-6 py-2 text-white bg-primary hover:bg-gray-600 rounded-3xl">
                Tinjau Ulang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card2 */}
      <div className="flex justify-center sm:justify-right">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/assets/images/fasilitas.png" alt="Fasilitas" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Halte Keramean
              <div class="px-3 py-1 mt-1 bg-red-700 text-xs text-white rounded-xl">
                Ditolak
              </div>
            </h2>
            <p>
              Tolong dong, ini halte banyak coretan dan kaca banyak yang pecah
            </p>

            {/* Tombol Lihat Lokasi */}
            <a
              className="flex place-self-start items-center text-primary"
              href="http://maps.google.com/maps?q="
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat lokasi
              <FiArrowUpRight className="ml-1 mt-1" />
            </a>

            <div className="border border-t border-black border-opacity-20 mt-4 mb-3" />
            <div class="card-actions flex items-center justify-start mt-4">
              <div className="w-10 sm:w-8">
                <img
                  className="rounded-full"
                  src="/assets/images/profil.jpg"
                  width="60"
                  height="60"
                />
              </div>
              <div>
                <p class="text-md">Jagad Yudha Awali</p>
                <div className="flex items-center">
                  <span className="">Hunter</span>
                  <div className="w-5 sm:w-5 ml-1">
                    <img
                      className="rounded-full"
                      src="/assets/badge/hunter.png"
                      width="60"
                      height="60"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid mt-6">
              <button className="px-6 py-2 text-white bg-primary hover:bg-gray-600 rounded-3xl">
                Tinjau Ulang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
