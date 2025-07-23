import React from 'react';


const FinalCTASection = () => (
  <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">
        Siap Menyapa Dunia Digital?
      </h2>
      <p className="text-xl mb-12 opacity-90 leading-relaxed">
        Bergabunglah dengan ribuan orang Indonesia yang sudah merasakan kemudahan transformasi digital bersama Sapadigi. 
        Mulai hari ini, gratis!
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
        <button className="bg-white text-primary font-semibold text-lg px-8 py-4 rounded-lg shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          🎯 Mulai dengan Tools Gratis
        </button>
        <button className="bg-accent text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          💬 Konsultasi Gratis via WhatsApp
        </button>
      </div>
      {/* Trust Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
        <div className="text-center">
          <div className="text-2xl font-bold mb-1">2,847+</div>
          <div className="text-sm">Pengguna Aktif</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-1">15,632+</div>
          <div className="text-sm">Tools Dibuat</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-1">98%</div>
          <div className="text-sm">Kepuasan</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-1">34</div>
          <div className="text-sm">Provinsi</div>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
