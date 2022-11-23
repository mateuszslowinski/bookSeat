import React from 'react';
import {Header} from "../../components/Header/Header";
import {Map} from "../../components/Map/Map";

export const HomePage = () => {
    return (
        <div className='page_container'>
            <Header/>
            <Map />
        </div>
    )
}