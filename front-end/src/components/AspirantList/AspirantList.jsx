import AspirantListProps from "./AspirantListProps";

function AspirantList() {
    return (
        <>
            <AspirantListProps title='Aspirantes' api='https://rickandmortyapi.com/api/character' info='results' />
        </>
    );
};

export default AspirantList