import React, { useState } from 'react';
import Field from './field'

const FormFields = () => {
    const [fields] = useState([
        {
            tipo: "text",
            nombre: "username",
            placeHolder: "Username",
        },
        {
            tipo: "email",
            nombre: "email",
            placeHolder: "Email",
        },
        {
            tipo: "password",
            nombre: "password",
            placeHolder: "Password",
        },
        {
            tipo: "password",
            nombre: "confirmation",
            placeHolder: "Confirm Password",
        },
    ])

    return(
        <div>    
            <div className="form-group row">
                {fields.map(field => (
                    <div>
                        <Field f={field}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default FormFields;