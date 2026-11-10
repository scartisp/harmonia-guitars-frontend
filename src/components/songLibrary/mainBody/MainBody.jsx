import './MainBody.css';
import ListContainer from '../../shared/listContainer/ListContainer';
import SongCard from '../songCard/SongCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../../config';

const MainBody = () => {
    const [isLoading, setLoading] = useState(true)
    const toggleLoading = () => setLoading(!isLoading);
    //get songs
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const loadSongs = async () => {
            const response = await axios.get(`${API_BASE_URL}/api/songs`);
            setSongs(response.data);
            toggleLoading();
        };
        loadSongs();
    }, []);
    return (
        <section className='border-box vt-body-marginal-padding background-indigo section-divider'>
            <ListContainer title='top songs'>
                {isLoading ? (<p className='body-txt-font txt-cream font-22px'>loading...</p>) :
                    songs.map((song) => (
                        <SongCard key={song._id} image= {`${API_BASE_URL}/${song.img}`} genre={song.genre}
                            title={song.title} rating={song.rating} videoId={song.videoId} techniques={song.techniques} />
                    ))
                }
            </ListContainer>
        </section>
    );
};

export default MainBody;
