import React from 'react';
import CancelBtn from '../../../buttons/CancelBtn';
import ConfirmBtn from '../../../buttons/ConfirmBtn';



const PhotoRequest = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
    }
    return(
        <div className="modal-container">
            <div className="modal-content">
                <h1 className="modal-title">Solicitações de fotos</h1>

                <div className="texts-container">
                    <p className="main-text">
                        Gostaria de fazer fotos para as redes sociais?
                    </p>

                    <p className="sub-text">
                        Obs: A equipe entrará em contato assim que possível para
                        agendar sua consultoria!
                    </p>
                </div>

                <div className="buttons-container">
                    <form onSubmit={handleFormSubmit}>
                    <ConfirmBtn>Sim, quero solicitar</ConfirmBtn>
                    <CancelBtn>Cancelar</CancelBtn>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PhotoRequest;