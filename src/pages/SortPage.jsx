import { useEffect } from "react";
import ProductListPage from "../components/ProductListPage";
import { getSortedData } from "../apis/productApi";
import useProductStore from "../store/productStore";

function SortPage() {
  const { sortedData, setSortedData } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSortedData();
      setSortedData(result);
    };

    fetchData();
  }, []);

  return <ProductListPage type="sort" items={sortedData} />;
}

export default SortPage;