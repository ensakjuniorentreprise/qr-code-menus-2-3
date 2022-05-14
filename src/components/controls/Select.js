import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';
import React from 'react'

const Select = (props) => {
  
    const {name, label, value, variant, onChange, options, error = null, fullWidth, ...other} = props;

    return (
        <FormControl 
            variant={variant || 'outlined'}
            fullWidth={fullWidth}     
            {...(error && {error: true} )} >
            <InputLabel >{label}</InputLabel>
            <MuiSelect
                {...other}
                label={label}
                name={name}
                value={value}
                onChange={e => onChange(e)}>
                {
                    options.map(item => <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                }
            </MuiSelect>
            {error && <FormHelperText >{error}</FormHelperText> }
        </FormControl>
    )
}

export default Select