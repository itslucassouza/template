import React from 'react';

import './styles.scss';

const MainInput = ({name, type}) => {
    return(
        <div className="main-input">
            <label className="main-label"> {name} </label>
            <input type={type} />
        </div>
    )
};

export default MainInput;