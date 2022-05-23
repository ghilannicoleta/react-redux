import { lazy } from 'react';

const Content = lazy(() => import('../components/content/Content'));
const Category = lazy(() => import('../components/content/Category'));
const LoginPage = lazy(() => import('../components/LoginPage'));
const RegistrationPage = lazy(() => import('../components/RegistrationPage'));
const NotFaoundPage = lazy(() => import('../components/NotFoundPage'))


const routes = [
    {
        path: "/",
        component: Content,
        exact: true
    },
    {
        path: "/products/:id",
        component: Category,
        exact: true
    },
    {
        path: "/login",
        component: LoginPage,
        exact: true
    },
    {
        path: "/registration",
        component: RegistrationPage,
        exact: true
    },
    {
        path: "/notFaoundPage",
        component: NotFaoundPage,
        exact: true
    }
];


export default routes;