'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    auth: any | null;
    setAuth: (auth: any | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [auth, setAuth] = useState<any | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // You might want to validate the token here
            setAuth({ access_token: token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}