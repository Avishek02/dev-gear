"use client";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@devstack.com" && password === "admin123") {
      Cookies.set('auth_token', 'true', { expires: 1 });
      router.push('/add-item');
    } else {
      alert("Invalid Credentials! Use: admin@devstack.com / admin123");
    }
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="card w-96 bg-base-100 shadow-2xl border border-base-300 p-8">
        <form onSubmit={handleLogin}>
          <h2 className="text-3xl font-black mb-6 text-center">Admin Login</h2>
          <div className="form-control gap-4">
            <input type="email" placeholder="Email" className="input input-bordered" onChange={(e)=>setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="input input-bordered" onChange={(e)=>setPassword(e.target.value)} required />
            <button className="btn btn-primary w-full mt-4">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}