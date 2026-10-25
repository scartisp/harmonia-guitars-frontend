import SearchSection from "../../components/shared/searchSection/SearchSection";
import MainBody from "../../components/scheduleLibrary/mainBody/MainBody";

const ScheduleLibrary = () => {
    return (
        <section>
            <SearchSection
                searchPillOne='All' searchPillTwo='Schedule name' searchPillThree='Techniques' searchPillFour='Songs'
                typeOne='Technique' filterOne='Palm muting' typeTwo='Technique' filterTwo='Strumming' typeThree='Song' filterThree='Harvest'
            />
            <MainBody /> 
        </section>
    );
};

export default ScheduleLibrary;