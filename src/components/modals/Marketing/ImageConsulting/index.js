import React from 'react';

import CancelBtn from '../../../buttons/CancelBtn';
import ConfirmBtn from '../../../buttons/ConfirmBtn';

import './styles.scss';

const ImageConsulting = () => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <h1 className="modal-title">Consultoria de imagem</h1>

                <div className="texts-container">
                    <p className="main-text">
                        Deseja efetuar um estudo da sua imagem junto a equipe de
                        marketing?
                    </p>

                    <p className="sub-text">
                        Obs: A equipe entrará em contato assim que possível para
                        agendar sua consultoria!
                    </p>
                </div>

                <div className="buttons-container">
                    <ConfirmBtn>Sim, quero solicitar</ConfirmBtn>
                    <CancelBtn>Cancelar</CancelBtn>
                </div>
            </div>
        </div>
    );
};

export default ImageConsulting;
