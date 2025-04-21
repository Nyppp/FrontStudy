import React, {useState} from 'react';

function CreateAccount({setIsLoggedIn}){
    const [name, setName] = useState('');
    const [userid, setId] = useState('');
    const [userpw, setPw] = useState('');
    const [usermail, setMail] = useState('');
    const [birth, setBirth] = useState('');
    
    const handleLogin = ()=> {
        setIsLoggedIn(true);
    };

    const handleChangeId = (event) => {
        setName(event.target.value);
    };

    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };

    const handleChangedBirth = (event) => {
        setBirth(event.target.value);
    };

    const handleChangedId = (event) => {
        setId(event.target.value);
    };

    const handleChangedPw = (event) => {
        setPw(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <fieldset><legend>회원 가입 공간</legend>
            <label>이름(필수) : 
                <input type="text" value={name} onChange={handleChangeId} placeholder="사용자 이름" required/>
            </label><br></br>
            <label>이메일(필수) : 
                <input type="text" value={usermail} onChange={handleChangeMail} placeholder="이메일 주소" required></input>
            </label>

                <fieldset>
                    <legend>계정 정보</legend>
                    <label>ID:
                        <input type="text" value={userid} onChange={handleChangedId} placeholder="아이디" required></input>
                    </label><br></br>
                    
                    <label>password:
                        <input type="password" value={userpw} onChange={handleChangedPw} placeholder="비밀번호" required></input>
                    </label>
                </fieldset>

            <button type="submit" onClick={handleLogin}>가입</button>
            </fieldset>
        </form>
    );
}

export default CreateAccount;