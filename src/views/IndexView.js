import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Title from '../components/Title';
import Button from '../components/Button';

function IndexPage({history}) {
    const logout = () => {
        const url = 'http://3.35.22.137/api/user/logout';
        const option = {
            withCredentials: true,
        }
        axios.get(url, option)
            .then((response)=>{
                localStorage.removeItem('userId');
                history.push('/');
            });
    };

    const userId = localStorage.getItem('userId');
    let loginButton, logoutButton, signupButton, edditUserButton;
    if(!userId) {
        loginButton = <Button title={"로그인"}/>;
        signupButton = <Button title={"회원가입"}/>;
    } else {
        logoutButton = <Button title={"로그아웃"} onClick={logout}/>;
        edditUserButton = <Button type={"primary"} title={"회원정보수정"}/>;
    }
    return (
        <div>        
            <Title title={"Hello Artists'Card"}/>
            <Link to="/editMusic">
                <Button type={"primary"} title={"음악편집"}/>            
            </Link>
            <Link to="/editUser">{edditUserButton}</Link>

            <Link to="/signup">{signupButton}</Link>
            <Link to="/login">{loginButton}</Link>     
            {logoutButton}
        </div>
    )
}

export default IndexPage;
