import axios from "axios";
import { BehaviorSubject } from "rxjs";

const cart = new BehaviorSubject([]);

function addProductToCart(product) {
  const tempCart = cart.value;

  let index = tempCart.findIndex((p) => p.id === product.id);
  if (index === -1) {
    let newProduct = { ...product, quantity: 1 };
    tempCart.push(newProduct);
    cart.next(tempCart);
    return;
  }
  tempCart[index].quantity++;
  cart.next(tempCart);
}

export const cartService = {
  addItemToCart: addProductToCart,
  cart: cart.asObservable(),
  get cartValue() {
    return cart.value;
  },
};
