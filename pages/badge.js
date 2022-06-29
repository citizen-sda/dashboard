import React from 'react';
import { IoMdAdd } from 'react-icons/io';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/badge`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const Badge = ({ data }) => {
  // State Untuk Mengatur Pop Up
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {/* Pop Up Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`${isOpen ? 'modal-open' : ''} modal`}>
        <div className="modal-box">
          <p className="text-md">ID Badge</p>
          <input
            type="text"
            placeholder="20001"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />
          <p className="text-md mt-4">Name</p>
          <input
            type="text"
            placeholder="Trial"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />
          <p className="text-md mt-4">Description</p>
          <input
            type="text"
            placeholder="User yang hebat"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />
          <p className="text-md mt-4">Requirement</p>
          <input
            type="text"
            placeholder="10"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />
          <p className="text-md mt-4">URL Gambar</p>
          <input
            type="text"
            placeholder="https://raw.githubusercontent.com/"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />

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

      {/* Tabel */}
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
                <button onClick={() => setIsOpen(true)}>
                  <IoMdAdd className="text-2xl" />
                </button>
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
    </>
  );
};

export default Badge;
