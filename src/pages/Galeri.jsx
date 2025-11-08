// src/pages/Galeri.jsx
import { useState } from "react";
import { photoGallery, videoGallery } from "../data/galleryData";
import "../styles/gallery.css";

// Fungsi bantu untuk ambil ID video dari link YouTube
function getYoutubeEmbedUrl(url) {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|watch\?v=|embed\/)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  return videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : url; // fallback kalau pattern tidak terbaca
}

function Galeri() {
  const [activeTab, setActiveTab] = useState("foto"); // 'foto' | 'video'

  return (
    <section className="page-galeri">
      {/* HERO GALERI – mirip halaman Akademik */}
      <div className="galeri-hero fade-in-up">
        <span className="galeri-label">Galeri</span>
        <h1>Galeri Kegiatan Fakultas Keperawatan</h1>
        <p>
          Dokumentasi kegiatan akademik, pengabdian masyarakat, dan event lain
          di Fakultas Keperawatan Institut Kesehatan Deli Husada Deli Tua.
        </p>
      </div>

      {/* TAB FOTO / VIDEO */}
      <div className="gallery-tabs fade-in-up delay-1">
        <button
          className={
            activeTab === "foto" ? "gallery-tab active" : "gallery-tab"
          }
          onClick={() => setActiveTab("foto")}
        >
          Foto Kegiatan
        </button>
        <button
          className={
            activeTab === "video" ? "gallery-tab active" : "gallery-tab"
          }
          onClick={() => setActiveTab("video")}
        >
          Video YouTube
        </button>
      </div>

      {/* ==== TAB FOTO ==== */}
      {activeTab === "foto" && (
        <div className="gallery-grid fade-in-up delay-2">
          {photoGallery.map((item) => (
            <article key={item.id} className="gallery-card">
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="gallery-card-body">
                <span className="gallery-category">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-date">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ==== TAB VIDEO ==== */}
      {activeTab === "video" && (
        <div className="gallery-grid fade-in-up delay-2">
          {videoGallery.map((item) => (
            <article key={item.id} className="gallery-card">
              <div className="video-wrapper">
                <iframe
                  src={getYoutubeEmbedUrl(item.youtubeUrl)}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="gallery-card-body">
                <span className="gallery-category">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-date">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Galeri;
