 import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();      
        onSubmitHandler(values);
        setValues(initialValues); //clear inputs
    }

    const changeValues = (newValues) => {
        //TODO: 
        setValues(newValues)
    }

    return {
        values, 
        changeHandler,
        onSubmit,
        changeValues
    }
};

