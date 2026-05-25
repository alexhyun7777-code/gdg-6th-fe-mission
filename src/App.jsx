import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import PricePage from "./pages/PricePage";
import SortPage from "./pages/SortPage";
import AdminPage from "./pages/AdminPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/sort" element={<SortPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;