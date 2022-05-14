import { IconButton, useTheme } from '@mui/material';
import React from 'react'

const IconBtn = (props) => {
    const theme = useTheme();
    const {variant, children, onClick, ...other} = props;

    return (
        <IconButton
            {...other}
            size='small'
            variant={variant || 'text'}
            onClick={onClick}
        >
            {children}
        </IconButton>
    )
}

export default IconBtn