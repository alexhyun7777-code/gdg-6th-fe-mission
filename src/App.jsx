import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import HomePage from "./components/HomePage";
import ProductListPage from "./components/ProductListPage";
import AdminPage from "./components/AdminPage";

import {
  getCategoryData,
  getPriceData,
  getSortedData,
} from "./apis/productApi";

import "./App.css";

function App() {
  const [categoryData, setCategoryData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoryResult = await getCategoryData();
      const priceResult = await getPriceData();
      const sortedResult = await getSortedData();

      setCategoryData(categoryResult);
      setPriceData(priceResult.items);
      setSortedData(sortedResult);
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/category"
        element={<ProductListPage type="category" items={categoryData} />}
      />

      <Route
        path="/price"
        element={<ProductListPage type="price" items={priceData} />}
      />

      <Route
        path="/sort"
        element={<ProductListPage type="sort" items={sortedData} />}
      />

      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;