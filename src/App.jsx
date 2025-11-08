// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react"; // ⬅️ TAMBAH INI
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Akademik from "./pages/Akademik";
import Berita from "./pages/Berita";
import Kontak from "./pages/Kontak";
import Galeri from "./pages/Galeri";


// di dalam <Routes>
<Route path="/galeri" element={<Galeri />} />



import DetailBerita from "./pages/DetailBerita";

// halaman admin
import AdminLayout from "./pages/admin/AdminLayout";
import BeritaAdmin from "./pages/admin/BeritaAdmin";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // ⬅️ BAGIAN PENTING: SELALU SCROLL KE ATAS SETIAP GANTI HALAMAN
  useEffect(() => {
    // Kalau mau admin juga ikut scroll ke atas, hapus if ini
    if (!isAdminRoute) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto", // bisa diganti "smooth" kalau mau animasi pelan
      });
    }
  }, [location.pathname, isAdminRoute]);

  return (
    <div className="app">
      {!isAdminRoute && <Navbar />}

      <main className={isAdminRoute ? "admin-main-wrapper" : "main-content"}>
        <Routes>
          {/* HALAMAN PUBLIK */}
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/akademik" element={<Akademik />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:slug" element={<DetailBerita />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/kontak" element={<Kontak />} />

          {/* HALAMAN ADMIN */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="berita" element={<BeritaAdmin />} />
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
