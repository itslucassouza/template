import React from 'react';

import ContentWrapper from '../ContentWrapper';

import './styles.scss';

const Column = ({ children, columnTitle, columnSubTitle, textCenter }) => {
    return (
        <ContentWrapper column>
            <div className="column-container">
                <h1 className={`column-title ${textCenter && 'text-center'}`} >{columnTitle}</h1>
                {columnSubTitle && <h1 className={`column-subtitle ${textCenter && 'text-center'}`}>{columnSubTitle}</h1>}

                <div className="cards-container">{children}</div>
            </div>
        </ContentWrapper>
    );
};

export default Column;
