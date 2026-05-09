import { Link, NavLink } from "react-router";

function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-500"
      : "text-gray-500 hover:text-blue-500";

  return (
    <nav className="flex items-center justify-between border-b border-gray-300 bg-white px-12 py-6">
      <Link to="/">
        <img className="w-20" src="/gdg-logo.svg" alt="GDG logo" />
      </Link>

      <div className="flex gap-10 text-lg">
        <NavLink to="/category" className={navClass}>
          카테고리 필터링
        </NavLink>

        <NavLink to="/price" className={navClass}>
          가격 범위 필터링
        </NavLink>

        <NavLink to="/sort" className={navClass}>
          상품 정렬
        </NavLink>
      </div>

      <button className="rounded-xl border border-blue-300 px-8 py-4 text-lg text-gray-900 hover:bg-blue-50">
        관리자
      </button>
    </nav>
  );
}

export default Navbar;