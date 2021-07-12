import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import firebase from 'firebase';

import '../../scss/Auth.scss';
import IPageProps from '../../interfaces/page.interface';
import { SignInWithSocialMedia } from '../../modules/auth/AuthModule';
import logging from '../../config/logging';
import { Providers } from '../../config/firebase';

const SignUp: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const history = useHistory();

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
            .then(result => {
                logging.info(result);
                history.push('/');
            })
            .catch(error => {
                logging.error(error);
                setAuthenticating(false);
                setError(error.message);
            });
    }


    return (
        <div className="AuthLogin">
            <div className="auth-main-container">
                <div className="mb-50">
                    <h1 className="">Welcome</h1>
                    <p className="mb-10 auth-sub-header" >Please SignUp using the options below.</p>
                </div>
                <div className="auth-btn-wrapper">
                    <button
                        title="Sign up with Google"
                        className="def-btn-lg mb-20 google-btn"
                        disabled={authenticating}
                        onClick={() => signInWithSocialMedia(Providers.google)}
                    >
                        <FaGoogle className="pr-5" /> SignUp with Google</button>
                    <button
                        title="Sign up with Facebook"
                        className="def-btn-lg mb-50 fb-btn"
                        disabled={authenticating}
                        onClick={() => signInWithSocialMedia(Providers.facebook)}
                    >
                        <FaFacebookF className="pr-5" /> SignUp with Facebook</button>

                    <p className="mb-10">Already have an Account?</p>
                    <Link className="center-link mb-20" to={`/auth/signup`}>
                        <button title="Proceed to sign in" className="def-btn-lg">SignUp</button>
                    </Link>

                    <Link className="center-link" to={`/`}>
                        <button title="Go back to homepage" className="grey-btn-lg">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
