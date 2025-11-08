import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Newspaper, PhoneCall } from "lucide-react";

import kampusImg from "../assets/kampus.jpeg";
import labImg from "../assets/kampus1.jpeg";
import kegiatanImg from "../assets/kampus2.jpeg";
import pengabdianImg from "../assets/kampus3.jpeg";
import dekanImg from "../assets/dekan.png"; // pastikan file ini ada
import { newsData } from "../data/newsData";


// 4 slide utama hero (bisa kamu ganti nanti)
const heroSlides = [
  {
    id: 1,
    image: kampusImg,
    badge: "Kampus",
    caption: "Lingkungan kampus yang asri dan nyaman untuk belajar.",
  },
  {
    id: 2,
    image: labImg,
    badge: "Laboratorium",
    caption: "Laboratorium keperawatan dengan fasilitas praktik yang lengkap.",
  },
  {
    id: 3,
    image: kegiatanImg,
    badge: "Kegiatan Mahasiswa",
    caption:
      "Mahasiswa aktif dalam organisasi, seminar, dan pengembangan diri.",
  },
  {
    id: 4,
    image: pengabdianImg,
    badge: "Pengabdian Masyarakat",
    caption:
      "Implementasi ilmu keperawatan melalui bakti sosial dan penyuluhan.",
  },
];

const quickLinks = [
  {
    title: "Profil Fakultas",
    text: "Sejarah, visi misi, dan struktur organisasi Fakultas Keperawatan.",
    link: "/profil",
    icon: <BookOpen size={40} />,
    color: "linear-gradient(135deg, #00B894, #55E6C1)",
  },
  {
    title: "Program Studi",
    text: "Informasi S1 Keperawatan, Profesi Ners, dan kurikulum pembelajaran.",
    link: "/akademik",
    icon: <GraduationCap size={40} />,
    color: "linear-gradient(135deg, #0984E3, #74B9FF)",
  },
  {
    title: "Berita & Kegiatan",
    text: "Update kegiatan mahasiswa, seminar, pengabdian masyarakat, dan prestasi dosen.",
    link: "/berita",
    icon: <Newspaper size={40} />,
    color: "linear-gradient(135deg, #E17055, #FAB1A0)",
  },
  {
    title: "Kontak",
    text: "Alamat, email, dan media sosial fakultas untuk informasi lebih lanjut.",
    link: "/kontak",
    icon: <PhoneCall size={40} />,
    color: "linear-gradient(135deg, #6C5CE7, #A29BFE)",
  },
];

const stats = [
  {
    label: "Program Studi",
    value: "2",
    detail: "S1 Keperawatan & Profesi Ners",
  },
  {
    label: "Mahasiswa Aktif",
    value: "800+",
    detail: "Dari berbagai daerah di Indonesia",
  },
  {
    label: "Rumah Sakit Jejaring",
    value: "10+",
    detail: "RS pendidikan & puskesmas mitra",
  },
];

const newsItems = [
  {
    id: 1,
    date: "12 September 2025",
    category: "Wisuda",
    title: "Wisuda Program Profesi & Sarjana Terapan",
    excerpt:
      "Fakultas Keperawatan ikut serta dalam prosesi wisuda yang diikuti oleh lulusan program profesi dan sarjana terapan Institut Kesehatan Deli Husada Deli Tua.",
  },
  {
    id: 2,
    date: "26 September 2025",
    category: "Pengabdian",
    title: "Bakti Sosial di Desa Binaan",
    excerpt:
      "Dosen dan mahasiswa Fakultas Keperawatan melaksanakan pengabdian masyarakat berupa penyuluhan kesehatan dan pemeriksaan kesehatan dasar.",
  },
  {
    id: 3,
    date: "5 Oktober 2025",
    category: "Seminar",
    title: "Seminar Keperawatan Komunitas",
    excerpt:
      "Seminar yang membahas peran perawat dalam meningkatkan derajat kesehatan masyarakat melalui pendekatan keperawatan komunitas.",
  },
];

