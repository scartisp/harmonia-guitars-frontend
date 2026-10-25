import './FilterSection.css'

import FilterType from "./filterType/FilterType";
import FilterItem from "./filterItem/FilterItem";

const FilterDifficulty = () => {
    return (
        <div>
            <FilterItem filterText='Level 1'
                additionalContent={
                    <span style={{ marginLeft: 'auto' }} className="flex flex-row gap-4px">
                        <span className="filled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                    </span>
                }
            />
            <FilterItem filterText='Level 2'
                additionalContent={
                    <span style={{ marginLeft: 'auto' }} className="flex flex-row gap-4px">
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                    </span>
                }
            />
            <FilterItem filterText='Level 3'
                additionalContent={
                    <span style={{ marginLeft: 'auto' }} className="flex flex-row gap-4px">
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                    </span>
                }
            />
            <FilterItem filterText='Level 4'
                additionalContent={
                    <span style={{ marginLeft: 'auto' }} className="flex flex-row gap-4px">
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="unfilled-difficulty"></span>
                    </span>
                }
            />
            <FilterItem filterText='Level 5'
                additionalContent={
                    <span style={{ marginLeft: 'auto' }} className="flex flex-row gap-4px">
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                        <span className="filled-difficulty"></span>
                    </span>
                }
            />
        </div>
    );
}

const FilterGenre = () => {
    return (
        <div>
            <FilterItem filterText='Rock' />
            <FilterItem filterText='Funk' />
            <FilterItem filterText='Blues' />
            <FilterItem filterText='Country' />
            <FilterItem filterText='Metal' />
        </div>
    );
};

const FilterTechniqueType = () => {
    return (
        <div>
            <FilterItem filterText='Rhythm' />
            <FilterItem filterText='Lead' />
            <FilterItem filterText='Fretting Hand' />
            <FilterItem filterText='Picking Hand ' />
            <FilterItem filterText='Chords' />
            
        </div>
    )
}

const FilterSection = () => {
    return (
        <section className="border-box width-100 body-marginal-padding background-deepest-indigo section-divider ">
            <div id='filter-section-container' className="border-box flex wrap jst-slf-center jst-cnt-spc-between width-100 max-width-1300">
                <FilterType title='Difficulty' description='show techniques at these levels' content={<FilterDifficulty />} />
                <FilterType title='Genre' description='show techniques at of these genres' content={<FilterGenre />} />
                <FilterType title='Type' description='show techniques at of these types' content={<FilterTechniqueType />} />
            </div>
        </section>
    );
};

export default FilterSection;