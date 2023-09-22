import '../assets/css/App.css';
import React, { useState } from 'react';
import ProductList from '../components/ProductListing';
import ProductDetail from '../components/ProductDetail';


function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [selectedproductClicks, setSelectedproductClicks] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);



  const handleProductClick = (imgSrc, productName, productClicks) => {
    console.log("productName in ProductList:", productName); 
    setSelectedProduct({ imgSrc, productName, productClicks });
  };
  

  

  return (
    <section className='product-outer-section'>
      <div className="container">
        <div className="product-outer-box flex-box justify-between">
          <div className="product-listing w-50">
            <ProductList selectedImage={selectedImage} handleProductClick={handleProductClick} />
          </div>
          <div className="product-detail w-48">
            {selectedProduct ? (
              <ProductDetail
                imgSrc={selectedProduct.imgSrc}
                productName={selectedProduct.productName}
                productClicks={selectedProduct.productClicks}
              />
            ) : (
              <div className="product-detail-box border-bg">
                
                <div className="no-product-detail">
                  <div className="text-box relative">
                    <h4>Please Select An Ad From The Left Panel To View Its Performance Metrics</h4>
                    <p className="small-para">See how your ad performed this month and tweak its strategy for better results.</p>
                  </div>
                  <div className="img-box mt-6">
                    <img className="w-100 mt-1" src={require("../assets/img/empty-img.png")} alt="Empty Image" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
