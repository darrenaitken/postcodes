// Node Modules
import React, {useEffect, useRef} from "react";

// CSS
import "../styles/SearchField.css";

const SearchField = () => {

    const refSearchField = useRef()

    // Load: Simulates componentDidMount() method.
    // This will only run once - when the component has mounted
    useEffect(() => {
        refSearchField.current.focus();
    },[])


    return (
        <div className="container-searchfield">
                <input id="searchField" 
                ref={refSearchField}
                        className="search-field" 
                        type="text" 
                        placeholder="Enter Postcode..." 
                        minLength="3" 
                        maxLength="8" 
                        tabIndex="1" 
                        required></input>
                <button id="btnSearch" type="submit"><i className="fa fa-search"></i></button>

        </div>
    )
}


export default SearchField