import { BehaviorSubject } from "rxjs";

const cart = new BehaviorSubject([]);

function addProductToCart(product) {
  const tempCart = [...cart.value];

  const index = tempCart.findIndex((p) => p.id === product.id);
  if (index === -1) {
    let newProduct = { ...product, quantity: 1 };
    tempCart.push(newProduct);
    cart.next(tempCart);
    return;
  }
  tempCart[index].quantity++;
  cart.next(tempCart);
}

function decreaseProductQuantity(id) {
  let tempCart = [...cart.value];
  const index = tempCart.findIndex((p) => p.id === id);
  if (index === -1) {
    return;
  }
  tempCart[index].quantity--;

  if (tempCart[index].quantity === 0) {
    tempCart = tempCart.filter((p) => p.id !== id);
  }
  cart.next(tempCart);
}

function increaseProductQuantity(id) {
  let tempCart = [...cart.value];
  const index = tempCart.findIndex((p) => p.id === id);

  if (index === -1) {
    return;
  }
  tempCart[index].quantity++;

  cart.next(tempCart);
}

function removeProductFromCart(id) {
  let tempCart = [...cart.value];
  const index = tempCart.find((p) => p.id === id);
  if (index === -1) return;
  tempCart = tempCart.filter((p) => p.id !== id);
  cart.next(tempCart);
}

export const cartService = {
  addItemToCart: addProductToCart,
  cart: cart.asObservable(),
  get cartValue() {
    return cart.value;
  },
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
};
