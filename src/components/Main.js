import React from 'react'
import SunburstChart from "./Sunburst";
import test from "../data/sca.json";

const Main = () => {
  return (
    <div className="w-4/5 h-full">

    <div className="container">
    <div className="product-tag w-full flex justify-between">
      <p className="p-1 px-3 font-semibold" >1,447 Products</p>
      <p className="text-cyan-500 p-1">Reset Filter</p>
    </div>
    </div>

    <div className="chart h-full">
      {/* <h1 className="text-red-500" >Hexaware Sunburst Chart</h1> */}
      <SunburstChart />
    </div>
  </div>

  )
}

export default Main