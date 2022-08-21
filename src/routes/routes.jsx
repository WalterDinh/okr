import { lazy } from 'react';
import withErrorBoundary from 'components/HOCs/withErrorBoundary';
import { RouteBase } from 'constants/routeUrl';

const HomePage = lazy(() => import('views/Home'));
const Dashboard = lazy(() => import('views/Dashboard'));
const Page404 = lazy(() => import('views/Page404'));
const Checkin = lazy(() => import('views/Checkin'));
const CFRs = lazy(() => import('views/CFRs'));
const Feedback = lazy(() => import('views/Feedback'));
const Recognition = lazy(() => import('views/Recognition'));
const Setting = lazy(() => import('views/Setting'));
const EmployeeManager = lazy(() => import('views/EmployeeManager'));

//* For secured route
const routes = [
  { path: RouteBase.Home, exact: true, name: 'Home', component: withErrorBoundary(HomePage) },
  { path: RouteBase.Checkin, component: withErrorBoundary(Checkin) },

  { path: RouteBase.Dashboard, name: 'Dashboard', component: withErrorBoundary(Dashboard) },
  { path: RouteBase.CFRs, exact: true, name: 'CFRs', component: withErrorBoundary(CFRs) },
  { path: RouteBase.Feedback, exact: true, name: 'Feedback', component: withErrorBoundary(Feedback) },
  { path: RouteBase.Recognition, exact: true, name: 'Recognition', component: withErrorBoundary(Recognition) },

  { path: RouteBase.Setting, exact: true, name: 'Setting', component: withErrorBoundary(Setting) },
  {
    path: RouteBase.EmployeeManager,
    exact: true,
    name: 'EmployeeManager',
    component: withErrorBoundary(EmployeeManager),
  },

  { name: '404', component: withErrorBoundary(Page404) },
];

export default routes;
