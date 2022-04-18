import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'
import Loading from '../Loading/Loading';


const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user, navigate, from]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='mt-3 d-flex align-items-center justify-content-center'>
                <div className='border w-25'></div> <p className='mx-4 my-2'>Or Log in With</p> <div className='border w-25'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='d-block fs-5 w-25 mx-auto p-3 border-0 my-2'>
                <img height='30px' className='me-3' src={google} alt="" />
                Sign In
            </button>
            <p className='text-center'>Already a member?<Link className='text-decoration-none' to='/login'>Login here</Link> </p>
        </div>
    );
};

export default SocialSignIn;