import { PRODUCTS_LIST, PRODUCTS_DETAILS } from "../utils/products";

export function getAllProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PRODUCTS_LIST);
    }, 2500);
  });
}

export function getProduct(productId) {
  return new Promise((resolve, reject) => {
    const targetProduct = PRODUCTS_DETAILS.find(
      (product) => product.id === productId
    );
    setTimeout(() => resolve(targetProduct), 1000);
  });
}
