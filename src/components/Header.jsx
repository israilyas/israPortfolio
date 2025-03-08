// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi"; // Importing icons

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // State for sidebar

//   return (
//     <header className="w-full ">
//       {/* Navbar Container */}
//       <div className="container mx-auto max-w inline-flex justify-between items-center p-4 bg-[#090C21] text-white">

//         {/* Desktop Nav Links */}
//         <nav className="hidden md:flex gap-6">
//           <NavLink
//             to='/'
//             className={({ isActive }) =>
//               `px-4 py-2 transition-all duration-300 hover:bg-gray-600 hover:rounded-md ${isActive ? "text-white font-semibold bg-gray-700 rounded-md shadow-md"
//                 : "text-gray-400 font-light hover:text-white"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to='/about'
//             className={({ isActive }) =>
//               `px-4 py-2 transition-all duration-300 hover:bg-gray-600 hover:rounded-md ${isActive ? "text-white font-semibold bg-gray-700 rounded-md shadow-md"
//                 : "text-gray-400 font-light hover:text-white"
//               }`
//             }
//           >
//             about
//           </NavLink>

//           <NavLink
//             to='/projects'
//             className={({ isActive }) =>
//               `px-4 py-2 transition-all duration-300 hover:bg-gray-600 hover:rounded-md ${isActive ? "text-white font-semibold bg-gray-700 rounded-md shadow-md"
//                 : "text-gray-400 font-light hover:text-white"
//               }`
//             }
//           >
//             projects
//           </NavLink>

//           <NavLink
//             to='/contact'
//             className={({ isActive }) =>
//               `px-4 py-2 transition-all duration-300 hover:bg-gray-600 hover:rounded-md ${isActive ? "text-white font-semibold bg-gray-700 rounded-md shadow-md"
//                 : "text-gray-400 font-light hover:text-white"
//               }`
//             }
//           >
//             contact
//           </NavLink>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setIsOpen(true)}
//           aria-label="Open menu"
//         >
//           <FiMenu />
//         </button>
//       </div>

//       {/* Sidebar (Mobile Menu) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-[#090C21] text-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 md:hidden`}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-2xl"
//           onClick={() => setIsOpen(false)}
//           aria-label="Close menu"
//         >
//           <FiX />
//         </button>

//         {/* Sidebar Links */}
//         <nav className="flex flex-col items-center mt-16 gap-6">
//           {["Home", "About", "Projects", "Contact"].map((item) => (
//             <NavLink
//               key={item}
//               to={item.toLowerCase()}
//               onClick={() => setIsOpen(false)} // Close sidebar on click
//               className={({ isActive }) =>
//                 `px-4 py-2 text-lg transition-all duration-300 ${isActive ? "text-white font-semibold bg-gray-700 rounded-md shadow-md"
//                   : "text-gray-400 font-light hover:text-white"
//                 }`
//               }
//             >
//               {item}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-[#0A0A12]/90 backdrop-blur-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <span className="text-white">isra</span>
            <span className="text-[#A78BFA]">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Skills', path: '/skills' },
              { name: 'Projects', path: '/projects' },
              { name: 'Testimonials', path: '/testimonials' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-[#A78BFA]' : 'text-gray-300 hover:text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-[#141420] rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col py-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Skills', path: '/skills' },
                { name: 'Projects', path: '/projects' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 text-left text-sm font-medium hover:bg-[#1A1A28] transition-colors ${location.pathname === item.path ? 'text-[#A78BFA]' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
