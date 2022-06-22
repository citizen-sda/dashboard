import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://k4b978r7ldkv68nte2cz.sycwell.xyz/api/report/1`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const History = ({ data }) => {
  console.log(data.data);
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-10">
      {data.data
        .filter((item) => item.status === 'Diverifikasi')
        .map((item) => (
          <div
            key={item.id_report}
            className="flex justify-center sm:justify-right"
          >
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-96 h-60 object-cover"
                  src={item.image}
                  alt="Fasilitas"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  {item.name}
                  <div class="px-3 py-1 mt-1 bg-green-700 text-xs text-white rounded-xl">
                    {item.status}
                  </div>
                </h2>
                <p>{item.desc}</p>

                {/* Tombol Lihat Lokasi */}
                <a
                  className="flex items-center text-primary"
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
                      src={item.user.avatar}
                      width="60"
                      height="60"
                    />
                  </div>
                  <div>
                    <p class="text-md">{item.user.name}</p>
                    <div className="flex items-center">
                      <span className="">
                        {item.user.badge[0].badgelist.name}
                      </span>
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
