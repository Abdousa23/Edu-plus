import React from 'react'
import { Alert } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
export default function Success(success:SuccessProps) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        {success.successMessage}
  </Alert>  
  )
}
