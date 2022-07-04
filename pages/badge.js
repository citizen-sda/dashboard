import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/badge`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export const Badge = ({ data }) => {
  const [badge, setBadge] = React.useState(data);
  // State Untuk Mengatur Pop Up Modal
  const [isOpenAdd, setIsOpenAdd] = React.useState(false);
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({
    id_badgelist: '',
    name: '',
    description: '',
    requirement: '',
    image: '',
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
    const response = await fetch('/api/badge', {
      method: 'GET',
    });

    // Hasil Respon API
    const result = await response.json();
    setBadge(result);
  };

  // Handle hapus badge
  const handleDelete = async (id_badgelist) => {
    const response = await fetch('/api/badge', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_badgelist: id_badgelist,
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

  // Handle post badge
  const handlePost = async (data) => {
    const { id_badgelist, name, description, requirement, image } = data;
    const response = await fetch('/api/badge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_badgelist,
        name,
        description,
        requirement,
        image,
      }),
    });

    // Hasil Respon API
    const result = await response.json();
    if (result.error == null) {
      console.log(result);
      handleAfter();
      // Menampilkan Toaster
      toast.success('Berhasil!');
      setIsOpenAdd(false);
      reset({
        id_badgelist: '',
        name: '',
        description: '',
        requirement: '',
        image: '',
      });
    }
  };

  // Handle edit / update badge
  const handleEdit = async (data) => {
    const response = await fetch('/api/badge', {
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
      {/* Pop Up Modal Add*/}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`${isOpenAdd ? 'modal-open' : ''} modal`}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmitAdd)}>
            <p className="text-md">ID Badge</p>
            <input
              {...register('id_badgelist', { required: true })}
              type="text"
              placeholder="20001"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="text-md mt-4">Name</p>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Trial"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="text-md mt-4">Description</p>
            <input
              {...register('description', { required: true })}
              type="text"
              placeholder="User yang hebat"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.latitude && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="text-md mt-4">Requirement</p>
            <input
              {...register('requirement', { required: true })}
              type="text"
              placeholder="10"
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            {errors.latitude && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="text-md mt-4">Image</p>
            <input
              {...register('image', { required: true })}
              type="text"
              placeholder="https://raw.githubusercontent.com/"
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

      {/* Pop Up Modal Edit*/}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`${isOpenEdit ? 'modal-open' : ''} modal`}>
        <div className="modal-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(selectedItem);
            }}
          >
            <p className="text-md">ID Badge</p>
            <input
              value={selectedItem.id_badgelist}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  id_badgelist: e.target.value,
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
            <p className="text-md mt-4">Description</p>
            <input
              value={selectedItem.description}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  descriptione: e.target.value,
                })
              }
              className="input input-bordered w-full mt-1 focus:outline-none"
            />
            <p className="text-md mt-4">Requirement</p>
            <input
              value={selectedItem.requirement}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  requirement: e.target.value,
                })
              }
              className="input input-bordered w-full mt-1 focus:outline-none"
            />

            <p className="text-md mt-4">Image</p>
            <input
              value={selectedItem.image}
              type="text"
              required
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  image: e.target.value,
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
                handleDelete(selectedItem.id_badgelist);
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
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>ID Badge</th>
              <th>Name</th>
              <th>Description</th>
              <th>Requirement</th>
              <th>Image</th>
              <th className="flex justify-end">
                <button onClick={() => setIsOpenAdd(true)}>
                  <IoMdAdd className="text-2xl" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {badge.map((item) => (
              <tr key={item.id_badgelist}>
                <th>{item.id_badgelist}</th>
                <th>{item.name}</th>
                <td>{item.description}</td>
                <td>{item.requirement}</td>
                <td>{item.image}</td>
                <td>
                  {/* Tombol Edit */}
                  <button
                    onClick={() => {
                      setIsOpenEdit(true);
                      setSelectedItem({
                        id_badgelist: item.id_badgelist,
                        name: item.name,
                        description: item.description,
                        requirement: item.requirement,
                        image: item.image,
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
                        id_badgelist: item.id_badgelist,
                        name: item.name,
                        description: item.description,
                        requirement: item.requirement,
                        image: item.image,
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

export default Badge;
