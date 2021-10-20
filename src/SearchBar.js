import React from "react";

function SearchBar({searchTerm, setSearchTerm}) {
    return ( 
        <input 
            id = "search"
            value = {searchTerm}
            onChange = {
                (e) => setSearchTerm(e.target.value)
            }
        />
    );
}

export default SearchBar;