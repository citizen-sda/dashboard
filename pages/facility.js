import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/facility`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const Facility = ({ data }) => {
  const [facility, setFacility] = React.useState(data);
  // State Untuk Mengatur Pop Up Modal
  const [isOpenAdd, setIsOpenAdd] = React.useState(false);
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({
    id_facility: '',
    name: '',
    latitude: '',
    longitude: '',
    category: '',
  });

  //for add
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitAdd = (data) => {
    handlePost(data);
  };

  const handleAfter = async () => {
    const response = await fetch('/api/facility', {
      method: 'GET',
    });

    // Hasil Respon API
    const result = await response.json();
    setFacility(result);
  };

  // Handle hapus fasilitas
  const handleDelete = async (id_facility) => {
    const response = await fetch('/api/facility', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_facility: id_facility,
      }),
    });

    // Hasil Respon API
    const result = await response.json();
    if (result) {
      handleAfter();
      // Menampilkan Toaster
      toast.success('Terhapus');
    }
  };

  // Handle post fasilitas
  const handlePost = async (data) => {
    const { id_facility, name, latitude, longitude, category } = data;
    const response = await fetch('/api/facility', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_facility,
        name,
        latitude,
        longitude,
        category,
      }),
    });

    // Hasil Respon API
    const result = await response.json();
    if (result.error == null) {
      handleAfter();
      // Menampilkan Toaster
      toast.success('Berhasil!');
      setIsOpenAdd(false);
      reset({
        id_facility: '',
        name: '',
        latitude: '',
        longitude: '',
        category: '',
      });
    }
  };

  // Handle edit / update fasilitas
  const handleEdit = async (data) => {
    const response = await fetch('/api/facility', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    // Hasil Respon API
    const result = await response.json();
    if (result.error == null) {
      handleAfter();
      // Menampilkan Toaster
      toast.success('Berhasil!');
      setIsOpenEdit(false);
    }
  };

  return (
    <>
      <title>Facility — Citizen</title>
      {/* Pop Up Modal Add */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`${isOpenAdd ? 'modal-open' : ''} modal`}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmitAdd)}>
            <p className="text-md mt-4">ID Facility</p>
            <input
              {...register('id_facility', { required: true })}
              type="text"
              placeholder="40001"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="text-md mt-4">Name</p>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Halte Bus"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="text-md mt-4">Category</p>

            <select
              {...register('category')}
              className="select w-full bg-gray-200 border-0 focus:outline-none mt-2"
            >
              <option value="30001">Taman</option>
              <option value="30002">Halte</option>
              <option value="30003">Tempat Sampah</option>
              <option value="30004">Rambu Lalu Lintas</option>
              <option value="30005">Penerangan Jalan</option>
              <option value="30006">Marka Jalan</option>
            </select>
            <p className="text-md mt-4">Latitude</p>
            <input
              {...register('latitude', { required: true })}
              type="text"
              placeholder="-7.456961"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.latitude && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="text-md mt-4">Longitude</p>
            <input
              {...register('longitude', { required: true })}
              type="text"
              placeholder="112.72308"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.longitude && (
              <span className="text-red-600">This field is required</span>
            )}

            <div className="modal-action">
              {/* Tombol Ya */}
              <input
                type="submit"
                className="btn border-0 text-white bg-green-700 hover:bg-green-500"
              />
              {/* Tombol Batal */}
              <button
                onClick={() => setIsOpenAdd(false)}
                className="btn border-0 text-white bg-red-700 hover:bg-red-500"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Pop Up Modal Edit */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`${isOpenEdit ? 'modal-open' : ''} modal`}>
        <div className="modal-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(selectedItem);
            }}
          >
            <p className="text-md mt-4">ID Facility</p>
            <input
              value={selectedItem.id_facility}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  id_facility: e.target.value,
                })
              }
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            <p className="text-md mt-4">Name</p>
            <input
              value={selectedItem.name}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  name: e.target.value,
                })
              }
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            <p className="text-md mt-4">Category</p>
            <select
              value={selectedItem.category}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  category: e.target.value,
                })
              }
              className="select w-full bg-gray-200 border-0 focus:outline-none mt-2"
            >
              <option value="30001">Taman</option>
              <option value="30002">Halte</option>
              <option value="30003">Tempat Sampah</option>
              <option value="30004">Rambu Lalu Lintas</option>
              <option value="30005">Penerangan Jalan</option>
              <option value="30006">Marka Jalan</option>
            </select>
            <p className="text-md mt-4">Latitude</p>
            <input
              value={selectedItem.latitude}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  latitude: e.target.value,
                })
              }
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            <p className="text-md mt-4">Longitude</p>
            <input
              value={selectedItem.longitude}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  longitude: e.target.value,
                })
              }
              className="input input-bordered w-full mt-1 focus:outline-none"
            />

            <div className="modal-action">
              {/* Tombol Ya */}
              <input
                type="submit"
                className="btn border-0 text-white bg-green-700 hover:bg-green-500"
              />
              {/* Tombol Batal */}
              <button
                onClick={() => setIsOpenEdit(false)}
                className="btn border-0 text-white bg-red-700 hover:bg-red-500"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Pop Up Modal Delete */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`${isOpenDelete ? 'modal-open' : ''} modal`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hapus laporan?</h3>
          <p className="py-4">
            Pastikan telah memeriksa laporan dengan teliti, karena laporan yang
            terhapus tidak akan bisa dikembalikan.
          </p>
          <div className="modal-action">
            {/* Tombol Ya */}
            <button
              onClick={() => {
                handleDelete(selectedItem.id_facility);
                setIsOpenDelete(false);
              }}
              className="btn border-0 text-white bg-green-700 hover:bg-green-500"
            >
              Ya
            </button>
            {/* Tombol Batal */}
            <button
              onClick={() => setIsOpenDelete(false)}
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
          {/* Judul Tabel */}
          <thead>
            <tr>
              <th>ID Facility</th>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Category</th>
              <th className="flex justify-end">
                {/* Tombol Add */}
                <button onClick={() => setIsOpenAdd(true)}>
                  <IoMdAdd className="text-2xl" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Isi Tabel */}
            {facility.map((item) => (
              <tr key={item.id_facility}>
                <th>{item.id_facility}</th>
                <td>{item.name}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.category.name}</td>
                <td>
                  {/* Tombol Edit */}
                  <button
                    onClick={() => {
                      setIsOpenEdit(true);
                      setSelectedItem({
                        id_facility: item.id_facility,
                        name: item.name,
                        latitude: item.latitude,
                        longitude: item.longitude,
                        category: item.category.id_category,
                      });
                    }}
                    className="btn btn-ghost btn-md text-white bg-green-700 m-1"
                  >
                    edit
                  </button>

                  {/* Tombol Delete */}
                  <button
                    onClick={() => {
                      setIsOpenDelete(true);
                      setSelectedItem({
                        id_facility: item.id_facility,
                        name: item.name,
                        latitude: item.latitude,
                        longitude: item.longitude,
                        category: item.category,
                      });
                    }}
                    className="btn btn-ghost btn-md text-white bg-red-700 m-1"
                  >
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
