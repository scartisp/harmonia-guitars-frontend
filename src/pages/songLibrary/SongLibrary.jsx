import SearchSection from "../../components/shared/searchSection/SearchSection";
import MainBody from "../../components/songLibrary/mainBody/MainBody";
import SearchPill from '../../components/shared/searchSection/searchPill/SearchPill';

const SongLibrary = () => {
    return (
        <section>
            <SearchSection
                searchPillOne='All' searchPillTwo='Song name' searchPillThree='Techniques' searchPillFour='Genres'
                typeOne='Genre' filterOne='Top songs' typeTwo='Technique' filterTwo='Bends' typeThree='Song' filterThree='The thrill is Gone'
            />
            <MainBody />
        </section>
    );
}

export default SongLibrary;