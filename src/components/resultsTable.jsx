//  Node Modules
import React from "react"

//  CSS
import "../styles/ResultsTable.css"



const ResultsTable = (props) => {

    const {arrResults} = props;


    return (
        <>
        {arrResults.length === 0 ? 
            <div className="intro-message">Welcome!<br/>Type a post code into the field above</div> :
            arrResults[0].id
        }
        </>
    )
}

export default ResultsTable



