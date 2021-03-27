//  Node Modules
import React from "react"

//  CSS
import "../styles/ResultsTable.css"



const ResultsTable = (props) => {

    const {arrResults, showStartMessage, lastSearch} = props;

    // Default message before we start
    if(showStartMessage){
        return (<div className="results-message">Welcome!<br/>Type a post code into the field above</div>)
    }
    
    // Results
    return (
        arrResults.length === 0 ? <div className="results-message">oops! We couldn't find '{lastSearch}'<br/>Try again...</div> : arrResults[0].id 
    )
}

export default ResultsTable



