import React from 'react';
import {Link} from "react-router-dom";
import '../styles/components/_exit-button.scss'


const BackButton = () => {
    return (
        <div className='header-button'>
            <Link to='/home'>
                <button>Назад</button>
            </Link>

        </div>
    );
};

export default BackButton;