// src/pages/DetailBerita.jsx
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";
// src/pages/Berita.jsx
import "../styles/berita.css";


function DetailBerita() {
  const { slug } = useParams();
  const berita = newsData.find((item) => item.slug === slug);

  if (!berita) {
    return (
      <section className="page-berita">
        <div className="berita-hero">
          <span className="berita-label">Detail Berita</span>
          <h1>Berita tidak ditemukan</h1>
          <p>Berita yang Anda cari sudah tidak tersedia atau slug-nya tidak sesuai.</p>
        </div>
        <Link to="/berita" className="berita-button">
          Kembali ke daftar berita
        </Link>
      </section>
    );
  }

  const paragraphs = berita.content
    .split("\n")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <section className="page-berita">
      {/* HERO DETAIL */}
      <div className="berita-hero fade-in-up">
        <span className="berita-label">Detail Berita</span>
        <h1>{berita.title}</h1>
        <p>
          {berita.excerpt ||
            "Informasi lengkap mengenai kegiatan dan aktivitas di Fakultas Keperawatan."}
        </p>
      </div>

      <div className="detail-berita-wrapper fade-in-up delay-1">
        {berita.image && (
          <div className="detail-berita-image">
            <img src={berita.image} alt={berita.title} />
          </div>
        )}

        <p className="berita-date">
          {berita.date} {berita.category && <>• {berita.category}</>}
        </p>

        <div className="detail-berita-content">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="detail-berita-back">
          <Link to="/berita" className="berita-button">
            ← Kembali ke daftar berita
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DetailBerita;
