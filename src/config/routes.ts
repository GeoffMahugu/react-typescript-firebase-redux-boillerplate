import IRoute from "../interfaces/route.interface";
import SignUpPage from "../pages/auth/SignUpPage";
import HomePage from "../pages/HomePage";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: false
    },
    {
        path: '/auth/signup',
        exact: true,
        component: SignUpPage,
        name: 'SignUp Page',
        protected: false
    },
];

export default routes;
