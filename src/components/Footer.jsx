import React from 'react';
import { Link } from 'react-router-dom';
import SocalLinks from './ui/SocalLinks';
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#080810] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 flex flex-col justify-center items-start">
            <Link to="/" className="text-xl font-bold inline-block mb-4">
              <span className="text-white">isra</span>
              <span className="text-[#A78BFA]">.dev</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              A passionate frontend developer specializing in creating responsive and interactive web applications.
              Currently available for remote work and exciting collaboration opportunities.
            </p>
           <SocalLinks/>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Skills', path: '/skills' },
                { name: 'Experience', path: '/experience' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#A78BFA] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>israqureshi138@gmail.com</span>
              </li>
              {/* <li className="flex items-start space-x-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (234) 567-8901</span>
              </li> */}
              <li >
                <Link to="https://www.linkedin.com/in/isra-ilyas-qureshi-a88670264/" className='flex items-start space-x-3'>
                <FaLinkedin className='w-5 h-5 mt-0.5 text-[#A78BFA] ' /> <span className='text-gray-400'>Isra Ilyas</span>
                </Link>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Remote - Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Isra.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;