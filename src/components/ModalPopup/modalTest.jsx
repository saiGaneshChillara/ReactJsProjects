import { useState } from "react";
import Modal from ".";
import './styles.css';



export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }
    function onClose() {
        setShowModalPopup(false);
    }
    return (
        <div className="btn-container">
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal onClose={onClose} />
            }
        </div>
    );
}