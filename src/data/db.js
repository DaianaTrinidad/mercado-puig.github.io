const fs = require("fs");
const path = require("path");
//metodos de la base de datos
const db = {
    products: {
      find: () => {
        const productsFilePath = path.join(
          __dirname,
          "../data/productsDataBase.json"
        );
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return products;
      },
      findById: (id) => {
        const productsFilePath = path.join(
          __dirname,
          "../data/productsDataBase.json"
        );
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const product = products.find((product) => product.id == id);
        return product;
      },

  }};

module.exports=db;