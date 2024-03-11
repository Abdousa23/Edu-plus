'use client'
import React from 'react'
import { useAuth } from '@/context/authContext';

export default function Home() {
    const {auth} = useAuth();
    const user=auth?.user;
  return (
    <div>
        {`hello ${user.username}`}
    </div>
  )
}
