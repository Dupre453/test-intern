import React from 'react';
import {Link} from "react-router-dom";
import '../styles/components/_exit-button.scss'

const ExitButton = () => {
    return (
        <div className='header-button'>
            <Link to='/'>
                <button >Выход</button>
            </Link>

        </div>
    );
};

export default ExitButton;