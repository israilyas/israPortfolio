// import React from 'react'
// import {Outlet} from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <>
//       <Outlet/>
//       <Footer/>
//     </>
//   )
// }

// export default App

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function RootLayout() {
  return (
    <div className="font-sans bg-[#0A0A12] text-white min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
