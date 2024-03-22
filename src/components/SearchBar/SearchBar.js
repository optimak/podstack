import { useState, useEffect } from 'react';

import "./SearchBar.scss"

function SearchBar({ data, onFilter }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [filterByCountry, setFilterByCountry] = useState('');

    useEffect(() => {
        filterData();
    }, [searchQuery, sortBy, filterByCountry]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleFilterByCountryChange = (event) => {
        setFilterByCountry(event.target.value);
    };

    const handleSearchClick = () => {
        filterData();
    };

    const filterData = () => {
        let filtered = data.filter(item => 
            item.channel.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        if (filterByCountry) {
            filtered = filtered.filter(item => 
                item.country && item.country.toLowerCase() === filterByCountry.toLowerCase()
            );
        }
    
        if (sortBy === 'subscribers_low') {
            filtered.sort((a, b) => a.subscriberCount - b.subscriberCount);
        } else if (sortBy === 'subscribers_high') {
            filtered.sort((a, b) => b.subscriberCount - a.subscriberCount);
        } else if (sortBy === 'viewcount_low') {
            filtered.sort((a, b) => a.channelViewCount - b.channelViewCount);
        } else if (sortBy === 'viewcount_high') {
            filtered.sort((a, b) => b.channelViewCount - a.channelViewCount);
        }
    
        onFilter(filtered);

        console.log(data)
        console.log(filtered)
    }; 

    
    return (
        <div className="search-bar-container">
            <input type="text" value={searchQuery} onChange={handleSearchInputChange} className="search-input" placeholder="Search..." />
            <select value={sortBy} onChange={handleSortChange} className="select-box">
                <option value="">Sort By</option>
                <option value="subscribers_low">Subscribers: Low to High</option>
                <option value="subscribers_high">Subscribers: High to Low</option>
                <option value="viewcount_low">View Count: Low to High</option>
                <option value="viewcount_high">View Count: High to Low</option>
            </select>
            <select value={filterByCountry} onChange={handleFilterByCountryChange} className="select-box">
                <option value="">Filter By Country</option>
                <option value="us">US</option>
                <option value="gb">GB</option>
                <option value="fr">FR</option>
                <option value="nl">NL</option>
                <option value="in">IN</option>
                <option value="global">Global</option>
                {/* Add more options for countries */}
            </select>
            <button className="search-button" onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchBar;
