import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import FunctionDemo from './FunctionDemo';
// import GetData from './Questions/api';
// import XYZ from './Questions/inputSum';
import ClassComp from './Component/ClassComponent03';
import Clock from './Questions/Clock';
import Stop from './Questions/stopWatch';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Stop/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
