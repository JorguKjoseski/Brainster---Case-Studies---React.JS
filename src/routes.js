import React from 'react';
import HomePage from './components/HomePage';
import CardDetails from './components/CardDetails';


const routes = {
   '/' : () => <HomePage />,
   '/carddetails/:id' : ({id}) => <CardDetails id={id}/>
};


export default routes;
