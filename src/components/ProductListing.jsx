import React, { useState } from "react";
import Product from "./Product";
import productData from "../data/ProductData"; 


const ProductList =({ selectedImage, handleProductClick }) =>{




    return(
        <>
             <div className="product-listing-box border-bg">
                <div className="head-box flex-box justify-between align-center">
                    <div className="logo-box flex-box align-center">
                        <div className="icon-box">
                            <img src={require("../assets/img/grammarly-icon.png")} alt="" />
                        </div>
                        <div className="brand-name-box">
                            <h1>
                                Grammarly
                            </h1>
                            <p className="small-para" >
                                reebok.abfrl.in
                            </p>
                        </div>
                    </div>
                    <ul className="customer-detail-box flex-box align-center" >
                        <li>
                            <p>Contact Person</p>
                            <h5>Johnson Jones</h5>
                        </li>
                        <li>
                            <p>Contact No.</p>
                            <h5>+14844760184</h5>
                        </li>
                        <li>
                            <p>Contact Email</p>
                            <h5>Jones@gmail.com</h5>
                        </li>
                    </ul>
                </div>

                <ul className="product-listing flex-box">
                    {productData.map((product, index) => (
                    <Product
                        key={index}
                        imgSrc={product.imgSrc}
                        onClick={() => handleProductClick(product.imgSrc, product.productName,  product.productClicks)}
                        productName={product.productName}
                        productClicks={product.productClicks}
                    />
                    ))}
                </ul>

            </div>
        </>

    )
}

export default ProductList;