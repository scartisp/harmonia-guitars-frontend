import '../SongDialogue.css';
import { SquarePen, Trash } from 'lucide-react';

const SongDetailsDialog = props => {

    return (
        <div id="song-dialog-content" className='flex flex-column max-width-400'>
            <div className='flex flex-row align-items-center jst-cnt-spc-between'>
                <h2 className='h-font font-26px txt-cream uppercas margin-0'>{props.title}</h2>
                <span className='flex flex-row gap-8px'>
                    <SquarePen className='pointer' color='var(--brand-cream' />
                    <Trash className='pointer' color='var(--brand-cream' />
                </span>
            </div>
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
                    <h2 className='h-font font-26px txt-cream uppercase margin-0'>number of ratings:</h2>
                    <h3 className='h-font font-22px txt-cream padding-left-10 margin-0'>{props.ratingCount}</h3>
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
    )
};

export default SongDetailsDialog;