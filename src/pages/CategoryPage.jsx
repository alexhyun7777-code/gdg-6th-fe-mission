import { useEffect } from "react";
import ProductListPage from "../components/ProductListPage";
import { getCategoryData } from "../apis/productApi";
import useProductStore from "../store/productStore";

function CategoryPage() {
  const { categoryData, setCategoryData } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCategoryData();
      setCategoryData(result);
    };

    fetchData();
  }, []);

  return (
    <ProductListPage
      type="category"
      items={categoryData}
    />
  );
}

export default CategoryPage;