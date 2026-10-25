import './TopSection.css'
import toggle from './images/Toggle Switch.png'
import { Download } from 'lucide-react';

const Week = () => {
    return (
        <div style={{ padding: '20px ', borderRadius: '18px' }} className="background-indigo width-fit-cnt">
            <ul id="days-ul">
                <li className='selected-day-li'>
                    <p style={{ margin: '0 0 6px 0' }} className='body-txt-font padding-0 uppercase selected-day'>sun</p>
                    <div className='dot-div selected-day-dot'></div>
                </li>
                <li className='selected-day-li'>
                    <p style={{ margin: '0 0 6px 0' }} className='body-txt-font padding-0 uppercase selected-day'>mon</p>
                    <div className='dot-div selected-day-dot'></div>
                </li>
                <li className='unselected-day-li'>
                    <p style={{ margin: '0 0 6px 0' }} className='body-txt-font padding-0 uppercase unselected-day'>tue</p>
                    <div className='dot-div unselected-day-dot'></div>
                </li>
                <li className='selected-day-li'>
                    <p style={{ margin: '0 0 6px 0' }} className='body-txt-font padding-0 uppercase selected-day'>wed</p>
                    <div className='dot-div selected-day-dot'></div>
                </li>
                <li className='selected-day-li'>
                    <p style={{ margin: '0 0 6px 0' }} className='body-txt-font padding-0 uppercase selected-day'>thu</p>
                    <div className='dot-div selected-day-dot'></div>
                </li>
                <li className='unselected-day-li'>
                    <p style={{ margin: '0 0 6px 0' }} className='body-txt-font padding-0 uppercase unselected-day'>fri</p>
                    <div className='dot-div unselected-day-dot'></div>
                </li>
                <li className='selected-day-li'>
                    <p style={{ margin: '0 0 6px 0' }} className='body-txt-font padding-0 uppercase selected-day'>sat</p>
                    <div className='dot-div selected-day-dot'></div>
                </li>
            </ul>
        </div>
    );
};

const TopSection = props => {
    return (
        <section id='new-schedule-top-section' className="border-box background-deepest-indigo marginal-padding section-divider">
            <div id='new-schedule-top-section-container' className="border-box flex row jst-slf-center jst-cnt-spc-between align-items-flex-end width-100 max-width-1300">
                <div id='new-schedule-top-left-div' className="flex flex-column">
                    <h3 className="h-font font-26px txt-cream uppercase ltr-spc-two">{props.title}</h3>
                    <p className="body-txt-font font-14px txt-cream ">{props.description}</p>
                    <Week />
                </div>
                <div id='new-schedule-top-right-div' className='flex flex-column'>
                    <div id='new-schedule-top-right-top-div' className='flex flex-row align-items-center '>
                        <div style={{ marginRight: '8px' }} className='flex flex-column align-items-center'>
                            <h3 style={{ margin: '0 0 6px 0' }} className='h-font font-26px txt-cream uppercase ltr-spc-two'>public</h3>
                            <img src={toggle} />
                        </div>
                        <Download color={'var(--brand-orange'} size={50} />
                    </div>
                    <div className='flex flex-column align-items-center'>
                        <h3 style={{ margin: '0 0 10px 0' }} className='h-font font-26px txt-cream uppercase ltr-spc-two'>total time</h3>
                        <p style={{fontSize: '20px'}} className='body-txt-font txt-cream margin-0'>{props.totalTime}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopSection;