import { useState } from "react";
import ProductItem from "./ProductItem";
import Navbar from "./Navbar";

const BASE_URL = "http://192.168.166.239:8080";

function ProductListPage({ type, items = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [lowPrice, setLowPrice] = useState(100);
  const [highPrice, setHighPrice] = useState(100000);
  const [sortType, setSortType] = useState("");

  const [searchName, setSearchName] = useState("");
  const [backendItems, setBackendItems] = useState([]);

  let title = "";
  let filteredItems = backendItems.length > 0 ? [...backendItems] : [...items];

  const handleSearch = async () => {
    if (!searchName.trim()) return;

    const response = await fetch(
      `${BASE_URL}/products?name=${encodeURIComponent(searchName)}`
    );

    console.log("응답 상태:", response.status);

    const data = await response.json();
    console.log("백엔드 검색 결과:", data);

    const convertedItem = {
      id: data.id,
      itemName: data.name,
      name: data.name,
      price: data.price,
      stockQuantity: data.stockQuantity,
      category: "식품",
    };

    setBackendItems([convertedItem]);
  };

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
      filteredItems.sort((a, b) =>
        (a.itemName || a.name).localeCompare(b.itemName || b.name)
      );
    }

    if (sortType === "price") {
      filteredItems.sort((a, b) => a.price - b.price);
    }
  }

  return (
    <div className="min-h-screen bg-white px-12 py-8">
      <Navbar />

      <main className="mx-auto mt-24 max-w-5xl">
        <h1 className="mb-16 text-center text-6xl font-bold text-blue-500">
          {title}
        </h1>

        <div className="mb-16 flex justify-center">
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="상품 검색..."
            className="w-96 rounded-l-lg border border-gray-300 px-5 py-4 text-lg"
          />
          <button
            onClick={() => {
              console.log("검색 버튼 클릭됨");
              handleSearch();
            }}
            className="rounded-r-lg bg-gray-900 px-8 py-4 font-bold text-white"
          >
            검색
          </button>
        </div>

        {type === "category" && (
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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

        {filteredItems.length === 0 && (
          <p className="text-center text-xl font-bold text-gray-700">
            검색 결과가 없습니다.
          </p>
        )}

        <button className="mt-16 w-full rounded-lg border border-blue-300 py-5 text-xl font-bold text-gray-900 hover:bg-blue-50">
          장바구니 구매하기
        </button>
      </main>
    </div>
  );
}

export default ProductListPage;