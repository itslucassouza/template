import React from 'react';

import './styles.scss';

const CardToDownload = ({ title, link }) => {
    return (
        <div className="card-container">
            <a href={link}>{title}</a>
        </div>
    );
};

export default CardToDownload;
