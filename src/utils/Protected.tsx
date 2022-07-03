import React from 'react';
import { Navigate } from 'react-router-dom';

export function Protected({ isLoggedIn, children }:{children:any, isLoggedIn:boolean}) {
	if (!isLoggedIn) {
		return <Navigate to="/login" replace />;
	}
    
    return children;
};