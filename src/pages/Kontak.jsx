import "../styles/Kontak.css";

function Kontak() {
  return (
    <section className="page page-kontak">
      {/* HERO */}
      <div className="kontak-hero fade-in-up delay-1">
        <span className="kontak-label">Kontak</span>
        <h1>Kontak Fakultas Keperawatan</h1>
        <p>
          Silakan hubungi kami untuk informasi lebih lanjut mengenai akademik,
          kerja sama, maupun kegiatan di Fakultas Keperawatan Institut
          Kesehatan Deli Husada Deli Tua.
        </p>
      </div>

      {/* GRID UTAMA */}
      <div className="kontak-grid fade-in-up delay-2">
        {/* INFORMASI KONTAK */}
        <div className="kontak-info">
          <h2>Alamat</h2>
          <p>Institut Kesehatan Deli Husada Deli Tua</p>
          <p>Jl. Besar Deli Tua No. 77, Deli Serdang, Sumatera Utara</p>

          <h2>Kontak</h2>
          <p>📞 Telp: (061) 1234567</p>
          <p>📧 Email: fkep@delihusada.ac.id</p>

          <h2>Jam Layanan</h2>
          <p>Senin – Jumat: 08.00 – 16.00 WIB</p>
          <p>Sabtu: 08.00 – 12.00 WIB</p>
        </div>

        {/* FORM KONTAK */}
        <div className="kontak-form">
          <h2>Kirim Pesan</h2>
          <form className="form-simple">
            <label>
              Nama Lengkap
              <input type="text" placeholder="Masukkan nama lengkap Anda" />
            </label>
            <label>
              Email
              <input type="email" placeholder="email@contoh.com" />
            </label>
            <label>
              Pesan
              <textarea
                rows="4"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </label>
            <button type="button" className="btn-kirim">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* GOOGLE MAPS */}
      <div className="maps-section fade-in-up delay-3">
        <h2>Lokasi Kampus</h2>
        <iframe
          title="Peta Kampus Deli Husada"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.005454726256!2d98.68196527455657!3d3.4941642965038965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fa206270f25%3A0x6b8dddeed816e8ab!2sInstitut%20Kesehatan%20Deli%20Husada%20Deli%20Tua!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Kontak;
