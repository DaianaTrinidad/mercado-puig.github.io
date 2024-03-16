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
  login: (req, res) => {
    //res.sendFile(path.join(__dirname, "../views/login.html"));
    res.render("login");
  },
  register: (req, res) => {
    //res.sendFile(path.join(__dirname, "../views/register.html"));
    res.render("register");
},
detail:(req,res)=>{
  res.render("detail");
}
};

module.exports = mainController;