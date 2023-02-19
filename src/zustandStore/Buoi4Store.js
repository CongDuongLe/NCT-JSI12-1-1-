import { create } from 'zustand'



export const useAuthStore = create((set) => ({
    // state
    count : 100,
    name : 'Khang ',
    // action
    // increment
    incrementBy1: () => set(state => ({ count : state.count + 1})),
    decrementBy1 : () => set(state => ({count : state.count -1})),
    resetCount : () => set(state => ({count : state.count = 0}))



}))

// với useAuthStore là tên của store, nhằm phục vụ mục đích import từ 
// các file khác

// export : mang store ra ngoài để các file khác có thể import



export const useDataStore = create((set) => ({ 
    // state
    API_URL : 'https://fakestoreapi.com/products?limit=5',

    products : [],


    setProducts : (products) => set(state => ({
        products : {
            ...state.products,
            products
        }
    }))
    // products chính là data nhận được từ API


}))