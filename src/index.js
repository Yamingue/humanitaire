import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Admin from './pages/admin';
import reportWebVitals from './reportWebVitals';
import Mission from './pages/admin/Mission'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Activity from './pages/admin/Activity';
import Informtion from './pages/admin/Information';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/mission' element={<Mission />} />
        <Route path='/admin/activite' element={<Activity />} />
        <Route path='/admin/setting' element={<Informtion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
