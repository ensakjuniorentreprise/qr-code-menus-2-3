import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root': {
            color:'#f3b33d',
            fontWeight:'bolder',
            fontSize:'1.2rem'
        }
    }
}));

const Input = (props) => {

    const {name, label, value, variant, onChange, error = null, ...other} = props;
    const classes = useStyles();

    return (
        <TextField 
            variant={variant || 'outlined'}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            className={classes.adornmentText}
            {...other}
            {...(error && {error: true, helperText: error})}
        />
    )
}

export default Input