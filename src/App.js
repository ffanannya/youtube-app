import {useEffect, useState} from 'react';
import SearchBar from './SearchBar'
import Video from './Video'

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [videoInfos, setVideoInfos] = useState([]);

    useEffect(() => {
        if (searchTerm !== '') {
            let params = new URLSearchParams({
                part:'snippet',
                q: searchTerm,
                maxResults:15,
                key:'AIzaSyDOW-h14eE1RY8qcK8FTWNQQGXnFeSvWFo',
            });

            fetch('http://localhost:8888/?' + params)
                .then(response => response.json())
                .then(json => {
                    const data = json.items.map(item => {
                        return {
                            videoId: item.id.videoId,
                            videoTitle: item.snippet.title,
                            channelId: item.snippet.channelId,
                            thumbnailUrl: item.snippet.thumbnails.medium.url,
                            duration:'2:30',
                            channelName: item.snippet.channelTitle    
                        };
                    });

                    setVideoInfos(data);
                })
                .catch(error => console.error(error))
            ;
        }
    }, [searchTerm]);

    return ( 
        <>        
            <SearchBar 
                searchTerm = {searchTerm}
                setSearchTerm = {setSearchTerm}
            />
            <div className='grid-container'>
                {videoInfos.map(info => (<Video key={info.videoId} {...info}/>))}   
            </div>
        </>
    );
}

export default App;
