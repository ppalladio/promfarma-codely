import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Product {
  product_id: string;
  updated_at: string;
  name: string;
  product_state: string;
  has_stock: boolean;
  recommended_prices: {
    amount: number;
    currency: string;
    country: string;
  }[];
  manufacturer: {
    manufacturer_id: string;
    manufacturer_name: string;
  };
  brand: {
    brand_id: string;
    name: string;
  };
  main_category: {
    category_id: string;
    category_name: string;
  };
}

interface useFavoriteProps {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  hasItem: (id: string) => boolean;
}

const useFavorite = create(
  persist<useFavoriteProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        set({ items: [...get().items, data] });
        toast.success('Item added to cart.');
      },
      removeItem: (id: string) => {
        set({
          items: [
            ...get().items.filter((item) => item.product_id !== id),
          ],
        });
        toast.success('Item removed from cart.');
      },
      removeAll: () => set({ items: [] }),
      hasItem: (id: string) => {
        const { items } = get();
        return items.some((item) => item.product_id === id);
      },
    }),
    {
      name: 'favorite-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavorite;
