// src/pages/Profil.jsx
import { motion } from "framer-motion";
import "../styles/profil.css";

function Profil() {
  return (
    <section className="page profil-page">
      {/* HERO PROFIL */}
      <motion.div
        className="profil-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="profil-label">Profil Fakultas</p>
        <h1>Fakultas Keperawatan</h1>
        <h2>Institut Kesehatan Deli Husada Deli Tua</h2>
        <p className="profil-intro">
          Fakultas Keperawatan hadir sebagai bagian dari komitmen Institut
          Kesehatan Deli Husada Deli Tua untuk mencetak tenaga perawat yang
          unggul, beretika, dan berdaya saing global dalam pelayanan
          kesehatan.
        </p>

        <div className="profil-tagline-row">
          <span className="profil-chip">Profesional</span>
          <span className="profil-chip">Humanis</span>
          <span className="profil-chip">Berdaya Saing Global</span>
        </div>
      </motion.div>

      <div className="profil-content">
        {/* GRID SEJARAH + HIGHLIGHT */}
        <div className="profil-grid">
          <motion.div
            className="profil-section profil-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3>Sejarah Singkat</h3>
            <p>
              Fakultas Keperawatan Institut Kesehatan Deli Husada Deli Tua
              berdiri sebagai salah satu pilar utama penyelenggaraan
              pendidikan tinggi kesehatan di Sumatera Utara. Sejak awal
              berdirinya, fakultas ini berkomitmen melahirkan tenaga
              keperawatan yang tidak hanya cakap secara klinis, tetapi juga
              memiliki kepekaan sosial dan nilai kemanusiaan yang tinggi.
            </p>
            <p>
              Melalui proses pembelajaran yang terstruktur, praktik klinik di
              rumah sakit jejaring, serta pengabdian masyarakat yang
              berkelanjutan, Fakultas Keperawatan terus memperkuat perannya
              dalam meningkatkan derajat kesehatan masyarakat.
            </p>
          </motion.div>

          <motion.div
            className="profil-section profil-highlight"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3>Keunggulan Fakultas</h3>
            <ul>
              <li>Jejaring rumah sakit pendidikan dan puskesmas yang luas.</li>
              <li>Dosen berpengalaman di bidang keperawatan klinik dan komunitas.</li>
              <li>
                Kurikulum adaptif dengan perkembangan ilmu pengetahuan dan teknologi kesehatan.
              </li>
              <li>
                Lingkungan kampus yang mendukung pembentukan karakter dan profesionalisme.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* VISI */}
        <motion.div
          className="profil-section visi-section"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2>Visi</h2>
          <div className="visi-card">
            <p>
              <strong>
                “Menjadi fakultas keperawatan yang unggul dalam pendidikan, penelitian,
                dan pengabdian masyarakat di bidang keperawatan berbasis nilai-nilai
                kemanusiaan dan profesionalisme.”
              </strong>
            </p>
          </div>
        </motion.div>

        {/* MISI */}
        <motion.div
          className="profil-section misi-section"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2>Misi</h2>
          <ul className="misi-list">
            <li>
              Menyelenggarakan pendidikan keperawatan yang berkualitas, adaptif, dan
              berorientasi pada kebutuhan pelayanan kesehatan.
            </li>
            <li>
              Mengembangkan penelitian di bidang keperawatan dan kesehatan yang
              berkontribusi pada peningkatan mutu pelayanan dan kebijakan kesehatan.
            </li>
            <li>
              Melaksanakan pengabdian masyarakat berbasis ilmu keperawatan sebagai
              bentuk kepedulian sosial dan tanggung jawab moral.
            </li>
            <li>
              Menjalin kerja sama dengan institusi pendidikan, rumah sakit, dan
              komunitas di tingkat lokal, nasional, maupun internasional.
            </li>
          </ul>
        </motion.div>

        {/* STRUKTUR ORGANISASI */}
        <motion.div
          className="profil-section organisasi-section"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <h2>Struktur Organisasi</h2>
          <p>
            Struktur organisasi Fakultas Keperawatan terdiri atas pimpinan fakultas
            dan pengelola program studi yang saling bersinergi dalam mendukung
            pelaksanaan tridarma perguruan tinggi.
          </p>

          <div className="org-grid">
            <div className="org-card">
              <div className="org-avatar">D</div>
              <h3>Dekan</h3>
              <p>Fakultas Keperawatan</p>
            </div>
            <div className="org-card">
              <div className="org-avatar">WD</div>
              <h3>Wakil Dekan</h3>
              <p>Bidang Akademik & Kemahasiswaan</p>
            </div>
            <div className="org-card">
              <div className="org-avatar">KPS</div>
              <h3>Ketua Program Studi</h3>
              <p>S1 Keperawatan</p>
            </div>
            <div className="org-card">
              <div className="org-avatar">SPS</div>
              <h3>Sekretaris Program Studi</h3>
              <p>Profesi Ners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profil;
