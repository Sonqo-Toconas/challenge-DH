import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row } from 'react-bootstrap';
import './RegisterForm.css';

function RegisterFormProps() {
    const [errorMessages, setErrorMessages] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const validateImageFile = (value) => {
        const validExtensions = ['jpg', 'jpeg', 'png'];
        const extension = value[0]?.name.split('.').pop().toLowerCase();
        return validExtensions.includes(extension);
    };

    const onSubmit = (validatedData) => {
        const formData = new FormData();
        formData.append('image', validatedData.image[0]);
        Object.keys(validatedData).forEach(key => {
            formData.append(key, validatedData[key]);
        });

        fetch('http://localhost:3030/api/register', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    if (response.status == 201) {
                        setShowSuccessMessage(true);
                        setTimeout(() => {
                            window.location.href = "/aspirantes";
                        }, 3000);
                    }
                    throw new Error('Hubo un problema al realizar la solicitud: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                setErrorMessages(data.formattedErros);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <h2 className='register-title'>Completa el formulario</h2>

            <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-container'>
                    <Row xs={2}>
                        <div className='input-container'>
                            <input className='input-style' type='text' placeholder='Nombre' name='name' {...register('name', { required: true })} />
                            {errors.name && <span className='error-label'>Este campo es requerido</span>}
                        </div>

                        <div className='input-container'>
                            <input className='input-style' type='text' placeholder='Apellido' name='lastName' {...register('lastName', { required: true })} />
                            {errors.lastName && <span className='error-label'>Este campo es requerido</span>}
                        </div>

                        <div className='input-container'>
                            <input className='input-style' type='text' placeholder='DNI' name='dni' {...register('dni', { required: true, pattern: /^[0-9]{8}$/ })} />
                            {errors.dni && <span className='error-label'>Ingresa un DNI válido</span>}
                        </div>

                        <div className='input-container'>
                            <input className='input-style' type='url' placeholder='URL Linkedin' name='URLLinkedin' {...register('URLLinkedin', { required: true })} />
                            {errors.URLLinkedin && <span className='error-label'>Este campo es requerido</span>}
                        </div>

                        <div className='input-container'>
                            <input className='input-style' type='email' placeholder='Email' name='email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <span className='error-label'>Ingresa un email válido</span>}
                        </div>

                        <div className='input-container'>
                            <input className='input-style' type='tel' placeholder='Teléfono' name='phone' {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} />
                            {errors.phone && <span className='error-label'>Ingresa un teléfono válido</span>}
                        </div>

                        <div className='input-container'>
                            <label className='title-label' htmlFor='sex'>Sexo:</label>
                            <select name='sex' {...register('sex', { required: true })}>
                                <option value=''>Elige una opción</option>
                                <option value='Male'>Masculino</option>
                                <option value='Female'>Femenino</option>
                                <option value='Other'>Otro</option>
                            </select>
                            {errors.sex && <span className='error-label'>Este campo es requerido</span>}
                        </div>

                        <div className='input-container'>
                            <label className='title-label' htmlFor='professions'>Profesión:</label>
                            <select name='professions' {...register('professions', { required: true })}>
                                <option value=''>Elige una opción</option>
                                <option value='1'>Administrador</option>
                                <option value='2'>Tecnico de sonido</option>
                                <option value='3'>Linguista</option>
                                <option value='4'>Profesor</option>
                                <option value='5'>Computista</option>
                                <option value='6'>Economista</option>
                            </select>
                            {errors.professions && <span className='error-label'>Este campo es requerido</span>}
                        </div>

                        <div className='input-container'>
                            <label className='title-label' htmlFor='birthday'>Fecha de Nacimiento:</label>
                            <input className='input-style' type='date' name='birthday' {...register('birthday', { required: true })} />
                            {errors.birthday && <span className='error-label'>Este campo es requerido</span>}
                        </div>

                        <div className='input-container'>
                            <label className='title-label' htmlFor='image'>Imagen de usuario:</label>
                            <input className='input-style' type='file' name='image' accept='image/jpg, image/png' {...register('image', {
                                required: true, validate: validateImageFile
                            })} />
                            {errors.image && <span className='error-label'>Seleccione una imagen .jpg, .jpeg o .png</span>}
                        </div>

                        <div className='input-container'>
                            <input className='input-style' type='password' placeholder='Contraseña' name='password' {...register('password', { required: true, minLength: 6 })} />
                            {errors.password && <span className='error-label'>La contraseña debe tener al menos 6 caracteres</span>}
                        </div>

                        <div className='input-container'>
                            <input className='input-style' type='password' placeholder='Confirmar Contraseña' name='passwordConfirm' {...register('passwordConfirm', {
                                required: true,
                                validate: value => value === watch('password') || 'Las contraseñas no coinciden'
                            })} />
                            {errors.passwordConfirm && <span className='error-label'>{errors.passwordConfirm.message}</span>}
                        </div>
                    </Row>

                    <div>
                        {errorMessages.length > 0 && (
                            <div className='error-messege'>
                                <ul>
                                    {errorMessages.map((errorMessage, index) => (
                                        <li key={index}>The following error was found in the form field. "{errorMessage.path}" se encontro el error:
                                            <p>{errorMessage.message}</p>
                                            <p> </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <button className='form-button' type='submit'>{showSuccessMessage ? "Registro Exitoso" : "Registrarse"}</button>
                </div>
            </form >
        </>
    );
};

export default RegisterFormProps