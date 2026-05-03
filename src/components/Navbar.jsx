function Navbar() {
  return (
    <nav className="navbar">
      <img className="top-logo" src="/gdg-logo.svg" alt="GDG logo" />
      <h1>현님이 만든 GDG 쇼핑몰^^</h1>

      <div className="nav-buttons">
        <button>카테고리 필터링</button>
        <button>가격 범위 필터링</button>
        <button>상품 정렬</button>
      </div>

      <button className="admin-button">관리자</button>
    </nav>
  );
}

export default Navbar;