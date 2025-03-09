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
