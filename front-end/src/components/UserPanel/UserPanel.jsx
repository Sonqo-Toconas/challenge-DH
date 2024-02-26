import UserPanelProps from './UserPanelProps';
import { useParams } from 'react-router-dom';

function UserPanel() {
    const { id } = useParams();

    return (
        <>
            <UserPanelProps
                title='Aspirantes'
                image='image'
                name='name'
                lastName='last_name'
                dni='dni'
                email='email'
                phone='phone'
                UrlLinkedin='URL_linkedin'
                birthday='birthday'
                sex='sex'
                professions='professions'
                api={`http://localhost:3030/api/applicant/${id}`}
                data='data'
            />
        </>
    );
};

export default UserPanel