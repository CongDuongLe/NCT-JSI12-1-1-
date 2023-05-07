import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartData = create(
  persist(
    (set) => ({
      carts: [],
      selectedItem: {},
      isOpen: false,
      isFetching: false,

      setCarts: (data) => set({ carts : data }),
      setSelectedItem: (selectedItem) => set({ selectedItem }),
      setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
      setIsFetching: (status) => set({ status }),
    }),
    {
      name: "useCartData", // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
