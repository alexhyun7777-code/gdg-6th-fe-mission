import { create } from "zustand";

const useProductStore = create((set) => ({
  categoryData: [],
  priceData: [],
  sortedData: [],

  setCategoryData: (data) =>
    set({
      categoryData: data,
    }),

  setPriceData: (data) =>
    set({
      priceData: data,
    }),

  setSortedData: (data) =>
    set({
      sortedData: data,
    }),
}));

export default useProductStore;