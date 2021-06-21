import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CartProduct from "../components/cartProduct";
import { cartService } from "../services/cartService";

function CartPage() {
  const [products, setProducts] = useState(cartService.cartValue);
  const [t] = useTranslation();

  useEffect(() => {
    const subscription = cartService.cart.subscribe(setProducts);

    return () => subscription.unsubscribe();
  }, []);

  const computeTotalPrice = (price, quantity) => {
    return price * quantity;
  };
  const computeTotalCartPrice = (price, quantity) => {
    let result = 0;
    products.forEach((p) => (result += p.quantity * p.price));
    return result;
  };
  const handleMinus = (id) => {
    cartService.decreaseProductQuantity(id);
  };
  const handlePlus = (id) => {
    cartService.increaseProductQuantity(id);
  };
  const handleRemove = (id) => {
    cartService.removeProductFromCart(id);
  };
  const isCartEmpty = () => {
    return products.length === 0;
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-lg my-10">
        <div className="w-full bg-white rounded px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">{t("cartPage.cart")}</h1>
            <h2 className="font-semibold text-2xl">
              {products.length} {t("cartPage.items")}
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              {t("cartPage.productDetails")}
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              {t("cartPage.quantity")}
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              {t("cartPage.price")}
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              {t("cartPage.total")}
            </h3>
          </div>

          {products &&
            products.map((p) => (
              <CartProduct
                key={p.id}
                id={p.id}
                description={p.description}
                productName={p.name}
                imageUrl={p.imageURL}
                price={p.price}
                quantity={p.quantity}
                totalPrice={computeTotalPrice(p.price, p.quantity)}
                onMinus={handleMinus}
                onPlus={handlePlus}
                onRemove={handleRemove}
              />
            ))}
          <div className="flex items-center hover:bg-gray-100 pr-6 py-5 text-green-600 text-xl font-semibold border-b-2 border-grey">
            <div className="flex w-full">{t("cartPage.totalCost")}</div>
            <div className="text-center w-1/5">{computeTotalCartPrice()}</div>
          </div>
          <Link
            to="/"
            className="flex font-semibold text-green-600 text-sm mt-10"
          >
            {t("cartPage.continueShopping")}
          </Link>
          {!isCartEmpty() && (
            <Link
              to="/summary"
              className="bg-indigo-500 font-semibold mt-6 hover:bg-indigo-600 py-3 text-sm text-white uppercase block text-center"
            >
              {t("cartPage.checkout")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
