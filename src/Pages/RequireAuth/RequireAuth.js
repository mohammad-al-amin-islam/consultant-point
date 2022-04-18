import React from 'react';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from "react-router-dom";
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    //reload to login problem solved
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;