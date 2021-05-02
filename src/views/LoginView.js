import React, {useState} from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

function LoginPage({history}) {
    const [user, setUser] = useState({
        id:'',
        password:'',
    });

    const addUser = () => {
        const url = 'http://3.35.22.137/api/user/login';
        const data = {
            id: user.id,
            password: user.password,
        }
        const option = {
            withCredentials: true
        }
        axios.post(url, data, option)
            .then((response)=> {
                if(response.status === 200) {
                    if(response.data.isValid === true) {
                        localStorage.setItem('userId', user.id);
                        history.push('/');
                    } else {
                        alert(response.data.message);
                    }
                } else {
                    console.log('서버 통신 오류');
                }
            });
    };
    
    const onChange = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        });

    }
    
    const onReset = () => {
        setUser({
            id:'',
            password:'',
        });
    };

    return (
        <div>
            <Input type={"text"} name={"id"} title={"ID를 입력하세요"} value={user.id} onChange={onChange}/>
            <Input type={"password"} name={"password"} title={"password를 입력하세요"} value={user.password} onChange={onChange}/>
            <Button type={"primary"} title={"로그인"} onClick={addUser}/>
            <Button title={"취소"} onClick={()=>onReset()}/>
        </div>
    )
}

export default LoginPage
