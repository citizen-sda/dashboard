import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose, IoMdStats } from 'react-icons/io';
import { RiHistoryFill } from 'react-icons/ri';
import { MdOutlineReportProblem, MdOutlineBadge } from 'react-icons/md';
import { RiBuildingLine } from 'react-icons/ri';
import Link from 'next/link';
import supabase from '../lib/supabase';
import { useRouter } from 'next/router';

const navbar = [
  { name: 'Statistic', url: '/dashboard', icon: <IoMdStats /> },
  { name: 'Report', url: '/report', icon: <MdOutlineReportProblem /> },
  { name: 'History', url: '/history', icon: <RiHistoryFill /> },
  { name: 'Facility', url: '/facility', icon: <RiBuildingLine /> },
  { name: 'Badge', url: '/badge', icon: <MdOutlineBadge /> },
];

const Sidebar = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100">
          {/* Navbar */}
          <div className="flex justify-between items-center h-20 bg-white">
            <div className="flex justify-start items-center">
              {/* Hamburger Menu */}
              <label htmlFor="my-drawer" className=" drawer-button m-4">
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
                  tabIndex="0"
                  className="btn btn-ghost btn-circle avatar sm:mr-8 mr-6"
                >
                  <div className="w-8 rounded-full">
                    <img src="/assets/images/profil.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-5 mr-5 p-2 shadow bg-base-100 rounded-box"
                >
                  <li>
                    <button
                      onClick={async () => {
                        await supabase.auth.signOut();
                        router.reload();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {children}
        </div>
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* Tombol Close */}
            <label
              htmlFor="my-drawer"
              className=" drawer-button absolute right-0"
            >
              <IoMdClose className="sm:text-4xl text-4xl text-gray-900 mx-4 m-2 sm:m-6 sm:my-8" />
            </label>
            {/* Url Path Name */}
            <div className=" my-20">
              {navbar.map((item, index) => (
                <li key={index} className="my-5 flex">
                  <Link href={item.url}>
                    {router.asPath == item.url ? (
                      <a className="text-2xl sm:text-3xl text-white bg-primary">
                        <div className="text-white">{item.icon}</div>
                        {item.name}
                      </a>
                    ) : (
                      <a className="text-2xl sm:text-3xl">
                        <div className="text-black">{item.icon}</div>{' '}
                        {item.name}
                      </a>
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
