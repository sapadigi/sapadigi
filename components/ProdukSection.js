import React from 'react';


const products = [
  {
    title: 'Bio Link Generator',
    desc: 'Buat halaman bio link profesional untuk Instagram, TikTok, dan media sosial lainnya dalam hitungan menit.',
    features: [
      'Template siap pakai',
      'Analytics terintegrasi',
      'Custom domain tersedia',
    ],
    price: 'Gratis',
    priceNote: 'selamanya',
    badge: 'Gratis',
    badgeClass: 'bg-success',
    bgClass: 'from-primary-100 to-primary-200',
  },
  {
    title: 'IG Template Creator',
    desc: 'Ribuan template Instagram siap pakai untuk feed, story, dan reels yang konsisten dengan brand Anda.',
    features: [
      '1000+ template premium',
      'Brand kit otomatis',
      'Export HD unlimited',
    ],
    price: 'Rp 99K',
    priceNote: '/bulan',
    badge: 'Premium',
    badgeClass: 'bg-accent',
    bgClass: 'from-accent-100 to-accent-200',
  },
  {
    title: 'Website Builder UMKM',
    desc: 'Platform drag-and-drop untuk membuat website profesional tanpa coding, khusus untuk UMKM Indonesia.',
    features: [
      'Template bisnis lokal',
      'Integrasi payment lokal',
      'SEO optimized',
    ],
    price: 'Rp 199K',
    priceNote: '/bulan',
    badge: 'Pro',
    badgeClass: 'bg-secondary',
    bgClass: 'from-secondary-100 to-secondary-200',
  },
];

const ProdukSection = () => (
  <section className="py-20 bg-white" id="produk">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
          Produk Digital yang <span className="text-primary">Terbukti Efektif</span>
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Setiap produk dirancang khusus untuk menyelesaikan masalah nyata bisnis Indonesia dengan pendekatan yang mudah dipahami.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
          >
            <div className={`relative h-48 bg-gradient-to-br ${p.bgClass} overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for product image/illustration */}
                <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className={`absolute top-4 right-4 ${p.badgeClass} text-white text-xs px-2 py-1 rounded-full`}>
                {p.badge}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline text-xl font-semibold text-secondary mb-3">{p.title}</h3>
              <p className="text-text-secondary mb-4">{p.desc}</p>
              <div className="space-y-2 mb-6">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-center text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary">{p.price}</span>
                  <span className="text-sm text-text-secondary ml-2">{p.priceNote}</span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                  Coba Sekarang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProdukSection;
