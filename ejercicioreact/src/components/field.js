import React, { useState } from 'react';


const Field = (props) => {
    const [tipo] = useState(props.f.tipo);
    const [nombre] = useState(props.f.nombre); 
    const [placeHolder] = useState(props.f.placeHolder);
    
    return(
                <div className="form-group row">
                    <label htmlFor={nombre} className="col-sm-4 col-form-label">{nombre}</label>
                    <div className="col-sm-8">
                        <input type={tipo} name={nombre} className="form-control" placeholder={placeHolder}id={nombre}/>
                    </div>
                </div>
        
    )
}

export default Field;