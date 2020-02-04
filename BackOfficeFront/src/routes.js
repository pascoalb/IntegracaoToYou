import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const UserData = React.lazy(() => import('./views/Users/UserData'));
const Plans = React.lazy(() => import('./views/Plans'));
const Files = React.lazy(() => import('./views/Files'));
const Network = React.lazy(() => import('./views/Network'));
const Payments = React.lazy(() => import('./views/Plans/Payments'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/userdata', exact: true, name: 'User Details', component: UserData },
  { path: '/plans', exact: true, name: 'Plans', component: Plans },
  { path: '/files', exact: true, name: 'Plans', component: Files },
  { path: '/network', exact: true, name: 'Plans', component: Network },
  { path: '/payments', exact: true, name: 'Plans', component: Payments } 
];

export default routes;
