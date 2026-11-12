import './AddItemModal.css'
import { X } from 'lucide-react';

const AddItemModal = ({ closeModal, children }) => {

    return (
        <div className='w3-modal modal' onClick={closeModal}>
            <div
                className="w3-modal-content flex jst-cnt-center body-marginal-padding background-deepest-indigo max-width-500 border-radious-14px" onClick={e => e.stopPropagation()}>
                <div className="w3-container padding-0">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright" onClick={closeModal}>
                        <X color={'var(--brand-cream'} />
                    </span>
                </div>
                <form id='add-item-form'>
                    {children}
                    <p style={{marginTop: '5px'}}><button className='form-field form-send-button pointer' type='submit'>Add Song</button></p>
                </form>

            </div>

        </div>
    );
};

export default AddItemModal