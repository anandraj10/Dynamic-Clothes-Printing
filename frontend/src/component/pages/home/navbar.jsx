import { useState } from 'react';
import { Search, Menu, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}

      {/* Main Navbar */}
      <div className="border-b border-gray-200 py-3 px-4 flex items-center justify-between">
        {/* Left side - Menu and Logo */}
        <div className="flex items-center">
          <button
            className="mr-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <a href="#" className="text-3xl font-bold text-navy-900">
            Royal Ensembles
          </a>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products or designs"
              className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-navy-600"
            />
            <button className="absolute right-0 top-0 rounded-full bg-navy-900 text-white p-2 mr-1 mt-1">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right side - Sell, Sign in, Cart */}
        <div className="flex items-center space-x-4" >

          <a
            href="#"
            className="hidden md:block bg-navy-900 text-black px-4 py-2 rounded-md hover:bg-navy-800"
          >
            Sign in
          </a>
          <div className="flex items-center">
            <button className="text-navy-900">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search - visible below md breakpoint */}
      <div className="md:hidden p-2 border-b border-gray-200">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for products or designs"
            className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-navy-600"
          />
          <button className="absolute right-0 top-0 rounded-full bg-navy-900 text-white p-2 mr-1 mt-1">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute z-10 w-full border-b border-gray-200">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-navy-900 hover:underline">
              Gifts
            </a>
            <a href="#" className="text-navy-900 hover:underline">
              Trending
            </a>
            <a href="#" className="text-navy-900 hover:underline">
              Sell
            </a>
            <a href="#" className="text-navy-900 hover:underline">
              My Stuff
            </a>
            <a href="#" className="text-navy-900 hover:underline">
              Explore
            </a>
            <a href="#" className="text-navy-900 hover:underline">
              Create
            </a>
            <a href="#" className="text-navy-900 hover:underline">
              Sell on Royal Ensembles
            </a>
            <a href="#" className="text-navy-900 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      )}

      {/* Sidebar Navigation - hidden on mobile */}
      <div className="hidden md:block fixed left-0 top-0 h-full pt-20">
        <div className="flex flex-col items-center px-4 space-y-8 py-6">
          <a href="#" className="flex flex-col items-center text-navy-900">
            <div className="p-2 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            <span className="text-xs">Gifts</span>
          </a>
          <a href="#" className="flex flex-col items-center text-navy-900">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <span className="text-xs">Trending</span>
          </a>
          <a href="#" className="flex flex-col items-center text-navy-900">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            </div>
            <span className="text-xs">Sell</span>
          </a>
          <a href="#" className="flex flex-col items-center text-navy-900">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </div>
            <span className="text-xs">My Stuff</span>
          </a>
          <a href="#" className="flex flex-col items-center text-navy-900">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <span className="text-xs">Explore</span>
          </a>
          <a href="#" className="flex flex-col items-center text-navy-900">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <span className="text-xs">Create</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;