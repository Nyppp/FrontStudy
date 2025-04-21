function Login({setIsLoggedIn}){
    const handleLogin = ()=> {
        setIsLoggedIn(true);
    };

    return(
        <div>
            <h2>로그인 페이지</h2>
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

export default Login;