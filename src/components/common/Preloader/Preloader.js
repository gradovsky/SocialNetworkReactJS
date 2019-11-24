import React from 'react';
import s from './Preloader.module.css'


const Preloader = (props) => {
    return (
        <div>
            <div className={s.loading}>
                <span>Loading</span>
            </div>

        </div>
    )
};

export default Preloader;