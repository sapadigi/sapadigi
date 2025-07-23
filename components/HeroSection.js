import React from 'react';


const HeroSection = () => (
  <section className="py-20 section-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-secondary mb-6">
            {/* Judul utama Sapadigi, silakan sesuaikan jika ada */}
            Transformasi Digital <span className="text-primary">Mudah & Efektif</span> untuk Semua
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Sapadigi membantu UMKM, pelajar, dan siapa saja untuk go digital tanpa ribet. Tools siap pakai, interface ramah pemula, dan support penuh dalam bahasa Indonesia.
          </p>
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Akses Mudah</h3>
                <p className="text-text-secondary">Interface sederhana, bisa dipakai siapa saja tanpa background IT.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Lokal & Relevan</h3>
                <p className="text-text-secondary">Template dan fitur sesuai kebutuhan Indonesia, support bahasa Indonesia penuh.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Hasil Langsung Terasa</h3>
                <p className="text-text-secondary">Kami tidak hanya mengajarkan klik dan kode, tapi membekali alat yang langsung bisa digunakan untuk bantu pekerjaan, bisnis, atau belajar—dalam hitungan menit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tim Sapadigi bekerja sama"
            className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            loading="lazy"
            onError={e => {
              e.target.src = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
              e.target.onerror = null;
            }}
          />
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-text-secondary">Tahun Pengalaman</div>
          </div>
          <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="text-2xl font-bold text-primary">2,847</div>
            <div className="text-sm text-text-secondary">Klien Puas</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
