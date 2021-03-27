// Node Modules
import React, {useState, useRef} from "react";

// Services (Obtain Data etc)
import svcPostcode from "../services/postcodeService";

// Components
import SearchField from "./searchField";
import ResultsTable from "./resultsTable";

// Custom Modules
import {toastError} from "../js/toast/toast";

const SearchResults = () => {

    // REFS
    // This is so we know what the field value is
    const refSearchField = useRef()

    // STATE
    // arrResult is an array of our search results
    const [state, setstate] = useState({
        arrResults: [],
        showStartMessage: true,
        lastSearch: ""
    });

    // EVENTS
    const handleSearch = async (e) => {

        e.preventDefault();

        let arrResults;
        const postcode = refSearchField.current.value

        try{
            // Obtain all the postcode service data (dev only - we do not care about a particular one atm)
            arrResults = await svcPostcode.getData(postcode);
    
            // Update the state an re-render the HTML
            setstate({arrResults, showStartMessage: false, lastSearch: postcode})
        }
        catch(err){
            console.log(err)
            toastError(`Cannot Find Postcode Details`,err.number,err.message);
        }
    }


    return (
    <div className="container-content">
        <SearchField 
            refSearchField = {refSearchField}
            handleSearch={handleSearch}/>
        <ResultsTable
            arrResults={state.arrResults}
            showStartMessage={state.showStartMessage}
            lastSearch={state.lastSearch}
        />
      </div>
    )
}

export default SearchResults