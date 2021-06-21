import React from "react";
import { useTranslation } from "react-i18next";

function CartProduct({
  id,
  imageUrl,
  description,
  productName,
  price,
  quantity,
  totalPrice,
  onMinus,
  onPlus,
  onRemove,
}) {
  const [t] = useTranslation();

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={imageUrl} alt="Cart product" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">
            {t("products." + productName + ".name")}
          </span>
          <span className="text-red-500 text-xs">
            {t("products." + productName + ".description")}
          </span>
          <button
            onClick={() => onRemove(id)}
            className="font-semibold w-1 hover:text-red-500 text-gray-500 text-xs"
          >
            {t("cartPage.remove")}
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button onClick={() => onMinus(id)} className="focus:outline-none">
          <i className="fa fa-minus"></i>
        </button>

        <input
          className="mx-2 border text-center w-8 focus:outline-none"
          type="text"
          value={quantity}
          onChange={() => {}}
        />

        <button onClick={() => onPlus(id)} className="focus:outline-none">
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {totalPrice}
      </span>
    </div>
  );
}

export default CartProduct;
