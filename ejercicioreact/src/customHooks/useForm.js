import { useState } from "react"


const useForm = (validateForm) => {

    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmation:""
    })

    const handleChange = (evt) => {
        setValues({
            ...values, 
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setErrors(validateForm(values))
        if(errors.length === 0){
            console.log(values)
        }
        
    }

    return {handleChange, handleSubmit, errors};
}

export default useForm;