import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeScreen from './pages/home/home_screen';
import Sample from './pages/home/home_screen';
import reportWebVitals from './reportWebVitals';
import Sample3 from './pages/home/sample_3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomeScreen  /> */}
    {/* <Sample /> */}
    <Sample3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
