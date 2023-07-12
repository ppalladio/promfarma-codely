import { category, manufacturerName, brandName } from '../Components/Constants/info';

describe('Constants Unit Tests', () => {
  test('The category constant contains a specific key', () => {
    expect(category).toHaveProperty('f6738502-b893-4fed-9cf1-75d85f3b34c7');
  });

  test('The category constant contains a specific value', () => {
    expect(Object.values(category)).toContain('Solar');
  });

  test('The manufacturerName constant contains a specific key', () => {
    expect(manufacturerName).toHaveProperty('629d59d0-7dc5-46b7-abbc-923a275e670e');
  });

  test('The manufacturerName constant contains a specific value', () => {
    expect(Object.values(manufacturerName)).toContain('IFC CANTABRIA');
  });

  test('The brandName constant contains a specific key', () => {
    expect(brandName).toHaveProperty('e085d7b5-6a97-4b33-990d-f92d95475e62');
  });

  test('The brandName constant contains a specific value', () => {
    expect(Object.values(brandName)).toContain('Heliocare');
  });
});
