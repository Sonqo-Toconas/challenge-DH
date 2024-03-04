import React from 'react';
import ProfessionListProps from './ProfessionListProps';

function ProfessionList() {
    return (
        <>
            <ProfessionListProps
                title='Profesiones'
                titleTable='Listado de Profesiones'
                name='name'
                api='http://localhost:3030/api/professions'
                data='data'
            />
        </>
    );
};

export default ProfessionList