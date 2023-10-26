import React from "react";
import ReactDOM  from "react-dom";
import PrimeraApp from "./PrimeraApp";
import { createRoot } from 'react-dom/client';
import './index.css';
const divRoot = document.querySelector('#app');

// ReactDOM.render(<PrimeraApp/>, divRoot);

// REact 18 
const app = document.getElementById('app');
const root = createRoot(app);
root.render(<PrimeraApp/>);