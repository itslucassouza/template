import React from 'react';

import './styles.scss';

const ContentWrapper = ({ children, column }) => {
    return (
        <div className={`content-wrapper ${column && 'column'}` }>
            {children}
        </div>
        
    );
};

export default ContentWrapper;
