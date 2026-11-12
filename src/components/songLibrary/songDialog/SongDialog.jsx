import './SongDialogue.css';
import { X } from 'lucide-react';

/*the contents of the dialogue will be
the image
the artist
total ratings
the ability to add your own rating
list of genres?
*/
const SongDialogue = props => {
    return (
        <div className="w3-modal modal" onClick={props.closeDialog}>
            <div
                className="w3-modal-content flex jst-cnt-center body-marginal-padding background-deepest-indigo max-width-500 border-radious-14px" onClick={e => e.stopPropagation()}>
                <div className="w3-container padding-0">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright" onClick={props.closeDialog}>
                        <X  color={'var(--brand-cream'}/>
                    </span>
                </div>
                <div id="song-dialog-content"
                    className='flex flex-column max-width-400'>
                    <div className='song-card-dialog align-self-center relative flex flex-column background-indigo'>
                        <img className='song-card-img-dialog' src={props.image}></img>
                    </div>
                    <ul style={{ paddingTop: '10px' }}
                        className='song-dialog-content-ul list-style-none flex flex-column gap-8px margin-0 padding-0'>
                        <li>
                            <h2 className='h-font font-26px txt-cream uppercase margin-0'>Artist:</h2>
                            <h3 className='h-font font-22px txt-cream padding-left-10 margin-0'>{props.artist}</h3>
                        </li>
                        <li>
                            <h2 className='h-font font-18px txt-cream uppercase margin-0'>number of ratings:</h2>
                            <h3 className='body-txt-font font-14px txt-cream padding-left-10 margin-0'>{props.artist}</h3>
                        </li>
                        <li className='flex-column'>
                            <h2 className='h-font font-18px txt-cream uppercase margin-0'>techniques:</h2>
                            <div className='technique-list-div-song-dialog'>
                                {props.techniques.map((technique) => (
                                    <p key={technique}>{technique}</p>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default SongDialogue;