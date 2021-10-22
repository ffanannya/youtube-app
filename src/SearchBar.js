import React from "react";

function SearchBar({searchTerm, setSearchTerm, setFetching}) {
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            setFetching(true);
        }
    };

    return ( 
        <input 
            id = "search"
            placeholder="Search..."
            value = {searchTerm}
            onKeyPress = {onKeyPress}
            onChange ={(e) => setSearchTerm(e.target.value)}
        />
    )
};

export default SearchBar;