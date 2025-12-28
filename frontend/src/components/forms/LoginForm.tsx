'use client';

import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';
import Button from '../Button';
import Input from '../Input';

export default function LoginForm() {
    const { setAuth } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const data = await login({ email, password });
            setAuth(data);
            localStorage.setItem('token', data.access_token);
            router.push('/');
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    return (
        <div>
            <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}