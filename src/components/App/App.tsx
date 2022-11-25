import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "../../pages/Home/Home.page";
import {Register} from "../SignForm/Register/Register";
import {NotFoundPage} from '../../pages/NotFound/NotFound.page';
import {Login} from '../SignForm/Login/Login';
import {Account} from "../Account/Account";
import "../../sass/main.scss";

export const App = () => (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Account/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
);

