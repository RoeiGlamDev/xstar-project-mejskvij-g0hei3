import React from 'react';
import './Modal.css'; // Importing CSS for styling

interface ModalProps {
    isOpen: boolean; // To control modal visibility
    onClose: () => void; // Function to close the modal
    title: string; // Title of the modal
    children: React.ReactNode; // Content of the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; // Return null if modal is not open

    return (
        <div className="modal-overlay"> {/* Overlay for modal */}
            <div className="modal-container"> {/* Modal container */}
                <div className="modal-header"> {/* Header section */}
                    <h2>{title}</h2>
                    <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
                </div>
                <div className="modal-content"> {/* Content section */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal; // Exporting the Modal component