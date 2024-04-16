import React from 'react'
import Alert from '@mui/material/Alert';
export default function ErrorComponent(error: ErrorProps) {

    return(
        <Alert severity="error">{error.errmessage}</Alert>
    )
}