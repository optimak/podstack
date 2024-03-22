import "./HomePage.scss"

import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import baseUrl from '../../consts';

function HomePage() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredPodcasts, setFilteredPodcasts] = useState([]);

    useEffect(() => {
        fetchPodcasts();
    }, []);

    const fetchPodcasts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/podcasters`);
            
            const uniquePodcasts = response.data.reduce((unique, podcast) => {

                const normalizedChannel = podcast.channel.toLowerCase();

                if (!unique.find(item => item.channel.toLowerCase() === normalizedChannel)) {
                    unique.push(podcast); 
                }
                return unique;
            }, []);
    
            setPodcasts(uniquePodcasts);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching podcasts:', error);
            setLoading(false);
        }
    };      

    const filterPodcasts = (filteredData) => {
        setFilteredPodcasts(filteredData);
    };    

    console.log(filteredPodcasts)

    return (
        <div className="main">
            <h1 className="main__title">Podcasters in Tech</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="main__search">
                    <SearchBar data={podcasts} onFilter={filterPodcasts} />
                    <div className="main__container">
                        {filteredPodcasts.map(podcast => (
                            <div key={podcast.id} className="main__list">
                                <h2>{podcast.title}</h2>
                                <p>
                                    <span className="main__subtitle">Channel: </span>
                                     {podcast.channel}</p>
                                <p>
                                    <span className="main__subtitle">Channel View Count: </span> 
                                    {podcast.channelViewCount}</p>
                                <p>
                                    <span className="main__subtitle">Subscriber Count: </span>
                                    {podcast.subscriberCount}</p>
                                <p>
                                    <span className="main__subtitle">Country: </span>
                                    {podcast.country}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;

