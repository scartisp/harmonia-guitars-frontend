import ListContainer from "../../shared/listContainer/ListContainer";
import ScheduleCard from "../scheduleCard/ScheduleCard";
import scheduleImage from '../images/beginner.png'

const MainBody = () => {
    return (
        <section className="border-box width-100 vt-body-marginal-padding background-indigo section-divider">
            <ListContainer
                title='recommended schedule'
                item1={<ScheduleCard
                    image={scheduleImage} title='Beginner Schedule' hours='3'
                    techniqueOne='Open Chords' techniqueTwo='strumming'
                    songOne='Marry Had a Little Lamb'
                />}
                item2={<ScheduleCard
                    image={scheduleImage} title='Beginner Schedule' hours='3'
                    techniqueOne='Open Chords' techniqueTwo='strumming'
                    songOne='Marry Had a Little Lamb'
                />}
                item3={<ScheduleCard
                    image={scheduleImage} title='Beginner Schedule' hours='3'
                    techniqueOne='Open Chords' techniqueTwo='strumming'
                    songOne='Marry Had a Little Lamb'
                />}
            />
        </section>
    );
};

export default MainBody;