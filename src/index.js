import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Work from './components/Work'
import Kamis from './components/Kamis'
import River from './components/River'
import Gurye from './components/Gurye'
import Iot from './components/IoT'
import Free from './components/Free'
import Kamis2 from './components/Kamis2'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path="/kamis" element={<Kamis />} />
            <Route path="/river" element={<River />} />
            <Route path="/gurye" element={<Gurye />} />
            <Route path="/iot" element={<Iot />} />
            <Route path="/kamis2" element={<Kamis2 />} />
            <Route path="/work" element={<Work />} />
            <Route path="/free" element={<Free />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
