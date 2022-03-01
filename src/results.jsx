import React from "react";
import "./results.css"
import NameCard from "./namecard"
const Result=({suggestedNames})=>{
  const name=suggestedNames.map(suggestedName=>{
    return <NameCard key ={suggestedName} suggestedName={suggestedName}/>
  });
  return (
    <div className="results-container">{name}</div>
  );
}
export default Result;