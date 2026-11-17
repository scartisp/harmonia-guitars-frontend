import { useState } from "react";

import { X } from "lucide-react";

import SongDetailsDialog from "./detailsDialog/SongDetailsDialog";

const SongDialog = props => {
    const [showContent, setShowContent] = useState('details');
    const showEdit = e => {
        e.preventDefault();
        setShowContent('edit');
    };
    const showDelete = e => {
        e.preventDefault();
        setShowContent('delete');
    };


    return (
        <div className="w3-modal modal" onClick={props.closeDialog}>
            <div
                className="w3-modal-content flex jst-cnt-center body-marginal-padding background-deepest-indigo max-width-500 border-radious-14px" onClick={e => e.stopPropagation()}>
                <div className="w3-container padding-0">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright" onClick={props.closeDialog}>
                        <X color={'var(--brand-cream'} />
                    </span>
                </div>
                {showContent === ('details') ?
                    <SongDetailsDialog
                        title={props.title} image={props.image}
                        artist={props.artist} techniques={props.techniques}
                        ratingCount={props.ratingCount}
                    /> : null
                }
            </div>
        </div>
    )
}

export default SongDialog;