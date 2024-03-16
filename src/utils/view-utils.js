module.exports={
    getFinalPrice:(product)=>{
    const price= product.price -product.price * (product.discount /100);
    return price.toLocaleString("es",{
        minimumFractionDigits:2,
    })
    }
};