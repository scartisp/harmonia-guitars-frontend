import TopSection from "../../components/newSchedule/topSection/TopSection";
import MainBody from "../../components/newSchedule/mainBody/MainBody";

const NewSchedule = () => {
    return (
        <section>
            <TopSection title='example schedule' description='This is an example of what a new practice could look like' totalTime='3hr 10min' />
            <MainBody />
        </section>
    );
};

export default NewSchedule;