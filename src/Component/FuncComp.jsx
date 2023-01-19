import React from "react";
import "./component.css"



const FuncComp=()=>{
    console.log("hello");
    return (
        <div className="flexbox-1">
        <h2>this is Created using functional<br/>Component</h2>
        <p className="excss">this is done using external css</p>
        <p style={{color: "blue"}}>this is done using inline css</p>
    </div>
    )}
export default FuncComp;