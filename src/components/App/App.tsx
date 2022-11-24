import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "../../pages/Home/Home.page";
import {Register} from "../SignForm/Register/Register";
import {Login} from '../SignForm/Login/Login';
import {Account} from "../Account/Account";
import "../../sass/main.scss";

export const App = () => (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Account/>}/>
    </Routes>
);

