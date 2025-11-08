import "../styles/Akademik.css";

function Akademik() {
  return (
    <section className="page page-akademik">
      {/* HERO */}
      <div className="akademik-hero fade-in-up delay-1">
        <span className="akademik-label">Akademik</span>
        <h1>Fakultas Keperawatan</h1>
        <p>
          Fakultas Keperawatan Institut Kesehatan Deli Husada Deli Tua
          menyelenggarakan pendidikan keperawatan yang unggul, humanis, dan
          berdaya saing — didukung kurikulum modern serta lahan praktik luas di
          berbagai rumah sakit dan puskesmas jejaring.
        </p>
      </div>

      {/* PROGRAM STUDI */}
      <section className="akademik-section fade-in-up delay-2">
        <h2 className="section-title">Program Studi</h2>
        <p className="section-subtitle">
          Program studi dirancang untuk membentuk perawat profesional dengan
          kompetensi sesuai kebutuhan pelayanan kesehatan modern.
        </p>

        <div className="prodi-grid">
          <div className="prodi-card">
            <h3>D3 Keperawatan</h3>
            <p>
              Menyiapkan Ahli Madya Keperawatan dengan kekhasan pada pelayanan{" "}
              <em>chronic care</em>, siap bekerja di berbagai fasilitas
              kesehatan.
            </p>
            <ul>
              <li>Fokus pada keterampilan praktik klinik</li>
              <li>Pembelajaran vokasi di laboratorium & jejaring RS</li>
              <li>Lulusan tersertifikasi dan siap kerja</li>
            </ul>
          </div>

          <div className="prodi-card">
            <h3>S1 Keperawatan</h3>
            <p>
              Program sarjana keperawatan berbasis riset dan terapi
              komplementer, menghasilkan lulusan akademik profesional dan siap
              melanjutkan ke Profesi Ners.
            </p>
            <ul>
              <li>Penguatan riset keperawatan dan publikasi ilmiah</li>
              <li>Integrasi teori dan praktik klinik</li>
              <li>Didukung dosen berpengalaman di bidang keperawatan</li>
            </ul>
          </div>

          <div className="prodi-card">
            <h3>Profesi Ners</h3>
            <p>
              Tahapan profesi yang menyiapkan perawat kompeten dan beretika,
              melalui praktik langsung di rumah sakit, puskesmas, dan komunitas.
            </p>
            <ul>
              <li>Preseptor & CI profesional</li>
              <li>Praktik klinik dan manajemen keperawatan</li>
              <li>Siap menghadapi uji kompetensi nasional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRUKTUR KURIKULUM */}
      <section className="akademik-section fade-in-up delay-3">
        <h2 className="section-title">Struktur Kurikulum</h2>
        <p className="section-subtitle">
          Ringkasan kurikulum tiap program studi — dapat diunduh untuk informasi
          lengkap.
        </p>

        <div className="kurikulum-table-wrapper">
          <table className="table-simple table-kurikulum">
            <thead>
              <tr>
                <th>Program Studi</th>
                <th>Keterangan</th>
                <th>Dokumen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>D3 Keperawatan</td>
                <td>
                  Kurikulum vokasi berfokus pada kompetensi pelayanan{" "}
                  <em>chronic care</em> dan keterampilan laboratorium.
                </td>
                <td>
                  <a
                    href="/docs/kurikulum-d3-keperawatan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unduh Kurikulum
                  </a>
                </td>
              </tr>
              <tr>
                <td>S1 Keperawatan</td>
                <td>
                  Kurikulum akademik berorientasi pada penelitian, manajemen,
                  dan pengembangan keilmuan keperawatan.
                </td>
                <td>
                  <a
                    href="/docs/kurikulum-s1-keperawatan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unduh Kurikulum
                  </a>
                </td>
              </tr>
              <tr>
                <td>Profesi Ners</td>
                <td>
                  Praktik profesi dalam berbagai lahan pelayanan, klinik,
                  komunitas, dan manajerial.
                </td>
                <td>
                  <a
                    href="/docs/kurikulum-profesi-ners.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unduh Kurikulum
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* LAYANAN AKADEMIK */}
      <section className="akademik-section fade-in-up delay-4">
        <h2 className="section-title">Layanan Akademik</h2>

        <div className="layanan-grid">
          <div className="layanan-card">
            <h3>SIAKAD</h3>
            <p>KRS, KHS, dan seluruh aktivitas akademik mahasiswa.</p>
            <a
              href="https://siak.delihusada.ac.id:8060"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka SIAKAD
            </a>
          </div>
          <div className="layanan-card">
            <h3>SPADA</h3>
            <p>Pembelajaran daring untuk akses materi & tugas kuliah.</p>
            <a
              href="https://spada.delihusada.ac.id:8080"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka SPADA
            </a>
          </div>
          <div className="layanan-card">
            <h3>CBT</h3>
            <p>Pelaksanaan ujian berbasis komputer terpusat.</p>
            <a
              href="https://cbtumb.delihusada.ac.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka CBT
            </a>
          </div>
          <div className="layanan-card">
            <h3>Cek Kelulusan</h3>
            <p>Lihat hasil ujian dan kelulusan mahasiswa.</p>
            <a
              href="https://ceklulus.delihusada.ac.id:8080"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cek Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* FASILITAS BELAJAR DENGAN GAMBAR ASLI DUMMY */}
      <section className="akademik-section fade-in-up delay-5">
        <h2 className="section-title">Fasilitas Belajar</h2>

        <div className="fasilitas-grid">
          <div className="fasilitas-card">
            <img
              src="https://images.unsplash.com/photo-1580281658629-6e4e7a2f0e90?auto=format&fit=crop&w=800&q=80"
              alt="Laboratorium Keperawatan"
            />
            <h3>Laboratorium Keperawatan</h3>
            <p>
              Dilengkapi ruang praktik Keperawatan Dasar, Medikal Bedah, Jiwa,
              Anak, dan Maternitas untuk mendukung pembelajaran klinik.
            </p>
          </div>
          <div className="fasilitas-card">
            <img
              src="https://images.unsplash.com/photo-1584697964198-937d34c93c0f?auto=format&fit=crop&w=800&q=80"
              alt="CBT Center"
            />
            <h3>CBT Center</h3>
            <p>
              Ruang ujian berbasis komputer dengan sistem CBT terintegrasi untuk
              uji kompetensi mahasiswa.
            </p>
          </div>
          <div className="fasilitas-card">
            <img
              src="https://images.unsplash.com/photo-1581091870627-3b5b9a98f5a7?auto=format&fit=crop&w=800&q=80"
              alt="Perpustakaan"
            />
            <h3>Perpustakaan</h3>
            <p>
              Koleksi buku dan e-journal keperawatan sebagai sumber belajar
              mahasiswa dan dosen.
            </p>
          </div>
          <div className="fasilitas-card">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80"
              alt="Ruang Kuliah"
            />
            <h3>Ruang Kuliah Multimedia</h3>
            <p>
              Ruang kuliah yang nyaman dengan LCD projector, audio system, dan
              ventilasi yang baik.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Akademik;
