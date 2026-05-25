const BASE_URL = "http://192.168.166.239:8080";
import { useState } from "react";
import Navbar from "../components/Navbar";

function AdminPage() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [stockName, setStockName] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [deleteName, setDeleteName] = useState("");

  const titleStyle = {
    color: "#000000",
    opacity: 1,
  };

  const handleRegister = async () => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      stockQuantity: Number(quantity),
      price: Number(price),
    }),
  });

  console.log("등록 응답 상태:", response.status);

  const data = await response.json();
  console.log("등록 결과:", data);
};

  const handleAddStock = async () => {
  // 1. 상품명으로 상품 조회
  const searchResponse = await fetch(
    `${BASE_URL}/products?name=${encodeURIComponent(stockName)}`
  );

  const product = await searchResponse.json();
  console.log("조회된 상품:", product);

  // 2. 조회된 상품의 id 사용해서 재고 추가
  const response = await fetch(`${BASE_URL}/products/${product.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      addQuantity: Number(stockQuantity),
    }),
  });

  console.log("응답 상태:", response.status);

  const data = await response.json();
  console.log("재고 추가 결과:", data);
};
  const handleDelete = async () => {
  // 1. 상품명으로 조회
  const searchResponse = await fetch(
    `${BASE_URL}/products?name=${encodeURIComponent(deleteName)}`
  );

  const product = await searchResponse.json();

  console.log("삭제할 상품:", product);

  // 2. 조회된 상품 id로 삭제
  const response = await fetch(`${BASE_URL}/products`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productIds: [product.id],
    }),
  });

  console.log("삭제 응답 상태:", response.status);

  const data = await response.json();

  console.log("삭제 결과:", data);
};

  return (
    <div className="min-h-screen bg-white px-12 py-8 text-black">
      <Navbar />

      <main className="mx-auto mt-12 max-w-3xl space-y-16">
        <section>
          <p className="mb-6 text-2xl font-bold" style={titleStyle}>
            상품 등록
          </p>

          <div className="rounded-xl border border-gray-300 p-8">
            <div className="grid grid-cols-2 gap-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="상품명 입력..." className="rounded-lg border px-4 py-3 text-black" />
              <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="수량" className="rounded-lg border px-4 py-3 text-black" />
              <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="가격" className="rounded-lg border px-4 py-3 text-black" />
              <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="카테고리 입력..." className="rounded-lg border px-4 py-3 text-black" />
            </div>

            <button onClick={handleRegister} className="mt-5 w-full rounded-lg bg-blue-500 py-3 font-bold text-white">
              등록
            </button>
          </div>
        </section>

        <section>
          <p className="mb-6 text-2xl font-bold" style={titleStyle}>
            재고 추가
          </p>

          <div className="rounded-xl border border-gray-300 p-8">
            <div className="grid grid-cols-2 gap-4">
              <input value={stockName} onChange={(e) => setStockName(e.target.value)} placeholder="상품명 입력..." className="rounded-lg border px-4 py-3 text-black" />
              <input value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} type="number" placeholder="수량" className="rounded-lg border px-4 py-3 text-black" />
            </div>

            <button onClick={handleAddStock} className="mt-5 w-full rounded-lg bg-blue-500 py-3 font-bold text-white">
              추가
            </button>
          </div>
        </section>

        <section>
          <p className="mb-6 text-2xl font-bold" style={titleStyle}>
            상품 삭제
          </p>

          <div className="rounded-xl border border-gray-300 p-8">
            <input value={deleteName} onChange={(e) => setDeleteName(e.target.value)} placeholder="상품명 입력..." className="w-full rounded-lg border px-4 py-3 text-black" />

            <button onClick={handleDelete} className="mt-5 w-full rounded-lg bg-red-500 py-3 font-bold text-white">
              삭제
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminPage;