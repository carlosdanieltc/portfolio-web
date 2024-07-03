import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center md:z-50'>
            <div className="bg-white p-5 rounded-lg">
                <h2>Este es un modal</h2>
                <button onClick={closeModal}>Cerrar Modal</button>
            </div>
        </div>
    );
};

export default Modal;