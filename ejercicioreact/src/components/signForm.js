import React from 'react';
import useForm from '../customHooks/useForm';
import validateForm from '../utils/validateForm';

const SignForm = () => {

    const {handleChange, handleSubmit, errors} = useForm(validateForm);
    console.log(errors)
    return(
        <div className="container">
            <h1>Formulario Reutilizable</h1>
            <form onSubmit={handleSubmit} id="formularioReutilizable"> 
                
                <button className="btn btn-success">Send</button>
            </form>
        </div>
    )
}

export default SignForm;