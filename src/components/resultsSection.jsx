//  Node Modules
import React from "react"

// Components
import Slicer from "./slicer"

//  CSS
import "../styles/ResultsSection.css"


const ResultsSection = (props) => {

    const {arrResults, showStartMessage, lastSearch} = props;

    // Default message before we start
    if(showStartMessage || lastSearch === ""){
        return (<div className="results-message">Welcome!<br/>Type a post code into the field above<br/>Example: E8 3DB</div>)
    }
    
    // Results
    return (
        arrResults.length === 0 ? 
        <div className="results-message">oops! We couldn't find '{lastSearch}'<br/>Try again...</div> : 
        <div className="results-flexbox">
        {
            Object.keys(arrResults[0]).map((key, i) => {
                return <Slicer
                key={i}
                keyname={key}
                keyvalue={arrResults[0][key]}
                />
            })

        }
        </div>
        )
}

export default ResultsSection



