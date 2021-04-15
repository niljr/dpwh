import React from 'react';

const Home = React.lazy(() => import('../containers/Home/HomeContainer'));
const Login = React.lazy(() => import('../containers/Login/LoginContainer'));
const NotFound = React.lazy(() => import('../containers/NotFound/NotFoundContainer'));
const Dashboard = React.lazy(() => import('../containers/Dashboard/DashboardContainer'));
const Management = React.lazy(() => import('../containers/ContractManagement/ContractManagementContainer'));
const SuspensionResumption = React.lazy(() => import('../containers/SuspensionResumption/SuspensionResumptionContainer'));
const TimeExtension = React.lazy(() => import('../containers/TimeExtension/TimeExtensionContainer'));
const PotentialVO = React.lazy(() => import('../containers/PotentialVO/PotentialVOContainer'));
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
    component: Management,
    routes: [{
        path: '/contract-management/time-variance/suspension_resumption',
        name: SuspensionResumption,
        component: SuspensionResumption
    }, {
        path: '/contract-management/time-variance/time-extension',
        name: TimeExtension,
        component: TimeExtension
    }, {
        path: '/contract-management/potential-vo',
        name: PotentialVO,
        component: PotentialVO
    }]
}, // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE
{
    path: '*',
    name: NotFound,
    component: NotFound
}];

export default routes;
