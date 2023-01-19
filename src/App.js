import "./App.css";
import React, { useState } from "react";
import FuncComp from "./Component/FuncComp";
import ClsComp from "./Component/ClsComp";
// import  Component from "./Component.css";




const App=()=>{

  const [fshow,fshowpost]=useState(false)
  const Fbtn=()=>{
    fshowpost(!fshow)
  }
  const [cshow,cshowpost]=useState(false)
  const Cbtn=()=>{
      cshowpost(!cshow)
  }
  return (
  <div>
    <div>
      <h1 id="head">Styles using Functional and class Component</h1>
    </div>
    <div className="btns">
      <button onClick={Fbtn} className="btn">To See Styling functional Component</button>
      <button onClick={Cbtn} className="btn">To See Styling Class component</button>
    </div>
      <div id="flexdiv">
        {fshow ? <FuncComp/> : ""}
        {cshow ? <ClsComp/> : ""}
      </div>
  </div>
)
}
export default App;