import UserPanelProps from './UserPanelProps';

function ProfessionList() {
    return (
        <>
            <UserPanelProps
                title='Aspirantes'
                image='image'
                name='name'
                last_name='last_name'
                dni='dni'
                email='email'
                phone='phone'
                URL_linkedin='URL_linkedin'
                birthday='birthday'
                sex='sex'
                professions_id='professions_id'
                api='http://localhost:3030/api/applicants'
                data='data'
            />
        </>
    );
};

export default ProfessionList