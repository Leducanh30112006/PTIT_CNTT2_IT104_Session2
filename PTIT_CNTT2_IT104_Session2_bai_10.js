const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  {
    name: "B",
    price: 200,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "C",
    price: 300,
    discount: 0,
    quantity: 3,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
  },
];

const getOrderSummary = (products) => {
  let totalBeforeDiscount = 0;
  let totalAfterDiscount = 0;
  const detail = [];

  for (const product of products) {
    const temp = product.price * product.quantity;
    totalBeforeDiscount += temp;
    let extraDiscount = 0;
    if (product.bulkDiscount) {
      if (product.quantity >= product.bulkDiscount.minQuantity)
        extraDiscount = product.bulkDiscount.extraDiscount;
    }
    const finalPrice = Math.round(
      product.price * (1 - product.discount - extraDiscount)
    );
    let subtotal = finalPrice * product.quantity;
    totalAfterDiscount += subtotal;
    detail.push({
      name: product.name,
      finalPrice: finalPrice,
      quantity: product.quantity,
      subtotal: subtotal,
    });
  }
  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    detail,
  };
};

console.log(getOrderSummary(products));
