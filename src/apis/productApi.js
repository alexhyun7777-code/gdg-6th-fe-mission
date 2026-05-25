const BASE_URL = "http://192.168.166.239:8080";

export const getCategoryData = async () => {
  const response = await fetch("/data/category.json");
  return response.json();
};

export const getItemData = async () => {
  const response = await fetch(`${BASE_URL}/products?name=apple`);
  const data = await response.json();

  console.log("백엔드 상품 데이터:", data);

  return [
    {
      id: data.id,
      itemName: data.name,
      name: data.name,
      price: data.price,
      stockQuantity: data.stockQuantity,
      category: "식품",
    },
  ];
};

export const getPriceData = async () => {
  const response = await fetch("/data/priceSelected.json");
  return response.json();
};

export const getSortedData = async () => {
  const response = await fetch("/data/sorted.json");
  return response.json();
};