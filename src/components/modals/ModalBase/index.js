import React from 'react';
import { MdClose } from 'react-icons/md';

import ContentWrapper from '../../ContentWrapper';
import ModalWrapper from '../ModalWrapper';

import './styles.scss';

const ModalBase = ({ Modal, handleShowModal }) => {
    return (
        <ModalWrapper>
            <ContentWrapper>
                <div className="modal-base-container">
                    <MdClose className="close-icon" onClick={handleShowModal} />

                    <Modal />
                </div>
            </ContentWrapper>
        </ModalWrapper>
    );
};

export default ModalBase;
