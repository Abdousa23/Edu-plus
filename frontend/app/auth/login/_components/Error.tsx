import React from 'react'
import Alert from '@mui/material/Alert';
type ErrorProps = {
    errmessage: string,
}
export default function ErrorComponent(error: ErrorProps) {

    return(
        <Alert severity="error">{error.errmessage}</Alert>
    )
}
