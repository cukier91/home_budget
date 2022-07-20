import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'src/context/AuthContext';

export function Protected({ children }: { children: React.ReactChild }) {
	const { userId } = useAuthContext();
	if (!userId) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
}
