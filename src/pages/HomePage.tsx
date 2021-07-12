import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IPageProps from '../interfaces/page.interface';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    const history = useHistory();

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const navigateToSignup = () => {
        history.push('/auth/signup');
    }

    return (
        <div className="HomePage">
            <h1>Welcome To Home</h1>
            <br />
            <button onClick={navigateToSignup}>Signup </button>
        </div>
    );
}

export default HomePage;