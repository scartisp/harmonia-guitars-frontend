import './MainBody.css';
import ListContainer from '../../shared/listContainer/ListContainer';
import SongCard from '../songCard/SongCard';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { API_BASE_URL } from '../../../config';

const MainBody = props => {
    return (
        <section className='border-box vt-body-marginal-padding background-indigo section-divider'>
            <ListContainer title='top songs'>
                {props.isLoading ? (<p className='body-txt-font txt-cream font-22px'>loading...</p>) :
                    props.songs.map((song) => (
                        <SongCard key={song._id} image= {`${API_BASE_URL}/${song.img}`} genre={song.genre}
                            title={song.title} artist={song.artist} rating={song.rating} videoId={song.videoId} techniques={song.techniques} ratingCount={song.rating_count} />
                    ))
                }
            </ListContainer>
        </section>
    );
};

export default MainBody;
