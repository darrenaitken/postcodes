// Node Modules
import React from "react";

// CSS
import "../styles/SearchField.css";

const SearchField = () => {


    return (
        <div className="container-searchfield">
                <input id="searchField" 
                        class="search-field" 
                        type="text" 
                        placeholder="Enter Postcode..." 
                        minLength="3" 
                        maxlength="8" 
                        tabIndex="1" 
                        required></input>
                <button id="btnSearch" type="submit"><i class="fa fa-search"></i></button>

        </div>
    )
}


export default SearchField