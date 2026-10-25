
import TechniqueList from "./techniqueList/TechniqueList";

const TechniquePill = props => {
    return (
        <div style={{ borderRadius: '10px', width: '450px' }} className='flex flex-column background-indigo-deep item-border margin-0 padding-10'>
            <h4 className='body-txt-font font-15px txt-cream weight-600 margin-0 '>{props.title}</h4>
            <p style={{ marginTop: '2px' }} className='body-txt-font font-14px txt-cream margin-0'>
                <span>{props.techniqueType}</span> · <span>{props.techniqueGenre}</span> ·
                <span>{props.techniqueDifficulty}</span>
            </p>
        </div>
    );
}

const MainBody = () => {
    return (
        <section className="border-box width-100 body-marginal-padding section-divider background-indigo">
            <div style={{ gap: '60px' }} className="flex flex-column jst-slf-center width-100 max-width-1300">
                <TechniqueList title='rhythm techniques'
                    content={
                        <>
                            <TechniquePill title='Strumming' techniqueType='Rhythm, Picking hand' techniqueGenre='Rock, Country' techniqueDifficulty='1/5' />
                            <TechniquePill title='Dead notes' techniqueType='Rhythm, Fretting hand' techniqueGenre='Rock' techniqueDifficulty='2/5' />
                        </>
                    }
                />
                
                <TechniqueList title='fretting hand techniques'
                    content={
                        <>
                            <TechniquePill title='open chords' techniqueType='Rhythm, Picking hand' techniqueGenre='Rock, Country, blues' techniqueDifficulty='1/5' />
                            <TechniquePill title='Dead notes' techniqueType='Rhythm, Fretting hand' techniqueGenre='Rock' techniqueDifficulty='2/5' />
                            <TechniquePill title='hammer ons' techniqueType='Lead, Fretting hand' techniqueGenre='Any' techniqueDifficulty='2/5' />
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default MainBody