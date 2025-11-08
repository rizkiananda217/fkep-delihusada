// src/data/galleryData.jsx

// ====== IMPORT GAMBAR FOTO (sesuaikan dengan aset yang kamu punya) ======
import kegiatan1 from "../assets/galeri/kampus.jpeg";
import kegiatan2 from "../assets/galeri/kampus1.jpeg";
import kegiatan3 from "../assets/galeri/kampus2.jpeg";

// ====== DATA FOTO GALERI ======
export const photoGallery = [
  {
    id: 1,
    title: "Praktik Klinik Mahasiswa di Rumah Sakit",
    category: "Kegiatan Akademik",
    image: kegiatan1,
    date: "12 September 2025",
  },
  {
    id: 2,
    title: "Kegiatan Pengabdian Masyarakat di Desa Binaan",
    category: "Pengabdian",
    image: kegiatan2,
    date: "20 Oktober 2025",
  },
  {
    id: 3,
    title: "Workshop Keperawatan Gawat Darurat",
    category: "Workshop & Seminar",
    image: kegiatan3,
    date: "5 November 2025",
  },
];

// ====== DATA VIDEO GALERI (PAKAI LINK VIDEO YOUTUBE ASLI) ======
export const videoGallery = [
  {
    id: 1,
    title: "Profil Institut Kesehatan Deli Husada Deli Tua",
    category: "Profil Kampus",
    youtubeUrl: "https://www.youtube.com/watch?v=IsE33te7hOY",
    date: "2025",
  },
  {
    id: 2,
    title: "Wisuda Institut Kesehatan Deli Husada",
    category: "Wisuda",
    youtubeUrl: "https://www.youtube.com/watch?v=qsJG_zslpYQ",
    date: "2024",
  },
  {
    id: 3,
    title: "Capping & Pinning Day",
    category: "Kegiatan Keperawatan",
    youtubeUrl: "https://www.youtube.com/watch?v=cwSHN_tCP3E",
    date: "2023",
  },
  {
    id: 4,
    title: "Alur Pendaftaran SPMB",
    category: "Informasi PMB",
    youtubeUrl: "https://www.youtube.com/watch?v=Yzx-0RrWyKg",
    date: "2024",
  },
];
