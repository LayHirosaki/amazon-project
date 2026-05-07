export const cartArrObj = [];

export function addToCart(productId, selectedQty) {
  let sameProduct;
  cartArrObj.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      sameProduct = cartItem;
    }
  });
  if (sameProduct) {
    sameProduct.quantity += Number(selectedQty);
  } else {
    cartArrObj.push({
      productId,
      quantity: Number(selectedQty),
    });
  }
}
