import React from 'react';


const team = [
  {
    name: 'Toni Setiawan',
    role: 'Pengangguran',
    desc: 'Mencari peluang baru di dunia digital.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Rifki Hilman Fauzi',
    role: 'Guru Honorer',
    desc: 'Mengajar dan berbagi ilmu digital di sekolah.',
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    name: 'Muhammad Raihan Firdaus',
    role: 'Freelance',
    desc: 'Membantu UMKM dan bisnis online secara mandiri.',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Roby Dika Pratama',
    role: 'Pelajar',
    desc: 'Belajar dan berkontribusi di dunia digital.',
    img: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    name: 'Gilang Juniar',
    role: 'Pekerja',
    desc: 'Mengembangkan karir dan skill digital.',
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
  {
    name: 'Lina Permata',
    role: 'Content Creator',
    desc: 'Membuat konten edukasi digital yang mudah dipahami semua kalangan.',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

const TeamSection = () => (
  <section className="py-20 section-surface" id="team">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
          Tim <span className="text-primary">Sapadigi</span>
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Kami adalah tim profesional yang berdedikasi untuk membantu transformasi digital Indonesia.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-primary-50 rounded-2xl shadow-card p-6 text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              loading="lazy"
            />
            <h3 className="font-semibold text-secondary text-lg mb-1">{member.name}</h3>
            <p className="text-primary font-medium mb-2">{member.role}</p>
            <p className="text-text-secondary text-sm">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
