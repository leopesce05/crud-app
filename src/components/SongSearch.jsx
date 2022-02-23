import React, { useState, useEffect } from 'react';
import SongForm from './SongForm'
import SongDetails from './SongDetails';
import Loader from './Loader';

const SongSearch = () => {
    
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    
    return ( 
        <div>
            <h2>Buscador de caciones</h2>
            <SongForm/>
            {loading && <Loader />}
            <SongDetails />
        </div>
    );
}

export default SongSearch;