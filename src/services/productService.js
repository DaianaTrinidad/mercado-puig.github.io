const db=require("../data/db");
const formatProductPrices = function (product) {
  const priceWithDiscount =
    product.price - product.price * (product.discount / 100);
  product.priceWithDiscount = `$ ${priceWithDiscount.toLocaleString("es", {
    minimumFractionDigits: 2,
  })}`;

  product.price = `$ ${product.price.toLocaleString("es", {
    minimumFractionDigits: 2,
  })}`;

  product.discount = product.discount.toLocaleString("es");

  return product;
};
const formatProductsPrices = function (products) {
  return products.map((product) => formatProductPrices(product));
};
const productServices={
    getAllProducts: () => {
      return db.products.find();
     },

    getVisitedProducts: () => {
        const products = db.products
          .find()
          .filter((product) => product.category == "visited");
        return formatProductsPrices(products);
      },
    getInSaleProducts: () => {
        const products = db.products
          .find()
          .filter((product) => product.category == "in-sale");
        return formatProductsPrices(products);
      },
    };
module.exports=productServices;