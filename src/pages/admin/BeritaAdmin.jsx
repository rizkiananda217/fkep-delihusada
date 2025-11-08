import { useEffect, useState } from "react";

const API_BASE = "http://localhost/fkep-api"; // sesuaikan dengan folder PHP

function BeritaAdmin() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    judul: "",
    tanggal: "",
    kategori: "",
    isi: "",
  });
  const [message, setMessage] = useState("");

  const loadBerita = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/berita-list.php`);
      const data = await res.json();
      setBerita(data);
    } catch (err) {
      console.error(err);
      setMessage("Gagal memuat data berita");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBerita();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API_BASE}/berita-create.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setMessage("Berita berhasil disimpan");
        setForm({ judul: "", tanggal: "", kategori: "", isi: "" });
        loadBerita();
      } else {
        setMessage(data.error || "Gagal menyimpan berita");
      }
    } catch (err) {
      console.error(err);
      setMessage("Terjadi kesalahan saat menyimpan");
    }
  };

  return (
    <div className="admin-berita">
      <div className="admin-berita-left">
        <h2>Daftar Berita</h2>
        {loading ? (
          <p>Sedang memuat...</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Judul</th>
                <th>Kategori</th>
              </tr>
            </thead>
            <tbody>
              {berita.length === 0 ? (
                <tr>
                  <td colSpan="3">Belum ada data berita</td>
                </tr>
              ) : (
                berita.map((row) => (
                  <tr key={row.id}>
                    <td>{row.tanggal}</td>
                    <td>{row.judul}</td>
                    <td>{row.kategori}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      <div className="admin-berita-right">
        <h2>Tambah Berita Baru</h2>
        {message && <p className="admin-message">{message}</p>}

        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            Judul
            <input
              type="text"
              name="judul"
              value={form.judul}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Tanggal
            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Kategori
            <input
              type="text"
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              placeholder="Misal: Wisuda, Seminar"
              required
            />
          </label>
          <label>
            Isi Berita
            <textarea
              name="isi"
              rows="4"
              value={form.isi}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit" className="btn-admin-save">
            Simpan Berita
          </button>
        </form>
      </div>
    </div>
  );
}

export default BeritaAdmin;
