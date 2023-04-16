import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSongsData = create(
    persist(
        (set) => ({
            songs: [],
            loading : false,

            setSongs: (songs) => set({ songs }),
            setLoading: (loading) => set({ loading }),
        }),
        {
          name: 'useSongsData', // unique name
          storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
      )
)