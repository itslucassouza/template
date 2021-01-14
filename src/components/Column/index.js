import React from 'react';

import ContentWrapper from '../ContentWrapper';

import './styles.scss';

const Column = ({ children, columnTitle }) => {
    return (
        <ContentWrapper column>
            <div className="column-container">
                <h1 className="column-title">{columnTitle}</h1>

                <div className="cards-container">{children}</div>
            </div>
        </ContentWrapper>
    );
};

export default Column;
