import { useState } from "react";

function ProductRegisterForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleRegister = () => {
    console.log(`${name} ${quantity} ${price} ${category}가 등록되었습니다.`);
  };

  return (
    <section>
      <p className="mb-6 text-2xl font-bold text-black">상품 등록</p>

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
  );
}

export default ProductRegisterForm;