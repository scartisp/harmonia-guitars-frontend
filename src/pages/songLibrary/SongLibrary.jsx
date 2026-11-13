import './SongLibrary.css'
import SearchSection from "../../components/shared/searchSection/SearchSection";
import MainBody from "../../components/songLibrary/mainBody/MainBody";
import AddItemModal from "../../components/shared/addItemModal/AddItemModal";
import { API_BASE_URL } from '../../config';
import { useState, useEffect } from "react";
import axios from 'axios';

const SongLibrary = () => {
    //get songs
    const [isLoading, setLoading] = useState(true)
    const toggleLoading = () => setLoading(!isLoading);

    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const loadSongs = async () => {
            const response = await axios.get(`${API_BASE_URL}/api/songs`);
            setSongs(response.data);
            toggleLoading();
        };
        loadSongs();
    }, []);
    //add a song to songs
    const addSong = song => setSongs([...songs, song])


    //add song
    const [showAddSongModal, setShowAddSongModal] = useState(false);
    const [addedSongImgSrc, addImage] = useState('');
    const uploadImg = e => addImage(URL.createObjectURL(e.target.files[0]));
    const toggleShowAddSongModal = () => {
        setShowAddSongModal(!showAddSongModal)
        addImage('');
    };

    return (
        <section>
            <SearchSection
                searchPillOne='All' searchPillTwo='Song name' searchPillThree='Techniques' searchPillFour='Genres'
                typeOne='Genre' filterOne='Top songs' typeTwo='Technique' filterTwo='Bends'
                typeThree='Song' filterThree='The thrill is Gone' displayAddModal={toggleShowAddSongModal} adding='Song'
            />
            <MainBody isLoading={isLoading} songs={songs} />
            {showAddSongModal &&
                <AddItemModal closeModal={toggleShowAddSongModal} addSong={addSong}>
                    <p>
                        <label className="form-field" htmlFor="title">Song Title:</label>
                        <input className="form-field" type="text" name="title" placeholder="song title" required />
                    </p>
                    <p>
                        <label className="form-field" htmlFor="artist">Artist:</label>
                        <input className="form-field" type="text" name="artist" placeholder="artist" required />
                    </p>
                    <p>
                        <label className="form-field" htmlFor="genre">Genre:</label>
                        <input className="form-field" type="text" name="genre" placeholder="genre" required />
                    </p>
                    <p>
                        <label className="form-field" htmlFor="link">Youtube Link:</label>
                        <input className="form-field" type="text" name="link" placeholder="youtube link" required />
                    </p>
                    <div>
                        {addedSongImgSrc === '' ? <></> : <img src={addedSongImgSrc} />}
                        <p>
                            <label className="form-field" htmlFor="img">Image:</label>
                            <input className="form-field body-txt-font txt-cream" type="file" accept="image/*" name="img"
                                placeholder="add image" onChange={uploadImg} required />
                        </p>
                    </div>
                </AddItemModal>}
        </section>
    );
}

export default SongLibrary;