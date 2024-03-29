import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from '../components/image';
import toast from 'react-hot-toast';
import NextImage from 'next/image';
import { IoSearch } from 'react-icons/io5';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/report`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const Report = ({ data }) => {
  // State Untuk Menghapus Laporan
  const [report, setReport] = React.useState(data.data);
  // State Untuk Mengatur Pop Up
  const [isOpen, setIsOpen] = React.useState(false);
  // State Untuk Mengambil dan Mengisi - Search: Menampilkan setSearch: Mengisi
  const [search, setSearch] = React.useState('');

  // Handle update status laporan (verifikasi)
  const handleUpdate = async (id_report) => {
    const response = await fetch('/api/report', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_report: id_report,
        status: 'Diverifikasi',
      }),
    });
    // Hasil Respon API
    const result = await response.json();
    if (result) {
      setReport(report.filter((item) => item.id_report != id_report));
      // Menampilkan Toaster
      toast.success('Berhasil!');
    }
  };

  // Handle hapus laporan
  const handleDelete = async (id_report) => {
    const response = await fetch('/api/report', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_report: id_report,
      }),
    });
    // Hasil Respon API
    const result = await response.json();
    if (result) {
      setReport(report.filter((item) => item.id_report != id_report));
      // Menampilkan Toaster
      toast.success('Terhapus');
    }
  };

  return (
    <>
      <title>Report — Citizen</title>
      {/* Search Bar */}
      <div className="relative mb-4 w-full">
        <input
          type="text"
          placeholder="Search Report ..."
          className="input input-bordered w-full mb-10 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearch className="absolute right-4 top-[13px] text-xl text-gray-400" />
      </div>

      {/* Card */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-10">
        {/* Filter Status Diverifikasi */}
        {report
          .filter((item) => {
            // Menyamakan hasil inputan yang telah ditampung dengan judul laporan yang telah difilter
            if (search === '') {
              return item.status === 'Ditinjau';
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item.status === 'Ditinjau';
            }
          })
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
                    <div className="px-3 py-1 mt-1 bg-primary text-xs text-white rounded-xl">
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
                      <NextImage
                        width={'100%'}
                        height={'100%'}
                        className="rounded-full"
                        src={item.user.avatar}
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

                  {/* Tombol Respon */}
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-6">
                    {/* Tombol Hapus */}
                    <button
                      onClick={() => setIsOpen(true)}
                      className="btn modal-button px-6 py-2 border-0 text-white bg-red-700 hover:bg-red-500 rounded-3xl capitalize"
                    >
                      Hapus
                    </button>

                    {/* Pop Up Modal */}
                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className={`${isOpen ? 'modal-open' : ''} modal`}>
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Hapus laporan?</h3>
                        <p className="py-4">
                          Pastikan telah memeriksa laporan dengan teliti, karena
                          laporan yang terhapus tidak akan bisa dikembalikan.
                        </p>
                        <div className="modal-action">
                          {/* Tombol Ya */}
                          <button
                            onClick={() => {
                              handleDelete(item.id_report);
                              setIsOpen(false);
                            }}
                            className="btn border-0 text-white bg-green-700 hover:bg-green-500"
                          >
                            Ya
                          </button>
                          {/* Tombol Batal */}
                          <button
                            onClick={() => setIsOpen(false)}
                            className="btn border-0 text-white bg-red-700 hover:bg-red-500"
                          >
                            Batal
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Tombol Verifikasi */}
                    <button
                      onClick={() => handleUpdate(item.id_report)}
                      className="px-3 py-2 border-0 text-white bg-green-700 hover:bg-green-500 rounded-3xl"
                    >
                      Verifikasi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Report;
