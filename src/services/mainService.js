const products=require("../data/products");
const mainServices={
    getVisitedProducts:()=>{
     return products.filter((product)=> product.category == "visited");
    },
    getInSaleProducts: ()=>{
    return products.filter((product)=> product.category == "in-sale");
    },
    
};
module.exports=mainServices;