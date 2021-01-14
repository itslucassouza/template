import React from 'react';

import '../styles.scss';

const ConfirmBtn = ({ children }) => {
    return <button className="button confirm-btn">{children}</button>;
};

export default ConfirmBtn;
