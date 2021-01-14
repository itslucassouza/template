import React from 'react';

import '../styles.scss';

const ConfirmBtn = ({ children }) => {
    return <button value="abc" name="testando" type="submit" className="button confirm-btn">{children}</button>;
};

export default ConfirmBtn;
