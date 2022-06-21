import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navbar = [
  { name: 'Statistic', url: '/dashboard' },
  { name: 'Report', url: '/report' },
  { name: 'History', url: '/history' },
  { name: 'Facility', url: '/facility' },
  { name: 'Badge', url: '/badge' },
];

const Sidebar = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content bg-gray-100">
          {/* Navbar */}
          <div className="flex justify-between items-center h-20 bg-white">
            <div className="flex justify-start items-center">
              {/* Hamburger Menu */}
              <label for="my-drawer" className=" drawer-button m-4">
                <GiHamburgerMenu className="sm:text-2xl text-xl text-gray-900 m-4 sm:m-8" />
              </label>
            </div>
            <div className="flex items-center">
              {/* Nama Admin */}
              <div className="text-md sm:hidden block sm:text-lg font-semibold ml-2 sm:ml-3 sm:mr-2 mr-1">
                {'Ananda Prasetyo'.split(' ')[0]}
              </div>
              <div className="text-md hidden sm:block sm:text-lg font-semibold ml-2 sm:ml-3 sm:mr-2 mr-1">
                {'Ananda Prasetyo'}
              </div>

              {/* Foto Profil */}
              <div className="dropdown dropdown-end">
                <label
                  tabindex="0"
                  className="btn btn-ghost btn-circle avatar sm:mr-8 mr-6"
                >
                  <div className="w-8 rounded-full">
                    <img src="/assets/images/profil.jpg" />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  className="menu menu-compact dropdown-content mt-5 mr-5 p-2 shadow bg-base-100 rounded-box"
                >
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {children}
        </div>
        {/* Sidebar */}
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* Tombol Close */}
            <label for="my-drawer" className=" drawer-button absolute right-0">
              <IoMdClose className="sm:text-4xl text-4xl text-gray-900 mx-4 m-2 sm:m-6 sm:my-8" />
            </label>
            {/* Url Path Name */}
            <div className=" my-20">
              {navbar.map((item) => (
                <li>
                  <Link href={item.url}>
                    {router.asPath == item.url ? (
                      <a className="text-2xl sm:text-3xl text-white bg-primary">
                        {item.name}
                      </a>
                    ) : (
                      <a className="text-2xl sm:text-3xl">{item.name}</a>
                    )}
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
