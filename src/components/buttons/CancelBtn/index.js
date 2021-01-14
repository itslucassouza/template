import React  from 'react';

import '../styles.scss';

const CancelBtn = ({ children }) => {
    return <button className="button cancel-btn">{children}</button>;
};

export default CancelBtn;
