import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Title from '../components/Title';
import Button from '../components/Button';

function IndexPage({history}) {
    const logout = () => {
        localStorage.removeItem('userId');
        axios({
            method: 'get',
            url: '/api/user/logout',
        })
        .then(()=>{
            localStorage.removeItem('userId');
            history.push('/');
        });
    };

    const userId = localStorage.getItem('userId');
    let loginButton, logoutButton, signupButton;
    if(!userId) {
        loginButton = <Button title={"로그인"}/>;
        signupButton = <Button title={"회원가입"}/>;
    } else {
        logoutButton = <Button title={"로그아웃"} onClick={logout}/>;
    }
    return (
        <div>        
            <Title title={"Hello ArtistsCard"}/>
            <Link to="/editMusic">
                <Button type={"primary"} title={"음악편집"}/>            
            </Link>

            <Link to="/signup">{signupButton}</Link>
            <Link to="/login">{loginButton}</Link>        
            {logoutButton}      
        </div>
    )
}

export default IndexPage
