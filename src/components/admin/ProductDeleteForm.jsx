import { useState } from "react";

function ProductDeleteForm() {
  const [deleteName, setDeleteName] = useState("");

  const handleDelete = () => {
    console.log(`${deleteName}가 삭제되었습니다.`);
  };

  return (
    <section>
      <p className="mb-6 text-2xl font-bold text-black">상품 삭제</p>

      <div className="rounded-xl border border-gray-300 p-8">
        <input value={deleteName} onChange={(e) => setDeleteName(e.target.value)} placeholder="상품명 입력..." className="w-full rounded-lg border px-4 py-3 text-black" />

        <button onClick={handleDelete} className="mt-5 w-full rounded-lg bg-red-500 py-3 font-bold text-white">
          삭제
        </button>
      </div>
    </section>
  );
}

export default ProductDeleteForm;