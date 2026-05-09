import { Routes, Route } from "react-router";

import HomePage from "./components/HomePage";
import ProductListPage from "./components/ProductListPage";

import {
  categoryData,
  priceSelectedData,
  sortedData,
} from "./data/mockData";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/category"
        element={
          <ProductListPage
            type="category"
            items={categoryData}
          />
        }
      />

      <Route
        path="/price"
        element={
          <ProductListPage
            type="price"
            items={priceSelectedData.items}
          />
        }
      />

      <Route
        path="/sort"
        element={
          <ProductListPage
            type="sort"
            items={sortedData}
          />
        }
      />
    </Routes>
  );
}

export default App;