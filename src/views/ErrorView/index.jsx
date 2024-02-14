import React from 'react';
import './error.scss';
import Header from '../../components/HeaderComponent';
import imgError from '../../assets/images/error.png'

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className='ErrorPage'>
                <img src={imgError} className='imageError'></img>
                <h1>404 - Page not found</h1>
                <p>Ops, the page you are looking for does not exist.</p>
            </div>
        </>

    );
}

export default ErrorPage;
