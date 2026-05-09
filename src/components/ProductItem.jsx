  import { useState } from "react";

  function ProductItem({ item }) {
    const [count, setCount] = useState("");
    const [isAdded, setIsAdded] = useState(false);

    const handleChange = (e) => {
      const value = e.target.value;

      if (/^\d*$/.test(value)) {
        setCount(value);
      }
    };

    const handleCart = () => {
      setIsAdded(true);
    };

    return (
      <div className="flex items-center justify-between rounded-2xl border border-gray-300 bg-white p-12 shadow-md">
        <div>
          <p className="mb-6 text-4xl font-extrabold text-black">
            {item.itemName}
          </p>

          <div className="flex gap-6 text-2xl text-black">
            <span>{item.price} 원</span>
            <span>남은 수량: {item.quantity}개</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <input
            type="text"
            value={count}
            onChange={handleChange}
            placeholder="개수 입력..."
            className="w-72 rounded-xl border border-gray-300 px-6 py-5 text-2xl text-black"
          />

          <button
            onClick={handleCart}
            disabled={isAdded}
            className={`rounded-xl px-10 py-5 text-2xl font-bold text-white ${
              isAdded
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isAdded ? "담김 완료" : "장바구니"}
          </button>
        </div>
      </div>
    );
  }

  export default ProductItem;