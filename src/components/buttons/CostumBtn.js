import { Button, useTheme } from '@mui/material'
import React from 'react'

const CostumBtn = (props) => {

    const theme = useTheme();
    const {variant, children, onClick, color, ...other} = props;

    return (
        <Button
            {...other}
            size='larg'
            variant={variant || 'text'}
            onClick={onClick}
            color={color}
            sx={{
                color: theme.palette.mode === 'dark' 
                    ? theme.palette.text.secondary 
                    : theme.palette.text.primary,
                fontSize: theme.typography.subtitle1,
                fontWeight: 'medium',
                textTransform: 'uppercase',
                mr: 2,
                '&:active': {
                    color: theme.palette.mode === 'dark' 
                        ? theme.palette.primary.contrastText
                        : theme.palette.primary.main,
                },
                '&:hover': {
                    color: theme.palette.mode === 'dark' 
                        ? theme.palette.primary.contrastText 
                        : theme.palette.primary.main,
                },
                '& svg': {
                    mr: 0.5
                },
            }}
        >
            {children}
        </Button>
    )
}

export default CostumBtn