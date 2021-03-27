// Node Modules
import React from "react";

// Services (Obtain Data etc)
import svcPostcode from "../services/postcodeService"

// Components
import SearchField from "./searchField"

// Custom Modules
import {toastError} from "../js/toast/toast";

const SearchResults = () => {

    // STATE
    // const [state, setstate] = useState({
    //     results: []
    // });

    // EVENTS
    const handleSearch = async (e) => {

        let arrResults;

        try{
            e.preventDefault();

            // Obtain all the postcode service data (dev only - we do not care about a particular one atm)
            arrResults = await svcPostcode.getData();
    
            console.log(arrResults)
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
      </div>
    )
}

export default SearchResults