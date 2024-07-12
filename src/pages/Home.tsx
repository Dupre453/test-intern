import React from 'react';

import Header from "../components/Header";
import StaffList from "../components/StaffList";

import '../styles/pages/_home.scss'

const Home = () => {
    return (
        <div >
            <Header/>
            <div className='content'>
                    <StaffList/>
            </div>
        </div>
    );
};

export default Home;