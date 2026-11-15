import './SongLibrary.css'
import SearchSection from "../../components/shared/searchSection/SearchSection";
import MainBody from "../../components/songLibrary/mainBody/MainBody";
import AddItemModal from "../../components/shared/addItemModal/AddItemModal";
import { API_BASE_URL } from '../../config';
import { useState, useEffect } from "react";
import axios from 'axios';
import { X } from 'lucide-react';

const SongLibrary = () => {

    //load things from server
    const [isLoading, setLoading] = useState(true)
    const toggleLoading = () => setLoading(!isLoading);

    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [techniques, setTechniques] = useState([]);
    useEffect(() => {
        const loadItems = async () => {
            //I don't know if I want to keep everything being loaded at the same time if they're not being
            //displayed at the same place (genres and techniques are only in the modal), but this is fine for now
            const [songsRes, genresRes, techniquesRes] = await Promise.all([
                axios.get(`${API_BASE_URL}/api/songs`),
                axios.get(`${API_BASE_URL}/api/genres`),
                axios.get(`${API_BASE_URL}/api/techniques`)
            ]);
            setSongs(songsRes.data);
            setGenres(genresRes.data);
            setTechniques(techniquesRes.data);
            toggleLoading();
        };
        loadItems();
    }, []);

    //add technique to the list of selected techniques
    const [selectedTechniques, setSelectedTechniques] = useState([]);
    const addSelectedTechnique = technique => setSelectedTechniques([...selectedTechniques, technique]);
    const removeSelectedTechnique = technique => setSelectedTechniques(selectedTechniques.filter(t => t !== technique))

    //add song
    const [showAddSongModal, setShowAddSongModal] = useState(false);
    const [addedSongImgSrc, addImage] = useState('');
    const uploadImg = e => addImage(URL.createObjectURL(e.target.files[0]));
    const toggleShowAddSongModal = () => {
        setShowAddSongModal(!showAddSongModal);
        setSelectedTechniques([]);
        addImage('');
    };

    //add a song to songs
    const addSong = song => setSongs([...songs, song]);

    return (
        <section>
            <SearchSection
                searchPillOne='All' searchPillTwo='Song name' searchPillThree='Techniques' searchPillFour='Genres'
                typeOne='Genre' filterOne='Top songs' typeTwo='Technique' filterTwo='Bends'
                typeThree='Song' filterThree='The thrill is Gone' displayAddModal={toggleShowAddSongModal} adding='Song'
            />
            <MainBody isLoading={isLoading} songs={songs} />
            {showAddSongModal &&
                <AddItemModal closeModal={toggleShowAddSongModal} endpoint='songs' addItem={addSong}>
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
                        <select name='genre' required defaultValue=''>
                            <option value='' disabled>Choose a genre</option>
                            {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                        </select>
                    </p>
                    <div >
                        <label className="form-field" htmlFor="techniques">Select up to 5 techniques:</label>
                        <select value='' disabled={selectedTechniques.length >= 5}
                            onChange={e => addSelectedTechnique(e.target.value)}>
                            <option value='' disabled>choose a technique</option>
                            {techniques.map(technique => selectedTechniques.includes(technique) ? null :
                                <option key={technique} value={technique}>{technique}</option>)}
                        </select>
                        <div className='technique-list-div-song-library-modal'>
                            {selectedTechniques.map(technique => (
                                <span key={technique} className='flex align-items-center gap-4px'>
                                    {technique}
                                    <X size={12} className='pointer' onClick={() => removeSelectedTechnique(technique)} />
                                    <input type='hidden' name='techniques' value={technique} />
                                </span>
                            ))}
                        </div>
                    </div>
                    <p>
                        <label className="form-field" htmlFor="link">Youtube Link:</label>
                        <input className="form-field" type="text" name="link" placeholder="youtube link" required />
                    </p>
                    <div>
                        {addedSongImgSrc === '' ? null : <img src={addedSongImgSrc} />}
                        <p className='flex flex-column margin-0'>
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