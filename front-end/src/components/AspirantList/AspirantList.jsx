import AspirantListProps from './AspirantListProps';

function AspirantList() {
    return (
        <>
            <AspirantListProps
                title='Aspirantes'
                image='image'
                name='name'
                profession='professions_id'
                api='http://localhost:3030/api/applicants'
                data='data'
            />
        </>
    );
};

export default AspirantList