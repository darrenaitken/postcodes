// Node Modules
import React from "react";

// CSS
import "../styles/SearchField.css";

const SearchField = () => {


    return (
        <div className="container-searchfield">
            <form>
                <label for="searchField">Search:</label>
                <input id="searchField" 
                        class="search-field" 
                        type="text" 
                        placeholder="Enter Postcode..." 
                        minLength="3" 
                        maxlength="8" 
                        tabIndex="1" 
                        required></input>
            </form>

        </div>
    )
}


export default SearchField