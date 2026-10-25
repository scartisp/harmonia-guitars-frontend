import './SongCard.css';
import play from './images/play.png';

const SongCard = props => {
    return (
        <div className='song-card relative flex flex-column background-indigo'>
            <img src={props.image} className='song-card-img' />
            <p className='genre-p absolute body-txt-font weight-500 txt-indigo-deep margin-0 background-orange'>{props.genre}</p>
            <div style={{ paddingInline: '18px', marginTop: '16px' }} className='flex flex-row jst-cnt-spc-between align-items-center'>
                <h3 style={{ fontSize: '24px', maxWidth: '190px', paddingRight: '10px'}} className='h-font txt-cream margin-0 weight-500'>{props.title}</h3>
                <div className='song-rating-div background-indigo-deep max-height-fit-cnt max-width-fit-cnt '>
                    <p>
                        <span style={{ fontSize: '22px' }} className='h-font txt-orange'>{props.rating}</span>
                        /10
                    </p>
                    <p className='uppercase'>rating</p>
                </div>
            </div>
            <h4 className='technique-list-title body-txt-font font-12px txt-cream uppercase weight-500'>Techniques </h4>
            <div className='technique-list-div'>
                <p>{props.technique1}</p>
                <p>{props.technique2}</p>
            </div>
            <p style={{ paddingInline: '18px' }} className='flex flex-row align-items-center'>
                <img src={play} />
                <a href='#' style={{ paddingLeft: '8px' }} className='list-style-none body-txt-font font-15px txt-orange '>Listen on Youtube</a>
            </p>
        </div>
    );
};

export default SongCard;