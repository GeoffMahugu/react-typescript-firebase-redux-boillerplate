import React, { ReactNode, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { auth } from "../../config/firebase";

interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }: IProps) => {
    const [currentUser, setCurrentUser] = useState(null as any);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user: React.SetStateAction<any>) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if (pending) {
        return <Loading />
    }

    return (
        <AuthContext.Provider
            value={currentUser}
        >
            {children}
        </AuthContext.Provider >
    );
};