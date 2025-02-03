import React from "react";

function Product({ imgSrc, altText, title, price }) {
  return (
    <div className="product">
      <img src={imgSrc} alt={altText} className="product-img" />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;
