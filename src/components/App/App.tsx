import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "../../pages/Home/Home.page";
import {Register} from "../Register/Register";
import "../../sass/main.scss";
import {Login} from '../Login/Login';

export const App = () => (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
);

