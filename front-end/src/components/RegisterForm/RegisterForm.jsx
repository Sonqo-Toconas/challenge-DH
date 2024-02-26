import RegisterFormProps from './RegisterFormProps';

function RegisterForm() {
    return (
        <>
            <RegisterFormProps
                title='Completa el formulario'
                image='image'
                name='name'
                lastName='lastName'
                profession='professions'
                link='/aspirantes/'
                linkId='id'
                api='http://localhost:3030/api/applicants'
                data='data'
            />
        </>
    );
};

export default RegisterForm