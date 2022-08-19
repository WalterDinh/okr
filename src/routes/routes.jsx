import { lazy } from 'react';
import withErrorBoundary from 'components/HOCs/withErrorBoundary';
import { RouteBase } from 'constants/routeUrl';

const HomePage = lazy(() => import('views/Home'));
const Dashboard = lazy(() => import('views/Dashboard'));
const Page404 = lazy(() => import('views/Page404'));
const Checkin = lazy(() => import('views/Checkin'));
const CFRs = lazy(() => import('views/CFRs'));
const Feedback = lazy(() => import('views/Feedback'));

console.log(RouteBase.Feedback);

//* For secured route
const routes = [
  { path: RouteBase.Checkin, component: withErrorBoundary(Checkin) },
  { path: RouteBase.Dashboard, name: 'Dashboard', component: withErrorBoundary(Dashboard) },
  { path: RouteBase.CFRs, exact: true, name: 'CFRs', component: withErrorBoundary(CFRs) },
  { path: RouteBase.Feedback, exact: true, name: 'Feedback', component: withErrorBoundary(Feedback) },
  { path: RouteBase.Home, exact: true, name: 'Home', component: withErrorBoundary(HomePage) },
  { name: '404', component: withErrorBoundary(Page404) },
];

export default routes;

