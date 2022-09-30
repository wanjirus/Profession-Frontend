import React from 'react';
import { Navigate } from 'react-router';
import NotFound from './pages/NotFound';
import Register from './pages/AuthPage/Register';
import Login from './pages/AuthPage/Login';
// import ResponsiveAppBar from './Component/Nav';
//import HomePage from './pages/LandingPage/HomePage';
import DashboardLayout from './Component/DashboardLayout';
import MainLayout from './Component/MainLayout';
import HomePage from './pages/LandingPage/HomePage';
import Politics from './Component/Politics';
import Sports from './Component/Sports';
import Account from './pages/Account';
import PropertiesList from './pages/PropertiesList';
import { PropertyFeed } from './pages';

const routes = [ 
    {
        path: 'app',
        element: <DashboardLayout />,
        children: [
          { path: 'account', element: <Account /> },
          { path: 'properties', element: <PropertiesList /> },
          { path: 'sports', element: <Sports /> },
          { path: 'politics', element: <Politics /> },

          {path: '*', element: <Navigate to="/404" /> }
        ] 
    },    {
    path: '/',
     element: <MainLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'login', element: <Login /> },
      { path: 'properties', element: <PropertyFeed /> },
      { path: 'register', element: <Register /> },
      { path: '/404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/home" /> },
      { path: '*', element: <Navigate to="404" /> }
        ]
    },
];

export default routes;