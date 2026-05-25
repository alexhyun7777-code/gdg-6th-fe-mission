import { useState } from "react";

function StockAddForm() {
  const [stockName, setStockName] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const handleAddStock = () => {
    console.log(`${stockName} ${stockQuantity}가 추가되었습니다.`);
  };

  return (
    <section>
      <p className="mb-6 text-2xl font-bold text-black">재고 추가</p>

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
  );
}

export default StockAddForm;