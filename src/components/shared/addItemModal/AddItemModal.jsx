import './AddItemModal.css'
import { API_BASE_URL } from '../../../config';
import { X } from 'lucide-react';
import { useState } from 'react';

const AddItemModal = ({ closeModal, endpoint, addItem, children }) => {
    const [result, setResult] = useState('');

    const addItemToServer = async(e) => {
        e.preventDefault();
        setResult('Sending...');
        const formData = new FormData(e.target);

        const response = await fetch(`${API_BASE_URL}/api/${endpoint}`,
            {
                'method': 'POST',
                'body': formData
            }
        );
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (response.status === 200) {
            const newSong = await response.json()
            addItem(newSong);
            setResult('item added');
            await new Promise(resolve => setTimeout(resolve, 1000));
            closeModal();
        } else {
            setResult('error adding item');
        }
    }
    
    return (
        <div className='w3-modal modal' onClick={closeModal}>
            <div
                className="w3-modal-content flex jst-cnt-center body-marginal-padding background-deepest-indigo max-width-500 border-radious-14px" onClick={e => e.stopPropagation()}>
                <div className="w3-container padding-0">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright" onClick={closeModal}>
                        <X color={'var(--brand-cream)'} />
                    </span>
                </div>
                <form id='add-item-form' onSubmit={addItemToServer}>
                    {children}
                    <p style={{ marginTop: '5px' }}><button className='form-field form-send-button pointer' type='submit'>Add Song</button></p>
                    <p id='form-result' className='form-field' >{result}</p>
                </form>

            </div>

        </div>
    );
};

export default AddItemModal