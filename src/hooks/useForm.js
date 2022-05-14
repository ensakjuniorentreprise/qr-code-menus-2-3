import React from 'react'

const useForm = (defaultValues) => {

    const [values, setValues] = React.useState(defaultValues);
    const [errors, setErrors] = React.useState({});

    const handleValueChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () => {
        setValues(defaultValues);
        setErrors({});
    }

    return ({
        values,
        setValues,
        errors,
        setErrors,
        handleValueChange,
        resetForm
    })
}

export default useForm