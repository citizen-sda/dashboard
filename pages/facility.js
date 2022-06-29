import React from 'react';
import { IoMdAdd } from 'react-icons/io';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/facility`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const Facility = ({ data }) => {
  // State Untuk Mengatur Pop Up
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {/* Pop Up Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`${isOpen ? 'modal-open' : ''} modal`}>
        <div className="modal-box">
          <p className="text-md">ID Facility</p>
          <input
            type="text"
            placeholder="41001"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />
          <p className="text-md mt-4">Name</p>
          <input
            type="text"
            placeholder="Halte Bus"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />
          <p className="text-md mt-4">Category</p>
          <select className="select w-full bg-gray-200 border-0 focus:outline-none mt-2">
            <option>Choose Category</option>
            <option>Taman</option>
            <option>Halte</option>
            <option>Tempat Sampah</option>
            <option>Rambu Lalu Lintas</option>
            <option>Penerangan Jalan</option>
            <option>Marka Jalan</option>
          </select>
          <p className="text-md mt-4">Latitude</p>
          <input
            type="text"
            placeholder="-7.456961"
            className="input input-bordered w-full mt-1 focus:outline-none"
          />
          <p className="text-md mt-4">Longitude</p>
          <input
            type="text"
            placeholder="112.72308"
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
                <button onClick={() => setIsOpen(true)}>
                  <IoMdAdd className="text-2xl" />
                </button>
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
    </>
  );
};

export default Facility;
