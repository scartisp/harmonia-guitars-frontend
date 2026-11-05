import './MainBody.css';
import ListContainer from '../../shared/listContainer/ListContainer';
import SongCard from '../songCard/SongCard';
import leper from './images/leper-img.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'https://harmonia-gutiars-backened.onrender.com';

const MainBody = () => {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const loadHouses = async () => {
            const response = await axios.get(`${API_BASE}/api/songs`);
            setSongs(response.data);
        };
        loadHouses();
    }, []);
    return (
        <section className='border-box vt-body-marginal-padding background-indigo section-divider'>
            <ListContainer title='top songs'>
                {songs.map((song) => (
                    <SongCard key={song._id} image={`${API_BASE}/${song.img}`} genre={song.genre}
                        title={song.title} rating={song.rating}/>
                ))}
            </ListContainer>
        </section>
    );
};

export default MainBody;

// item1={<SongCard
//     image={leper} genre='metal' title='The Leper Affinity- Opeth' rating='10' technique1='Sweep Picking' technique2='Syncopation' videoId='nKpIwX2P118'
// />}
// item2={<SongCard
//     image={leper} genre='metal' title='The Leper Affinity- Opeth' rating='10' technique1='Sweep Picking' technique2='Syncopation' videoId='LzVVESU4w5c'
// />}
// item3={<SongCard
//     image={leper} genre='metal' title='The Leper Affinity- Opeth' rating='10' technique1='Sweep Picking' technique2='Syncopation' videoId='vo7mYqaMKXA'
// />}