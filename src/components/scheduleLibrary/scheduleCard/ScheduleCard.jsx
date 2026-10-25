import './ScheduleCard.css'

const ScheduleCard = props => {
    return (
        <div className='schedule-card flex flex-column background-indigo'>
            <img src={props.image} className='schedule-card-img' />
            <div style={{ paddingInline: '18px', marginTop: '16px' }} className='flex flex-row jst-cnt-spc-between align-items-center'>
                <h3 style={{ fontSize: '24px', maxWidth: '190px', paddingRight: '10px' }} className='h-font txt-cream margin-0 weight-500'>{props.title}</h3>
                <div className='schedule-hour-div flex flex-column align-items-center background-indigo-deep max-width-fit-cnt max-height-fit-cnt'>
                    <p style={{fontSize: '22px'}} className="h-font txt-orange margin-0">{props.hours}</p>
                    <p className=" body-txt-font font-12px txt-cream uppercase margin-0">hours</p>
                </div>
            </div>
            <h4 style={{paddingLeft: '18px', marginTop: '14px', marginBottom: '0'}} className="body-txt-font font-12px txt-cream uppercase weight-400">techniques</h4>
            <div className="schedule-metadata-div">
                <p>{props.techniqueOne}</p>
                <p>{props.techniqueTwo}</p>
            </div>
            <h4 style={{paddingLeft: '18px', marginTop: '14px', marginBottom: '0'}} className="body-txt-font font-12px txt-cream uppercase weight-400">songs</h4>
            <div className="schedule-metadata-div">
                <p>{props.songOne}</p>
            </div>
        </div>
    );
};

export default ScheduleCard