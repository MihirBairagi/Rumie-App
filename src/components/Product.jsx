import React from "react";

const Product =({ imgSrc, productName, onClick }) =>{
    return(
        <>
            <li onClick={onClick} className="text-white relative" >

                <div className="img-box">
                    <img className="w-100" src={imgSrc} alt="" />
                </div>
                <h5>{productName}</h5>

            </li> 
        </>

    )
}

export default Product;