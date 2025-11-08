// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import logoFkep from "../assets/logo.jpg"; // pastikan file logo ini ada di /src/assets/
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo dan Nama Fakultas */}
        <Link to="/" className="logo-area">
          <img
            src={logoFkep}
            alt="Logo Fakultas Keperawatan Deli Husada"
            className="logo-image"
          />
          <div className="logo-text">
            <span className="logo-main">Fakultas Keperawatan</span>
            <span className="logo-sub">
              Institut Kesehatan Deli Husada Deli Tua
            </span>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/profil"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Profil
          </NavLink>
          <NavLink
            to="/akademik"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Akademik
          </NavLink>
          <NavLink
            to="/berita"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Berita
          </NavLink>

          {/* ✅ Tambahan menu Galeri */}
          <NavLink
            to="/galeri"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Galeri
          </NavLink>

          <NavLink
            to="/kontak"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Kontak
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
