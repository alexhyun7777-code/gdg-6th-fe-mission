import { useState } from "react";

const BASE_URL = "http://192.168.166.239:8080";

function Content() {
  const [searchName, setSearchName] = useState("");
  const [item, setItem] = useState(null);

  const handleSearch = async () => {
    const response = await fetch(
      `${BASE_URL}/products?name=${encodeURIComponent(searchName)}`
    );

    const data = await response.json();
    console.log("검색 결과:", data);

    setItem(data);
  };

  return (
    <main className="content">
      <img className="logo" src="/gdg-logo.svg" alt="GDG logo" />

      <div className="search-area">
        <input
          type="text"
          placeholder="상품 검색..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      {item ? (
        <div className="empty-box">
          <p className="result-text">{item.name}</p>
          <span>가격: {item.price}원 / 재고: {item.stockQuantity}개</span>
        </div>
      ) : (
        <div className="empty-box">
          <div className="empty-icon">🛒</div>
          <p className="result-text">검색 결과가 없습니다.</p>
          <span>다른 검색어로 다시 시도해 주세요.</span>
        </div>
      )}
    </main>
  );
}

export default Content;