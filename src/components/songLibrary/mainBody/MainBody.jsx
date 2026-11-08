import './MainBody.css';
import ListContainer from '../../shared/listContainer/ListContainer';
import SongCard from '../songCard/SongCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MainBody = () => {
    //get songs
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const loadSongs = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE}/api/songs`);
            setSongs(response.data);
        };
        loadSongs();
    }, []);
    //toggle collapsed

    return (
        <section className= 'border-box vt-body-marginal-padding background-indigo section-divider'>
            <ListContainer title='top songs'>
                {songs.map((song) => (
                    <SongCard key={song._id} image={`${API_BASE}/${song.img}`} genre={song.genre}
                        title={song.title} rating={song.rating} videoId={song.videoId} techniques={song.techniques} />
                ))}
            </ListContainer>
        </section>
    );
};

export default MainBody;
