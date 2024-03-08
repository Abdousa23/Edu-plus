import React from 'react'
import Alert from '@mui/material/Alert';
import type { ErrorProps } from '@/types/index'
export default function ErrorComponent(error: ErrorProps) {

    return(
        <Alert severity="error">{error.errmessage}</Alert>
    )
}
