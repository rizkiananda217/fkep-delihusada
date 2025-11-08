import { Link, Outlet } from "react-router-dom";
import "../../styles/admin.css"; // nanti kita buat

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin FKEP</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admin/berita">Berita</Link>
            </li>
            {/* nanti bisa tambah menu lain */}
          </ul>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Dashboard Admin</h1>
          <span className="admin-user">Admin</span>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
