'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react'
import { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const {data, error} = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/dash" 
        })
        setLoading(false);
    }
  return (
    <div>
      <h1>Sign In</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
      <input type="text" onChange={(e) => setPassword(e.target.value)} name="" id="password" />
      <button onClick={handleClick}>{loading ? "Loading..." : "Sign In"}</button>
    </div>
  )
}

export default SignIn