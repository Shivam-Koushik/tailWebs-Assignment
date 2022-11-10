import React from 'react';
import ReactDOM from 'react-dom/client';
import "./signUp"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './signUp';
import Subjects from './subjects';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
       <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/Subjects" element={<Subjects />} ></Route>
       </Routes>
   </BrowserRouter>
  </React.StrictMode>
);