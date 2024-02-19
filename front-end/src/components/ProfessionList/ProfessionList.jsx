import ProfessionListProps from "./ProfessionListProps";

function ProfessionList() {
    return (
        <>
            <ProfessionListProps title='Profesiones' titleTable='Listado de Profesiones' api='https://rickandmortyapi.com/api/character' info='results' />
        </>
    );
};

export default ProfessionList