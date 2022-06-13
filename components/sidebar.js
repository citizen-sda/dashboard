import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

const navbar = [
  { name: 'Statistik', url: '/dashboard' },
  { name: 'Laporan', url: '/laporan' },
  { name: 'Data Fasilitas', url: '/fasilitas' },
  { name: 'Badge', url: '/badge' },
  { name: 'Riwayat', url: '/riwayat' },
];

const Sidebar = ({ children }) => {
  return (
    <>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}

          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <label for="my-drawer" className=" drawer-button m-4">
                <GiHamburgerMenu className="sm:text-4xl text-2xl text-gray-900 m-4 sm:m-8" />
              </label>
            </div>
            <div className="flex items-center">
              <div className="w-8 sm:w-10">
                <img
                  className="rounded-full"
                  src="/assets/images/profil.jpg"
                  width="60"
                  height="60"
                />
              </div>
              <div className="text-2xl sm:hidden block sm:text-3xl font-semibold ml-2 sm:ml-4 mr-8">
                {'Ananda Dwi Prasetyo'.split(' ')[0]}
              </div>
              <div className="text-2xl hidden sm:block sm:text-3xl font-semibold ml-2 sm:ml-4 mr-8">
                {'Ananda Dwi Prasetyo'}
              </div>
            </div>
          </div>

          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <label for="my-drawer" className=" drawer-button absolute right-0">
              <IoMdClose className="sm:text-4xl text-4xl text-gray-900 mx-4 m-2 sm:m-6 sm:my-8" />
            </label>
            <div className=" my-20">
              {navbar.map((item) => (
                <li>
                  <Link href={item.url}>
                    <a className="text-2xl sm:text-3xl">{item.name}</a>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
