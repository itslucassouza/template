import React from 'react';

import './styles.scss';

const ModalWrapper = ({ children, handleShowModal }) => {
    return <div className="modal-wrapper">{children}</div>;
};

export default ModalWrapper;
