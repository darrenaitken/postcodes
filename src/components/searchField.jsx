// Node Modules
import React, {useEffect} from "react";

// CSS
import "../styles/SearchField.css";

const SearchField = (props) => {

    // PROPS
    const {handleSearch, refSearchField} = props;

    // Load: Simulates componentDidMount() method.
    // This will only run once - when the component has mounted
    useEffect(() => {
        refSearchField.current.focus();
    },[])

    return (
        <div className="container-searchfield">
            <form>
                <input id="searchField" 
                ref={refSearchField}
                        className="search-field" 
                        type="text" 
                        placeholder="Enter Postcode..." 
                        minLength="3" 
                        maxLength="8" 
                        tabIndex="1" 
                        required
                        ></input>
                <button id="btnSearch" type="submit" onClick={handleSearch}><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}


export default SearchField