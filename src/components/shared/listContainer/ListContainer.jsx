import './ListContainer.css'
import { useState } from 'react';

const ListContainer = ({ children, title }) => {
    //toggle collapsed
    const [isCollapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!isCollapsed);
    }

    return (
        <div style={{ padding: '18px 20px 60px 20px', borderRadius: '18px' }} className='border-box background-indigo-deep jst-slf-center width-100 max-width-1300'>
            <p className="list-container-title flex jst-cnt-spc-between align-items-center margin-0">
                <span style={{ paddingRight: '10px' }} className="h-font font-46px txt-cream uppercase">{title}</span>
                <span style={{ whiteSpace: 'nowrap', padding: '5px', borderRadius: '5px' }} className="body-txt-font font-15px txt-indigo-deep background-orange pointer" onClick={toggleCollapsed}>Expand List</span>
            </p>
            <div className={`card-grid-div ${isCollapsed ? 'list-collapsed': ''}`}>
                {children}
            </div>
        </div>
    );
};

export default ListContainer;