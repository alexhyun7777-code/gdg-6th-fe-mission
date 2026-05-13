import { Link, NavLink, useLocation, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminPage = location.pathname === "/admin";

  const navClass = ({ isActive }) =>
    isActive ? "font-bold text-blue-500" : "text-black hover:text-blue-500";

  return (
    <header className="flex items-center justify-between border-b border-gray-300 bg-white px-12 py-6">
      <Link to="/">
        <img src="/gdg-logo.svg" alt="GDG logo" className="w-20" />
      </Link>

      {!isAdminPage && (
        <nav className="flex gap-10 text-lg">
          <NavLink to="/category" className={navClass}>
            카테고리 필터링
          </NavLink>

          <NavLink to="/price" className={navClass}>
            가격 범위 필터링
          </NavLink>

          <NavLink to="/sort" className={navClass}>
            상품 정렬
          </NavLink>
        </nav>
      )}

      <button
        onClick={() => navigate(isAdminPage ? "/" : "/admin")}
        className="rounded-xl border border-blue-300 px-8 py-4 text-lg text-black hover:bg-blue-50"
      >
        {isAdminPage ? "소비자" : "관리자"}
      </button>
    </header>
  );
}

export default Navbar;