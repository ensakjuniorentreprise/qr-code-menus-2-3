import React from 'react'

const Form = (props) => {
    const {children, ...other} = props;
  
    return (
        <form noValidate autoComplete='off' {...other}>
            {children}
        </form>
    )
}

export default Form