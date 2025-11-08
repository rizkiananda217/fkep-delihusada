// src/pages/Berita.jsx
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";
// src/pages/Berita.jsx
import "../styles/berita.css";


function Berita() {
  return (
    <section className="page-berita">
      {/* HERO BERITA */}
      <div className="berita-hero fade-in-up">
        <span className="berita-label">Berita Terbaru</span>
        <h1>Berita Fakultas Keperawatan</h1>
        <p>
          Update kegiatan akademik, praktik klinik, pengabdian masyarakat, dan
          informasi penting lainnya di Fakultas Keperawatan Institut Kesehatan
          Deli Husada Deli Tua.
        </p>
      </div>

      {/* GRID BERITA */}
      <div className="berita-grid">
        {newsData.map((item, index) => (
          <article
            key={item.id}
            className={`berita-card fade-in-up ${
              index % 2 === 0 ? "delay-1" : "delay-2"
            }`}
          >
            {/* Gambar */}
            {item.image && (
              <div className="berita-image-wrapper">
                <img src={item.image} alt={item.title} />
                {item.category && (
                  <span className="berita-category">{item.category}</span>
                )}
              </div>
            )}

            {/* Konten */}
            <div className="berita-content">
              <p className="berita-date">{item.date}</p>
              <h2 className="berita-title">{item.title}</h2>
              <p className="berita-excerpt">{item.excerpt}</p>

              <Link
                to={`/berita/${item.slug}`}
                className="berita-button"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Baca selengkapnya
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Berita;
