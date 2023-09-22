import React, { useEffect, useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import MyDatePicker from "./DatePicker";
import { Chart } from "chart.js/auto"; 
import 'chartjs-plugin-datalabels'; 

// ...
const pieChartData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [35, 60, 5], 
        backgroundColor: ["#B3B1BE", "#DEDCE7", "#827E92"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  
  const ProductDetail = ({ imgSrc, productName, productClicks }) => {
    const productStats = [
      { label: "Clicks on Ads", value: productClicks },
      { label: "Impression", value: 1200 },
      { label: "CTR", value: "8%" },
      { label: "CTC", value: "$18" },
    ];

    const canvasRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    useEffect(() => {
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
      
          try {
            if (chartInstance) {
              chartInstance.destroy();
            }
      
            const newChartInstance = new Chart(ctx, {
              type: "doughnut",
              data: pieChartData,
              options: {
                cutoutPercentage: 50,
                legend: {
                    display: false,
                  },
                plugins: {
                  datalabels: {
                    formatter: (value, ctx) => {
                      const dataset = ctx.chart.data.datasets[0];
                      const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
                      const percentage = ((value / total) * 100).toFixed(2);
                      return percentage + "%";
                    },
                    color: "#fff",
                    font: {
                      weight: "bold",
                    },
                  },
                },
              },
            });
      
            setChartInstance(newChartInstance);
          } catch (err) {
            console.error("Error creating chart:", err);
          }
        }
      }, [productClicks]);
      


  




  


  return (
    <div className="product-detail-box border-bg">
      {imgSrc ? (
        <>
          <div className="product-sub-detail flex-box justify-between">
            <div className="img-box">
              <img className="w-100" src={imgSrc} alt="" />
            </div>
            <div className="text-box">
              <p>Ad Title</p>
              <h4>{productName}</h4>
              <p>External Link</p>
              <h5>www.rumieapp.com</h5>
              <p>Visible to</p>
              <h5>Texas University, Houston University, UH Energy</h5>
              <div className="date-n-price-box flex-box align-center justify-between">
                <div className="live-since flex-box justify-between align-center">
                  <div className="publish-date">
                    <p>Live Since</p>
                    <h5>2-Jul-2023</h5>
                  </div>
                  <div className="how-many-days text-center">
                    <h3>16</h3>
                    <h5>Days</h5>
                  </div>
                </div>
                <div className="monthly-budget">
                  <p>Monthly Budget</p>
                  <h5>$100</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="product-stats-box">
            <div className="head-box flex-box justify-between align-center mt-3">
              <h4>Performance Stats</h4>
              <div className="date-picker-box flex-box align-center justify-between">
                <div className="date-from flex-box align-center w-48">
                  <p>From</p>
                  <MyDatePicker />
                </div>
                <div className="date-to flex-box align-center w-48">
                  <p>To</p>
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <ul className="product-stats-detail flex-box align-center justify-between mt-2">
              {productStats.map((stat, index) => (
                <li key={index}>
                  <p>{stat.label}</p>
                  <h4>{stat.value}</h4>
                </li>
              ))}
            </ul>

            <div className="gender-n-clicks-box flex-box justify-between mt-3">
                <div className="gender-box w-50">
                    <h4>Gender Ratio</h4>
                    <div className="pie-chart flex-box align-center justify-between">
                    <canvas ref={canvasRef} />
                    <ul className="text-box">
                        <li>Male</li>
                        <li>Female</li>
                        <li>Other</li>
                    </ul>
                    </div>
                </div>



              <div className="click-by-box w-48">
                <h4>Clicked By Universities</h4>
                <ul className="clcik-by-listing">
                  {[
                    { name: "Harvard University", batch: 25 },
                    { name: "Yale University", batch: 60 },
                    { name: "Yale University", batch: 65 },
                  ].map((uni, index) => (
                    <li key={index} className="flex-box justify-between align-center">
                      <div className="text flex-box align-center">
                        <h4>{index + 1}</h4>
                        <h5>{uni.name}</h5>
                      </div>
                      <div className="batch">
                        <h5>{uni.batch}</h5>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="no-product-detail">
          <div className="text-box relative">
            <h4>Please Select An Ad From The Left Panel To View Its Performance Metrics</h4>
            <p className="small-para">See how your ad performed this month and tweak its strategy for better results.</p>
          </div>
          <div className="img-box mt-6">
            <img className="w-100 mt-1" src={require("../assets/img/empty-img.png")} alt="Empty Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
