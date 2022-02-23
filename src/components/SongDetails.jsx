import React from 'react'
import SongLyric from './SongLyric';
import SongArtist from './SongArtist';

function SongDetails() {
    return ( 
        <div>
            <h2>Detalles de la cancion</h2>
            <SongLyric />
            <SongArtist />
        </div>
     );
}

export default SongDetails;