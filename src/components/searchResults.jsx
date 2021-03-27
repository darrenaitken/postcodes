// Node Modules
import React, {useState} from "react";

// Services (Obtain Data etc)
import svcPostcode from "../services/postcodeService";

// Components
import SearchField from "./searchField";
import ResultsTable from "./resultsTable";

// Custom Modules
import {toastError} from "../js/toast/toast";

const SearchResults = () => {

    // STATE
    // arrResult is an array of our search results
    const [state, setstate] = useState({
        arrResults: [] 
    });

    // EVENTS
    const handleSearch = async (e) => {

        let arrResults;

        try{
            e.preventDefault();

            // Obtain all the postcode service data (dev only - we do not care about a particular one atm)
            arrResults = await svcPostcode.getData();
    
            // Update the state an re-render the HTML
            setstate({arrResults})
        }
        catch(err){
            console.log(err)
            toastError(`Cannot find Postcode Details`,err.number,err.message);
        }
    }


    return (
    <div className="container-content">
        <SearchField 
        handleSearch={handleSearch}/>
        <ResultsTable
        arrResults={state.arrResults}
        />
      </div>
    )
}

export default SearchResults