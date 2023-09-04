import {User} from 'firebase/auth';
import { FC,createContext, useState } from 'react'

// create context
export const AuthContext = createContext({
    user: User | null,
    isLoading: false,
});

//create provider
interface AuthProviderProps {
    children:React.ReactElements
}
export const AuthProvider: FC<AuthProviderProps>= ({children})
=> {
    const [user,SetUser] = useState <User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const value = {
        user,
        isLoading,
}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
