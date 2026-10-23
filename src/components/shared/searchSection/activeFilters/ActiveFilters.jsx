import {X} from 'lucide-react';
const ActiveFilters = props => {
    return (
        <p style={{padding: '6px 12px', borderRadius: '12px', gap: '6px'}} className='flex flex-row align-items-center margin-0 background-indigo'><span className='txt-orange'>{props.filterType}:</span>{props.filter} <X size={12}/></p>
    );
};

export default ActiveFilters;