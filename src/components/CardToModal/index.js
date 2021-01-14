import React, { useState } from 'react';

import ModalBase from '../modals/ModalBase';

const CardToModal = ({ title, Modal }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal);

    return (
        <>
            <div className="card-container">
                <span onClick={handleShowModal}>{title}</span>
            </div>

            {showModal && (
                <ModalBase Modal={Modal} handleShowModal={handleShowModal} />
            )}
        </>
    );
};

export default CardToModal;
