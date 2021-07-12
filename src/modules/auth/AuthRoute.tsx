import React, { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
interface IAuthRouteProps {
    children: ReactNode;
    // any other props that come into the component
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;

    if (!auth.currentUser) {
        logging.warn('No user detected, redirecting');
        return <Redirect to="/auth/login" />;
    }

    return (
        <div>{children}</div>
    );
}

export default AuthRoute;