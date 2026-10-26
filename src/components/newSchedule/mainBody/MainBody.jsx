import './MainBody.css'
import leper from './images/leper-img.png'
import { Clock, ChevronDown, Plus, GripVertical, Minus, X } from 'lucide-react';

const ScheduleItem = props => {
    return (
        <li className={`scheduled-item ${props.nested ? 'scheduled-item-nested' : ''}`}>
            <GripVertical size={18} className='scheduled-item-grip' />
            {props.img && <img src={props.img} className='scheduled-item-img' />}
            <div className='scheduled-item-description flex flex-column flex-1'>
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
            </div>
            <div style={{ gap: '10px' }} className='flex flex-row wrap align-items-center'>
                <span className={`schedule-tag ${props.type === 'song' ? 'schedule-tag-song' : ''}`}>{props.type}</span>
                <div className='time-stepper'>
                    <Plus color='var(--brand-cream)' size={14} />
                    <span>{props.time}</span>
                    <Minus color='var(--brand-orange)' size={14} />
                </div>
                <X color='var(--brand-cream)' size={14} />
            </div>
        </li>
    );
};

const Day = props => {
    return (
        <li className={`day-li ${props.isOpen ? 'opened-day-li' : ''}`}>
            <div style={{ padding: '20px', gap: '10px 0' }} className='border-box flex flex-row wrap align-items-center '>
                <h3 className='day-title'>{props.day}</h3>
                <p className='body-txt-font font-14px txt-cream margin-0'>
                    {props.techniqueNum > 0 && `${props.techniqueNum} ${props.techniqueNum === 1 ? 'technique' : 'techniques'}`}
                    {props.techniqueNum > 0 && props.songNum > 0 && ' · '}
                    {props.songNum > 0 && `${props.songNum} ${props.songNum === 1 ? 'song' : 'songs'}`}
                </p>
                <div className='day-title-righmost-div flex flex-row align-items-center margin-left-auto'>
                    <p className='day-time'> <Clock color={'var(--brand-cream)'} size={12} />{props.time}</p>
                    <ChevronDown color={props.isOpen ? 'var(--brand-orange)' : 'var(--brand-cream)'} />
                </div>
            </div>

            {props.isOpen && (
                <div className='day-body'>
                    <ul style={{ gap: '12px' }} className='list-style-none margin-0 padding-0 flex flex-column'>
                        {props.children}
                    </ul>
                    <Plus color={'var(--brand-orange)'} size={42} className='align-self-center' />
                </div>
            )}
        </li>
    );
};

const GoalSection = () => {
    return
}

const MainBody = () => {
    return (
        <section className="border-box vt-body-marginal-padding  background-indigo section-divider">
            <ul style={{ gap: '10px' }} className="list-style-none flex flex-column jst-slf-center jst-cnt-center margin-0 padding-0 width-100 max-width-1300">
                <Day day='sun' techniqueNum='2' songNum='1' time='40 min' />
                <Day day='mon' techniqueNum='5' songNum='3' time='1 hr' />
                <Day day='wed' techniqueNum='5' songNum='0' time='1 hr' />
                <Day day='thu' techniqueNum='3' songNum='1' time='30 min' isOpen>
                    <ScheduleItem title='Legato' subtitle='right hand · any · 4/5' type='technique' time='5 min' />
                    <ScheduleItem img={leper} title='The Leper Affinity- Opeth' subtitle='metal' type='song' time='15 min' />
                    <ScheduleItem title='Sweep picking' subtitle='lead, left hand · metal, jazz · 5/5' type='technique' time='15 min' nested/>
                    <ScheduleItem title='syncopation' subtitle='rhythm · any · 3/5' type='technique' time='15 min' nested/>
                </Day>
            </ul>
        </section>
    );
};

export default MainBody;