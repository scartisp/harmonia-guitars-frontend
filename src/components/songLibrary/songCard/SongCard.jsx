import './SongCard.css';
import SongDialog from '../songDialog/SongDialog';

import { useState } from 'react';

import play from './images/play.png';

const SongCard = props => {
    const [playing, setPlaying] = useState(false);
    const togglePlaying = () => setPlaying(!playing);

    const [showDialog, setShowDialog] = useState(false)
    const toggleShowDialog = () => {
        setShowDialog(!showDialog);
    };
    
    return (
        <div className='song-card relative flex flex-column background-indigo' >
            {playing ?
                <iframe
                    className='song-card-img'
                    src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
                    allow='autoplay; encrypted media'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                />
                : <img src={props.image} className='song-card-img pointer' onClick={toggleShowDialog} />}
            <p className='genre-p absolute body-txt-font weight-500 txt-indigo-deep margin-0 background-orange'>
                {props.genre}
            </p>
            <div style={{ paddingInline: '18px', marginTop: '16px' }} className='flex flex-row jst-cnt-spc-between align-items-center'>
                <h3 style={{ fontSize: '24px', maxWidth: '190px', paddingRight: '10px' }}
                    className='h-font txt-cream margin-0 weight-500'>{props.title}</h3>
                <div className='song-rating-div background-indigo-deep max-height-fit-cnt max-width-fit-cnt '>
                    <p className='flex align-items-center jst-cnt-center'>
                        <span style={{ fontSize: '22px' }} className='h-font txt-orange'>{props.rating}</span>
                        /10
                    </p>
                    <p className='uppercase'>rating</p>
                </div>
            </div>
            <h4 className='technique-list-title body-txt-font font-12px txt-cream uppercase weight-500'>Techniques </h4>
            <div className='technique-list-div'>
                {props.techniques.map((technique) => (
                    <p key={technique}>{technique}</p>
                ))}
            </div>
            <p style={{ paddingInline: '18px' }} className='flex flex-row align-items-center'>
                <img src={play} />
                <span style={{ paddingLeft: '8px' }}
                    className='list-style-none body-txt-font font-15px txt-orange txt-underline pointer margin-0'
                    onClick={togglePlaying}>Listen on Youtube</span>
            </p>
            {showDialog &&
                <SongDialog closeDialog={toggleShowDialog} image={props.image}
                    artist={props.artist} techniques={props.techniques} />}
        </div>
    );
};

export default SongCard;