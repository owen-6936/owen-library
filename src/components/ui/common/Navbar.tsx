"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router";

export default function NavBar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "File Manager", path: "/file-manager" },
    { label: "Image Library", path: "/image-library" },
    { label: "Video Library", path: "/video-library" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  console.log(navItems);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 py-3 md:py-4 h-14"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="">
            <span
              className="font-poppins font-bold text-xl text-blue-500 h-8 md:h-[150px] italic"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 255, 0.3)" }} // Example blue shadow
            >
              OWEN LIBRARY
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navItems.map((navItem) => {
            return (
              <Link
                key={navItem.label}
                className={`text-sm/6 inline-flex items-center font-semibold text-gray-900 ${
                  pathname === navItem.path ? "border-b-2 border-blue-500" : ""
                }`}
                to={navItem.path}
              >
                {navItem.label}
              </Link>
            );
          })}
          <div className="relative">
            <input
              type="text"
              placeholder=" Search videos..."
              className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 inline-flex items-center sm:text-sm sm:leading-6"
            />
            {
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            }
          </div>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className={`text-sm/6 font-semibold text-gray-900 ${
              pathname === "/login" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="">
              <span
                className="font-poppins font-bold text-xl text-blue-500 h-10 m:h-[150px] italic"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 255, 0.3)" }} // Example blue shadow
              >
                OWEN LIBRARY
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${
                    pathname === "/" ? "bg-blue-100" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/playlists"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${
                    pathname === "/playlists" ? "bg-blue-100" : ""
                  }`}
                >
                  Playlists
                </Link>
                <Link
                  to="/video-library"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${
                    pathname === "/video-library" ? "bg-blue-100" : ""
                  }`}
                >
                  Recommendations
                </Link>
                <div className="relative -mx-3">
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                  {
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  }
                </div>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${
                    pathname === "/login" ? "bg-blue-100" : ""
                  }`}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
