import React from 'react';

import Column from '../../components/Column';
// import ContentWrapper from '../../components/ContentWrapper';
import CustomInput from '../../components/CustomInput';

import CustomTextArea from '../../components/CustomTextArea';


import './styles.scss';

const Technology = () => {
    const teste = 'algumacoisa'
    return(
        <div className="page-container">
            <div className="page-content">
                <Column columnTitle="T.I" columnSubTitle="Solicitações de Serviço" textCenter>
                    
                    <div className="responsive-container">
                        <CustomInput name="Nome" type="text" /> 
                        <CustomInput name="Gestor" type="password"/>
                        <CustomInput name="E-mail" type="text"/>

                        <CustomTextArea />

                    </div>

                </Column>
            </div>
        </div>
    )
};

export default Technology;
