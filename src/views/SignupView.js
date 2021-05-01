import React, {useState} from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';



function SignupView({history}) {
    const [user, setUser] = useState({
        id:'',
        password:'',
        name:''
    });

    const addUser = () => {
        axios({
            method: 'post',
            url: 'http://3.35.22.137/api/user/signup',
            data: {
                id: user.id,
                password: user.password,
                name: user.name
            }
        })
        .then(()=> history.push('/login'));
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
            name:''
        });
    };

    return (
        <div>
            <Input type={"text"} name={"id"} title={"ID를 입력하세요"} value={user.id} onChange={onChange}/>
            <Input type={"password"} name={"password"} title={"password를 입력하세요"} value={user.password} onChange={onChange}/>
            <Input type={"name"} name={"name"} title={"이름을 입력하세요"} value={user.name} onChange={onChange}/>                
            <Button type={"primary"} title={"완료"} onClick={addUser}/>
            <Button title={"취소"} onClick={()=>onReset()}/>
        </div>
    )
}

export default SignupView
