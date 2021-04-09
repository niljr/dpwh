import React from 'react';

const Home = React.lazy(() => import('../containers/Home/HomeContainer'));
const Login = React.lazy(() => import('../containers/Login/LoginContainer'));
const NotFound = React.lazy(() => import('../containers/NotFound/NotFoundContainer'));
const Dashboard = React.lazy(() => import('../containers/Dashboard/DashboardContainer'));
const Management = React.lazy(() => import('../containers/ContractManagement/ContractManagementContainer'));
// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
}, {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
}, {
    path: '/dashboard',
    name: Dashboard,
    component: Dashboard
}, {
    path: '/contract-management',
    name: Management,
    component: Management
}, // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE
{
    path: '*',
    name: NotFound,
    component: NotFound
}];

export default routes;
