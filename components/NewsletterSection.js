import React from 'react';


const NewsletterSection = () => (
  <section className="py-16 bg-secondary-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary mb-4">
          Dapatkan Tips Digital Marketing Gratis
        </h3>
        <p className="text-text-secondary mb-8">
          {/* Tambahkan deskripsi newsletter di sini jika ada */}
        </p>
        <form className="max-w-md mx-auto">
          {/* Tambahkan input email dan tombol submit di sini jika diperlukan */}
        </form>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
