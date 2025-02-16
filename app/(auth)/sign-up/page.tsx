"use client"
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const handleClick = async () => {
    setLoading(true);
    const {data, error} = await authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: "/dash"
    }, {
      onRequest: () => {
        setLoading(true);
      },
      onSuccess: () => {
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      }
    })
  }
  return (
   <main>
      <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick}>{loading ? "Loading..." : "Sign Up"}</button>
   </main>
  );
}
