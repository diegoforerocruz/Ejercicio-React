import React from 'react';
import useForm from '../customHooks/useForm';
import validateForm from '../utils/validateForm';

const SignForm = () => {

    const {handleChange, handleSubmit, errors} = useForm(validateForm);
    console.log(errors)
    return(
        <div className="container">
            <h1>Formulario Reutilizable</h1>
            <form onSubmit={handleSubmit}> 
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">UserName</label>
                    <div className="col-sm-10">
                        <input type="text" name="username" className="form-control" placeholder="Username" onChange={handleChange} id="username"/>{errors.username && <p className="text-danger">{errors.username}</p>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} id="email"/>{errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} id="password"/>{errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="confirm" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="confirmation" className="form-control" placeholder="Confirm Password" onChange={handleChange} id="confirm"/>{errors.confirmation && <p className="text-danger">{errors.confirmation}</p>}
                    </div>
                </div>
                <button className="btn btn-success">Send</button>
            </form>
        </div>
    )
}

export default SignForm;