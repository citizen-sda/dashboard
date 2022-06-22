import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from '../components/image';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://k4b978r7ldkv68nte2cz.sycwell.xyz/api/report`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const History = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // card
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-10">
      {/* Filter Status Diverifikasi */}
      {data.data
        .filter((item) => item.status === 'Diverifikasi')
        .map((item) => (
          <div
            key={item.id_report}
            className="flex justify-center sm:justify-right"
          >
            <div className="card w-96 bg-base-100 shadow-xl">
              {/* Gambar Laporan / Fasilitas */}

              <Image src={item.image} className="w-96 h-60 object-cover" />
              {/* Nama, status, dan deskripsi laporan */}
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div class="px-3 py-1 mt-1 bg-green-700 text-xs text-white rounded-xl">
                    {item.status}
                  </div>
                </h2>
                <p>{item.desc}</p>

                {/* Tombol Lihat Lokasi */}
                <a
                  className="flex items-center text-primary"
                  href={`http://maps.google.com/maps?q=${item.latitude},${item.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat lokasi
                  <FiArrowUpRight className="ml-1 mt-1" />
                </a>

                {/* Separator */}
                <div className="border border-t border-black border-opacity-20 mt-4 mb-3" />
                <div className="card-actions flex items-center justify-start mt-4">
                  {/* Foto User */}
                  <div className="w-10 sm:w-8">
                    <img
                      className="rounded-full"
                      src={item.user.avatar}
                      width="60"
                      height="60"
                    />
                  </div>
                  {/* Nama User */}
                  <div>
                    <p className="text-md">{item.user.name}</p>
                    {/* Nama Badge */}
                    <div className="flex items-center">
                      <span className="">
                        {item.user.badge[0].badgelist.name}
                      </span>
                      {/* Gambar Badge */}
                      <div className="w-5 sm:w-5 ml-1">
                        <img
                          className="rounded-full"
                          src={item.user.badge[0].badgelist.image}
                          width="60"
                          height="60"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tombol Tinjau Ulang */}
                <div className="grid mt-6">
                  <button className="px-6 py-2 text-white bg-primary hover:bg-gray-600 rounded-3xl">
                    Tinjau Ulang
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default History;
