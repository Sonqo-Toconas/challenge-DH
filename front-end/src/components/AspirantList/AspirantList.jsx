import React from 'react';
import AspirantListProps from './AspirantListProps';

function AspirantList() {
    return (
        <>
            <AspirantListProps
                title='Aspirantes'
                image='image'
                name='name'
                lastName='last_name'
                profession='professions'
                link='/aspirantes/'
                linkId='id'
                api='http://localhost:3030/api/applicants'
                data='data'
            />
        </>
    );
};

export default AspirantList