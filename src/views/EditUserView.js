import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

function EditUserView({history}) {
    const [user, setUser] = useState({
        id: '',
        name: '',
        createdAt: '',
    });

    const [reqUser, setReqUser] = useState({
        id: '',
        newPassword: '',
        newPasswordRe: '',
    });

    const changeReqUser = (e) => {
        const {value, name} = e.target;
        setReqUser({
            ...reqUser,
            id: user.id,
            [name]: value
        }); 
    };

    useEffect(() => {
        const url = `http://3.35.22.137/api/user/info?id=${localStorage.getItem('userId')}`;
        const option = {
            withCredentials: true
        };
        axios.get(url, option)
            .then((response) => {
                if(response.status === 200) {
                    const findUser = response.data;
                    setUser({
                        id: findUser.userId,
                        name: findUser.userName,
                        createdAt: findUser.createdAt.substring(0, 10)
                    });
                }
            });
    }, []);

    const onSubmit = () => {
        if(reqUser.newPassword !== reqUser.newPasswordRe) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        const url = 'http://3.35.22.137/api/user/update/password';
        const body = {
            id: reqUser.id,
            newPassword: reqUser.newPassword
        }
        const option = {
            withCredentials: true
        }
        axios.post(url, body, option)
            .then((response) => {
                if(response.data.isSuccess) {
                    history.push('/login');
                } else {
                    alert(response.data.message);
                }
            });
    };

    const onReset = () => {
        setReqUser({
            id:'',
            newPassword:'',
            newPasswordRe:''
        });
    };

    return (
        <div>
            <Input type={"text"} name={"id"} value={user.id} onChange={()=>{}} />
            <Input type={"text"} name={"name"} value={user.name} onChange={()=>{}} />
            <Input type={"text"} name={"createdAt"} value={user.createdAt} onChange={()=>{}} />
            <Input type={"password"} name={"newPassword"} value={reqUser.newPassword} 
                   onChange={changeReqUser} title={"변경할 password를 입력하세요"} />
            <Input type={"password"} name={"newPasswordRe"} value={reqUser.newPasswordRe} 
                   onChange={changeReqUser} title={"변경할 password를 다시한번 입력하세요"} />
            <Button type={"primary"} title={"완료"} onClick={onSubmit} />
            <Button title={"취소"} obClick={onReset} />
        </div>
    )
}

export default EditUserView;
