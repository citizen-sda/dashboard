import React from 'react';

export const Laporan = () => {
  return (
    <div className="grid sm:grid-cols-2  xl:grid-cols-4 grid-cols-1 gap-10">
      <div className="flex justify-center sm:justify-right">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/assets/images/fasilitas.png" alt="Fasilitas" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Halte Keramean
              <div class="px-3 py-1 bg-purple-500 text-sm text-white rounded-xl">
                Ditinjau
              </div>
            </h2>
            <p>
              Tolong dong, ini halte banyak coretan dan kaca banyak yang pecah
            </p>
            <div class="card-actions flex items-center justify-start bg-green-400 mt-4">
              <div className="w-6 sm:w-8">
                <img
                  className="rounded-full"
                  src="/assets/images/profil.jpg"
                  width="60"
                  height="60"
                />
              </div>
              <div>
                <p class="text-md">Jagad Yudha</p>
                <p class="text-md">Hunter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
