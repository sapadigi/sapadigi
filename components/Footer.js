import React from 'react';


const Footer = () => (
  <footer className="bg-secondary text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          {/* Tambahkan info perusahaan di sini jika ada */}
        </div>
      </div>
      {/* Contact Info */}
      <div className="border-t border-gray-600 mt-12 pt-8">
        {/* Tambahkan info kontak atau copyright di sini jika ada */}
      </div>
    </div>
  </footer>
);

export default Footer;
