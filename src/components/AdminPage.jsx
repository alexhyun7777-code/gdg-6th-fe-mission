import { useState } from "react";
import Navbar from "./Navbar";

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

  const handleRegister = () => {
    console.log(`${name} ${quantity} ${price} ${category}가 등록되었습니다.`);
  };

  const handleAddStock = () => {
    console.log(`${stockName} ${stockQuantity}가 추가되었습니다.`);
  };

  const handleDelete = () => {
    console.log(`${deleteName}가 삭제되었습니다.`);
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