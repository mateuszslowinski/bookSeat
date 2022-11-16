import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "../../pages/Home/Home.page";
import "../../sass/main.scss";

export const App = () => (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
);

