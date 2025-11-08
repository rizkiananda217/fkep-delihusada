// src/components/Footer.jsx
import { Facebook, Instagram, Youtube } from "lucide-react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kiri: Identitas Fakultas */}
        <div className="footer-left">
          <h4>Fakultas Keperawatan</h4>
          <p>Institut Kesehatan Deli Husada Deli Tua</p>
          <p>Jl. Besar Deli Tua No. 77, Deli Serdang, Sumatera Utara</p>
        </div>

        {/* Tengah: Sosial Media */}
        <div className="footer-social">
          <p>Ikuti Kami:</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Kanan: Hak Cipta */}
        <div className="footer-right">
          <p>© {new Date().getFullYear()} Institut Kesehatan Deli Husada Deli Tua</p>
          <p>Developed by Fakultas Keperawatan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
