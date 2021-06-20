import React from "react";

function SummaryItem({
  productName,
  description,
  totalPrice,
  quantity,
  imageURL,
}) {
  return (
    <div className="flex w-full h-36 py-2 space-x-3 border-b-2 justify-between">
      <div className="flex w-full space-x-3">
        <img
          src={imageURL}
          alt="Summary item"
          className="w-1/2 md:w-1/5 h-full bg-gray-500 object-cover overflow-hidden"
        />
        <div className="flex flex-col justify-between">
          <div className="mt-1">
            <p className="text-xl font-bold text-indigo-500">{productName}</p>
            <p className="text-sm text-black">{description}</p>
          </div>
          <div className="font-semibold">
            <p className="text-l text-black h-full">{totalPrice} PLN</p>
          </div>
        </div>
      </div>
      <div className="self-end text-l w-1/6">
        Count: <span className="font-semibold">{quantity}</span>
      </div>
    </div>
  );
}

export default SummaryItem;
