import useFavorite from '../Components/hooks/useFavorite';

test('removeAll should remove all products from the list', () => {
  const { addItem, removeAll } = useFavorite.getState();

  const product1 = {
    product_id: '123',
    updated_at: '2023-07-12',
    name: 'Product Name',
    product_state: 'available',
    has_stock: true,
    recommended_prices: [
      {
        amount: 9.99,
        currency: 'USD',
        country: 'US',
      },
    ],
    manufacturer: {
      manufacturer_id: '456',
      manufacturer_name: 'Manufacturer Name',
    },
    brand: {
      brand_id: '789',
      name: 'Brand Name',
    },
    main_category: {
      category_id: '987',
      category_name: 'Category Name',
    },
  };

  const product2 = {
    product_id: '456',
    updated_at: '2023-07-12',
    name: 'Another Product',
    product_state: 'available',
    has_stock: true,
    recommended_prices: [
      {
        amount: 14.99,
        currency: 'USD',
        country: 'US',
      },
    ],
    manufacturer: {
      manufacturer_id: '789',
      manufacturer_name: 'Manufacturer Name',
    },
    brand: {
      brand_id: '123',
      name: 'Brand Name',
    },
    main_category: {
      category_id: '321',
      category_name: 'Category Name',
    },
  };

  addItem(product1);
  addItem(product2);
  removeAll();

  const state = useFavorite.getState();
  expect(state.items).toHaveLength(0);
});

test('hasItem should return true if a product with the given id exists in the list', () => {
  const { addItem, hasItem } = useFavorite.getState();

  const product = {
    product_id: '123',
    updated_at: '2023-07-12',
    name: 'Product Name',
    product_state: 'available',
    has_stock: true,
    recommended_prices: [
      {
        amount: 9.99,
        currency: 'USD',
        country: 'US',
      },
    ],
    manufacturer: {
      manufacturer_id: '456',
      manufacturer_name: 'Manufacturer Name',
    },
    brand: {
      brand_id: '789',
      name: 'Brand Name',
    },
    main_category: {
      category_id: '987',
      category_name: 'Category Name',
    },
  };

  addItem(product);

  const exists = hasItem(product.product_id);
  expect(exists).toBe(true);
});

