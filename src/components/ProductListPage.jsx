import { Link, NavLink } from "react-router";
import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductListPage({ type, items }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [lowPrice, setLowPrice] = useState(100);
  const [highPrice, setHighPrice] = useState(10000);
  const [sortType, setSortType] = useState("");

  const navClass = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-500"
      : "text-gray-500 hover:text-blue-500";

  let title = "";
  let filteredItems = [...items];

  if (type === "category") {
    title = "카테고리 필터링";

    if (selectedCategory) {
      filteredItems = filteredItems.filter(
        (item) => item.category === selectedCategory
      );
    }
  }

  if (type === "price") {
    title = "가격 범위 필터링";

    filteredItems = filteredItems.filter(
      (item) => item.price >= Number(lowPrice) && item.price <= Number(highPrice)
    );
  }

  if (type === "sort") {
    title = "상품 정렬";

    if (sortType === "name") {
      filteredItems.sort((a, b) => a.itemName.localeCompare(b.itemName));
    }

    if (sortType === "price") {
      filteredItems.sort((a, b) => a.price - b.price);
    }
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    if (value) {
      console.log(`${value} 카테고리 클릭`);
    }
  };

  return (
    <div className="min-h-screen bg-white px-12 py-8">
      <header className="flex items-center justify-between border-b border-gray-400 pb-6">
        <Link to="/">
          <img src="/gdg-logo.svg" alt="GDG logo" className="w-20" />
        </Link>

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

        <button className="rounded-xl border border-blue-300 px-8 py-4 text-lg text-gray-900">
          관리자
        </button>
      </header>

      <main className="mx-auto mt-24 max-w-5xl">
        <h1 className="mb-16 text-center text-6xl font-bold text-blue-500">
          {title}
        </h1>

        {type === "category" && (
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="mx-auto mb-16 block w-72 rounded-lg border border-gray-400 px-5 py-4 text-lg"
          >
            <option value="">카테고리 선택</option>
            <option value="의류">의류</option>
            <option value="전자기기">전자기기</option>
            <option value="화장품">화장품</option>
            <option value="식품">식품</option>
          </select>
        )}

        {type === "price" && (
          <div className="mb-16 flex justify-center gap-6">
            <input
              type="number"
              value={lowPrice}
              onChange={(e) => setLowPrice(e.target.value)}
              className="w-52 rounded-lg border border-gray-300 px-5 py-4 text-lg"
            />
            <input
              type="number"
              value={highPrice}
              onChange={(e) => setHighPrice(e.target.value)}
              className="w-52 rounded-lg border border-gray-300 px-5 py-4 text-lg"
            />
            <button className="rounded-lg bg-blue-500 px-10 py-4 font-bold text-white">
              검색
            </button>
          </div>
        )}

        {type === "sort" && (
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="mx-auto mb-16 block w-72 rounded-lg border border-gray-400 px-5 py-4 text-lg"
          >
            <option value="">정렬 기준 선택</option>
            <option value="name">이름순</option>
            <option value="price">가격순</option>
          </select>
        )}

        <div className="space-y-8">
          {filteredItems.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>

        <button className="mt-16 w-full rounded-lg border border-blue-300 py-5 text-xl font-bold text-gray-900 hover:bg-blue-50">
          장바구니 구매하기
        </button>
      </main>
    </div>
  );
}

export default ProductListPage;