'use client'
import React from 'react'
import { useState } from 'react'
import User from './User'
import StudentRegister from './StudentRegister'
export default function Register() {

    const [role, setRole] = useState("")

  
    const content = (
        <>
        {
            role ===''
            ?<User role={role} setRole={setRole} />
            :<StudentRegister role={role} />
        }
        </>
        )
  
    return content
}
