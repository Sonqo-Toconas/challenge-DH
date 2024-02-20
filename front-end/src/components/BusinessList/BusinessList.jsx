import AspirantListProps from '../AspirantList/AspirantListProps';

function BusinessList() {
    return (
        <>
            <AspirantListProps
                title='Lista de empresas'
                image='image'
                name='name'
                profession='profession'
                api='https://rickandmortyapi.com/api/character'
                data='results'
            />
        </>
    );
};

export default BusinessList