import React from 'react';


const testimonials = [
  {
    name: 'Sari Dewi',
    role: 'Mahasiswa UI, Jakarta',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconColor: 'text-blue-500',
    quote: '"Sebagai mahasiswa yang baru belajar digital marketing, SapaTools sangat membantu! Bio link generator-nya gratis dan hasilnya professional banget. Sekarang followers Instagram saya naik 300% dalam 2 bulan!"',
  },
  {
    name: 'Budi Santoso',
    role: 'Pemilik Warung Kopi, Bandung',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconColor: 'text-green-500',
    quote: '"Dulu saya bingung mau bikin website untuk warung kopi. Setelah pakai Website Builder UMKM dari Sapadigi, dalam seminggu website sudah jadi dan order online naik 150%! Harga juga masuk akal untuk UMKM seperti saya."',
  },
  {
    name: 'Maya Putri',
    role: 'Freelance Designer, Surabaya',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    iconColor: 'text-pink-500',
    quote: '"IG Template Creator-nya luar biasa! Sebagai freelancer, saya butuh konten yang konsisten tapi ga punya waktu banyak. Dengan template dari Sapadigi, saya bisa bikin 30 post dalam 1 jam. Klien juga suka hasilnya!"',
  },
];

const metrics = [
  { value: '2,847', label: 'Pengguna Aktif' },
  { value: '15,632', label: 'Tools Dibuat' },
  { value: '98%', label: 'Tingkat Kepuasan' },
  { value: '34', label: 'Provinsi Terjangkau' },
];

const TestimonialSection = () => (
  <section className="py-20 bg-white" id="testimoni">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
          Apa Kata <span className="text-primary">Pengguna Kami</span>?
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Ribuan mahasiswa, UMKM, dan freelancer sudah merasakan manfaat transformasi digital bersama Sapadigi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                loading="lazy"
                onError={e => {
                  e.target.src = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                  e.target.onerror = null;
                }}
              />
              <div>
                <h4 className="font-semibold text-secondary">{t.name}</h4>
                <p className="text-sm text-text-secondary">{t.role}</p>
              </div>
              <div className="ml-auto">
                <svg className={`w-6 h-6 ${t.iconColor}`} viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-text-secondary italic">{t.quote}</p>
          </div>
        ))}
      </div>
      {/* Success Metrics */}
      <div className="mt-16 bg-primary-50 rounded-3xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-primary mb-2">{m.value}</div>
              <div className="text-sm text-text-secondary">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
