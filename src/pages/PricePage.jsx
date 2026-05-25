import { useEffect } from "react";
import ProductListPage from "../components/ProductListPage";
import { getPriceData } from "../apis/productApi";
import useProductStore from "../store/productStore";

function PricePage() {
  const { priceData, setPriceData } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPriceData();
      setPriceData(result.items);
    };

    fetchData();
  }, []);

  return (
    <ProductListPage
      type="price"
      items={priceData}
    />
  );
}

export default PricePage;