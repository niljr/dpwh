import Home from '../containers/Home/HomeContainer';
import Login from '../containers/Login/LoginContainer';
import NotFound from '../containers/NotFound/NotFoundContainer';
import Dashboard from '../containers/Dashboard/DashboardContainer';
import Management from '../containers/ContractManagement/ContractManagementContainer';
import SuspensionResumption from '../containers/SuspensionResumption/SuspensionResumptionContainer';
import TimeExtension from '../containers/TimeExtension/TimeExtensionContainer';
import PotentialVO from '../containers/PotentialVO/PotentialVOContainer';
import ConstructionSchedule from '../containers/ConstructionSchedule/ConstructionScheduleContainer';
import ConstructionScheduleApproved from '../containers/ConstructionScheduleApproved/ConstructionScheduleApprovedContainer';
import ConstructionScheduleRevised from '../containers/ConstructionScheduleRevised/ConstructionScheduleRevisedContainer';
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
    name: 'Dashboard',
    component: Dashboard
}, {
    path: '/contract-management',
    name: 'Management',
    component: Management,
    routes: [{
        path: '/contract-management/construction-schedule',
        name: 'ConstructionSchedule',
        component: ConstructionSchedule,
        routes: [{
            path: '/contract-management/construction-schedule/approved',
            name: 'ConstructionScheduleApproved',
            component: ConstructionScheduleApproved
        }, {
            path: '/contract-management/construction-schedule/revised',
            name: 'ConstructionScheduleRevised',
            component: ConstructionScheduleRevised
        }]
    }, {
        path: '/contract-management/time-variance/suspension_resumption',
        name: 'SuspensionResumption',
        component: SuspensionResumption
    }, {
        path: '/contract-management/time-variance/time-extension',
        name: 'TimeExtension',
        component: TimeExtension
    }, {
        path: '/contract-management/potential-vo',
        name: 'PotentialVO',
        component: PotentialVO
    }]
}, // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE
{
    path: '*',
    name: 'NotFound',
    component: NotFound
}];

export default routes;
