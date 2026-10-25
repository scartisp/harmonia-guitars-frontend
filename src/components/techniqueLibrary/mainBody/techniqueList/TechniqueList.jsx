import './TechniqueList.css'

const TechniqueList = props => {
    return (
        <div>
            <h3 className="technique-list-header h-font font-26px txt-cream margin-0 weight-500 uppercase">{props.title}</h3>
            <div style={{ gap: '16px 55px' }} className='flex flex-row wrap'>
                {props.content}
            </div>
        </div>
    );
};

export default TechniqueList;