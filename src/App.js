import {useEffect, useState} from 'react';
import SearchBar from './SearchBar'

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log(searchTerm);
    }, [searchTerm]);

    return ( 
        <SearchBar 
            searchTerm = {searchTerm}
            setSearchTerm = {setSearchTerm}
        />
    );
}

export default App;
