import React from 'react';
import AspirantListProps from '../AspirantList/AspirantListProps';

function BusinessList() {
    return (
        <>
            <AspirantListProps
                title='Lista de empresas'
                image='image'
                name='name'
                profession='description'
                link='/empresa/'
                linkId='id'
                api='http://localhost:3030/api/companies'
                data='data'
            />
        </>
    );
};

export default BusinessList