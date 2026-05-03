function Content() {
  return (
    <main className="content">
      <img className="logo" src="/gdg-logo.svg" alt="GDG logo" />

      <div className="search-area">
        <input type="text" placeholder="상품 검색..." />
        <button>검색</button>
      </div>

      <div className="empty-box">
        <div className="empty-icon">🛒</div>
        <p className="result-text">검색 결과가 없습니다.</p>
        <span>다른 검색어로 다시 시도해 주세요.</span>
      </div>
    </main>
  );
}

export default Content;