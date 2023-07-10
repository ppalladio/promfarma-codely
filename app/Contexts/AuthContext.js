'use client'
import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	
	// Context const
	const [user, setUser] = useState({ userId: 2 });
	
	return ( 
		<AuthContext.Provider values={user}>{props.children}</AuthContext.Provider>
	);
};
export default AuthContextProvider