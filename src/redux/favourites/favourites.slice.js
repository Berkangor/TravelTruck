import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favourites",
  initialState: { 
    // Bu dizi, karavanların benzersiz ID'lerini (number veya string) tutar
    items: [], 
  },
  reducers: {
    toggleFavourite: (state, action) => {
      // Favori olarak eklenip/çıkarılacak karavanın ID'sini alıyoruz
      const itemId = action.payload; 

      // Listenin bu ID'yi içerip içermediğini kontrol ediyoruz
      const isFavourite = state.items.includes(itemId);

      if (isFavourite) {
        // Eğer zaten favoriyse (Listeden Çıkar):
        // filter() metodu ile yeni bir dizi oluşturuyoruz, böylece splice kullanmaktan kaçınıyoruz.
        state.items = state.items.filter(id => id !== itemId);
      } else {
        // Eğer favori değilse (Listeye Ekle):
        // push() metodu Redux Toolkit (Immer) sayesinde güvenle kullanılabilir.
        state.items.push(itemId);
      }
    },
  },
});

export const { toggleFavourite } = slice.actions;
export const favouritesReducer = slice.reducer;