const galleryItems = [
  {
    src: kampusImg,
    alt: "Gedung Kampus Deli Husada",
    caption: "Lingkungan kampus Institut Kesehatan Deli Husada Deli Tua.",
  },
  {
    src: labImg,
    alt: "Lab Keperawatan",
    caption: "Praktikum di laboratorium keperawatan dengan fasilitas modern.",
  },
  {
    src: kegiatanImg,
    alt: "Kegiatan Mahasiswa",
    caption: "Kegiatan organisasi dan pengembangan soft skill mahasiswa.",
  },
  {
    src: pengabdianImg,
    alt: "Pengabdian Masyarakat",
    caption: "Pengabdian masyarakat di desa binaan Fakultas Keperawatan.",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // auto slide tiap 7 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="page home">
      {/* HERO FULL WIDTH */}
      <div className="home-hero-wrapper">
        <div className="hero-slider">
          {/* Background gambar + animasi fade */}
          <div className="hero-bg-layer">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                className="hero-slide-bg"
                style={{ backgroundImage: `url(${activeSlide.image})` }}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
            <div className="hero-gradient" />
          </div>

          {/* Konten di atas gambar */}
          <div className="hero-inner">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="hero-badge">{activeSlide.badge}</span>
              <h1>Fakultas Keperawatan</h1>
              <h2>Institut Kesehatan Deli Husada Deli Tua</h2>
              <p className="slogan">
                “Mencetak Perawat Profesional yang Unggul, Humanis, dan Berdaya
                Saing Global.”
              </p>
              <p className="hero-caption">{activeSlide.caption}</p>

              <div className="hero-actions">
                <Link to="/akademik" className="btn btn-primary">
                  Lihat Program Studi
                </Link>
                <a href="#berita" className="btn btn-outline">
                  Lihat Berita Terbaru
                </a>
              </div>
            </motion.div>

            {/* Bulatan indikator slide */}
            <div className="hero-dots">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`hero-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* KONTEN DALAM LEBAR NORMAL */}
      <div className="home-inner-content">
        {/* QUICK LINKS */}
        <motion.div
          className="hero-boxes colorful-links"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {quickLinks.map((box, i) => (
            <motion.div
              key={i}
              className="hero-box hero-box-colored"
              style={{ background: box.color }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
            >
              <div className="hero-box-icon">{box.icon}</div>
              <h3>{box.title}</h3>
              <p>{box.text}</p>
              <Link to={box.link} className="hero-box-link light">
                Lihat Selengkapnya →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* SAMBUTAN DEKAN */}
        <motion.div
          className="sambutan dekan-section"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="dekan-wrapper">
            {/* FOTO DEKAN */}
            <motion.img
              src={dekanImg}
              alt="Dekan Fakultas Keperawatan"
              className="dekan-photo"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* TEKS SAMBUTAN */}
            <div className="dekan-text">
              <h3>Sambutan Dekan Fakultas Keperawatan</h3>
              <p>
                Assalamu’alaikum warahmatullahi wabarakatuh, salam sejahtera
                bagi kita semua. Dengan penuh rasa syukur, kami menyambut Anda
                di website resmi
                <strong>
                  {" "}
                  Fakultas Keperawatan Institut Kesehatan Deli Husada Deli Tua
                </strong>
                . Website ini kami hadirkan sebagai media informasi, komunikasi,
                dan kolaborasi bagi mahasiswa, dosen, tenaga kependidikan,
                alumni, serta masyarakat luas.
              </p>
              <p>
                Fakultas Keperawatan berkomitmen untuk menyelenggarakan
                pendidikan keperawatan yang berkualitas, berlandaskan
                nilai-nilai profesionalisme, empati, dan etika dalam pelayanan
                kesehatan. Kami percaya, perawat bukan hanya tenaga medis,
                tetapi juga ujung tombak kemanusiaan yang menyejukkan.
              </p>
              <p>
                Melalui sistem pendidikan yang unggul dan pengabdian masyarakat
                yang berkelanjutan, kami berharap lulusan Fakultas Keperawatan
                mampu menjadi perawat profesional yang humanis dan berdaya saing
                global.
              </p>
              <p className="dekan-sign">
                — <strong>Dekan Fakultas Keperawatan</strong>
                <br />
                Institut Kesehatan Deli Husada Deli Tua
              </p>
            </div>
          </div>
        </motion.div>

        {/* STATISTIK SINGKAT */}
        <motion.div
          className="section stats-strip"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((item, idx) => (
            <div className="stat-item" key={idx}>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-detail">{item.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* BERITA & PENGUMUMAN TERBARU */}
<motion.section
  id="berita"
  className="berita-wrapper"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
>
  <div className="berita-container">
    <div className="berita-section">
      <div className="berita-header">
        <div>
          <h2>Berita & Pengumuman Terbaru</h2>
          <p className="berita-subtitle">
            Informasi terkini seputar kegiatan akademik, kemahasiswaan,
            penelitian, dan pengabdian masyarakat di Fakultas
            Keperawatan Institut Kesehatan Deli Husada Deli Tua.
          </p>
        </div>
        <Link to="/berita" className="berita-all-link">
          Lihat semua berita →
        </Link>
      </div>

      <motion.div
        className="berita-grid"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {newsData.slice(0, 6).map((news) => (
          <motion.article
            key={news.id}
            className="berita-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.03,
              y: -4,
              boxShadow: "0 18px 36px rgba(15,23,42,0.25)",
            }}
            transition={{ duration: 0.35 }}
          >
            <div className="berita-meta-row">
              <span className="badge-category">{news.category}</span>
              <span className="berita-date">{news.date}</span>
            </div>
            <h3 className="berita-title">{news.title}</h3>
            <p className="berita-excerpt">{news.excerpt}</p>
            <Link
              to={`/berita/${news.slug}`}
              className="card-link berita-link"
            >
              Baca selengkapnya →
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </div>
</motion.section>


        {/* GALERI FOTO */}
        <motion.section
          className="gallery-section"
          id="galeri"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="gallery-header">
            <h2>Galeri Kegiatan Fakultas</h2>
            <p>
              Dokumentasi kegiatan pembelajaran, praktikum laboratorium,
              organisasi mahasiswa, serta pengabdian masyarakat yang
              dilaksanakan oleh Fakultas Keperawatan Institut Kesehatan Deli
              Husada Deli Tua.
            </p>
          </div>

          <motion.div
            className="gallery-grid"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {galleryItems.map((item, index) => (
              <motion.figure
                key={index}
                className="gallery-item"
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ duration: 0.35 }}
              >
                <div className="gallery-inner">
                  <div className="gallery-image-wrapper">
                    <img src={item.src} alt={item.alt} />
                  </div>
                  <figcaption>
                    <p className="gallery-caption">{item.caption}</p>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}

export default Home;
