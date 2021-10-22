import {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import Video from './Video';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [videoInfos, setVideoInfos] = useState([]);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if (searchTerm !== '' && fetching) {
            let params = new URLSearchParams({
                part:'snippet',
                q: searchTerm,
                maxResults:15,
                key:'AIzaSyDOW-h14eE1RY8qcK8FTWNQQGXnFeSvWFo',
            });

            fetch('https://youtube.googleapis.com/youtube/v3/search?' + params)
                .then(response => response.json())
                .then(json => {
                    const data = json.items.map(item => {
                        return {
                            videoId: item.id.videoId,
                            videoTitle: item.snippet.title,
                            channelId: item.snippet.channelId,
                            thumbnailUrl: item.snippet.thumbnails.medium.url,
                            channelName: item.snippet.channelTitle    
                        };
                    });

                    setVideoInfos(data);
                })
                .catch(error => console.error(error))
            ;

            setSearchTerm('');
            setFetching(false);
        }
    }, [fetching]);

    return ( 
        <>        
            <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setFetching={setFetching}
            />
            <div className='grid-container'>
                {videoInfos.map(info => (<Video key={info.videoId} {...info}/>))}   
            </div>
        </>
    );
}

export default App;
