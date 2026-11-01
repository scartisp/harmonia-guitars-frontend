import './MainBody.css';
import ListContainer from '../../shared/listContainer/ListContainer';
import SongCard from '../songCard/SongCard';
import leper from './images/leper-img.png'

const MainBody = () => {
    return (
        <section className='border-box vt-body-marginal-padding background-indigo section-divider'>
            <ListContainer title='top songs'
                item1={<SongCard
                    image={leper} genre='metal' title='The Leper Affinity- Opeth' rating='10' technique1='Sweep Picking' technique2='Syncopation' videoId='nKpIwX2P118'
                />}
                item2={<SongCard
                    image={leper} genre='metal' title='The Leper Affinity- Opeth' rating='10' technique1='Sweep Picking' technique2='Syncopation' videoId='LzVVESU4w5c'
                />}
                item3={<SongCard
                    image={leper} genre='metal' title='The Leper Affinity- Opeth' rating='10' technique1='Sweep Picking' technique2='Syncopation' videoId='vo7mYqaMKXA'
                />}
            />
        </section>
    );
};

export default MainBody;