import React from 'react';

import Column from '../../components/Column';
import CardToDownload from '../../components/CardToDownload';
import CardToModal from '../../components/CardToModal';
import ImageConsulting from '../../components/modals/Marketing/ImageConsulting';
import PhotoRequest from '../../components/modals/Marketing/PhotoRequest';

import './styles.scss';

const Marketing = () => {
    return (
        <div className="page-container">
            <div className="columns-area">
                <Column columnTitle="Downloads/Materiais">
                    <CardToDownload title="Materiais" link="#" />
                    <CardToDownload title="Logos" link="#" />
                    <CardToDownload
                        title="Apresentação Institucional"
                        link="#"
                    />
                    <CardToDownload title="Apresentação Padrão" link="#" />
                    <CardToDownload title="Apresentação Padrão EWZ" link="#" />
                    <CardToDownload title="Materias XP" link="#" />
                    <CardToDownload title="MIV EWZ" link="#" />
                    <CardToDownload title="MIV GURU" link="#" />
                    <CardToDownload title="Fotos Assessores" link="#" />
                </Column>

                <Column columnTitle="Solicitações">
                    <CardToModal
                        title="Consultoria de imagem"
                        Modal={ImageConsulting}
                    />
                    <CardToModal
                        title="Solicitações de fotos"
                        Modal={PhotoRequest}
                    />
                </Column>
            </div>
        </div>
    );
};

export default Marketing;
