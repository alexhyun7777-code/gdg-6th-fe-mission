export const getCategoryData = async () => {
  const response = await fetch("/data/category.json");
  return response.json();
};

export const getItemData = async () => {
  const response = await fetch("/data/item.json");
  return response.json();
};

export const getPriceData = async () => {
  const response = await fetch("/data/priceSelected.json");
  return response.json();
};

export const getSortedData = async () => {
  const response = await fetch("/data/sorted.json");
  return response.json();
};