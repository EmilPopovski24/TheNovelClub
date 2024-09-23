 import { useState } from "react";

export const useForm = (formValues, onSubmitHandler) => {
    const [values, setValues] = useState(formValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault() ;
        onSubmitHandler(values)
    }

    return {
        values, 
        changeHandler,
        onSubmit 
    }
};

