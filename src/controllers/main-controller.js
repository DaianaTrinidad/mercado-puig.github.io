const mainServices= require("../services/productService");

const mainController = {
  home: (req, res) => {
    const visitedProducts = mainServices.getVisitedProducts();
    const inSaleProducts = mainServices.getInSaleProducts();
    
    res.render("home",{
    visitedProducts,
    inSaleProducts,
    });
  },
  search: (req, res) => {
    const keywords = req.query.keywords;
    const foundProducts = productServices.searchProducts(keywords);
    res.render("results", { foundProducts });
  },
};


 

module.exports = mainController;