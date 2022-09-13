import styled from 'styled-components';
import { useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';

const LoginFormContainer = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    margin: 5rem auto;
    width: 400px;
}

.form {
    background: #252525;
    padding: 10px;
}

h1 {
    text-align: center;
}

.msg,
.frg-msg {
    text-align: center;
    font-size: 14px;
    margin-bottom: 15px;
}

form {
    display: block;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80%;
}

.input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
}

.form-container input {
    height: 30px;
    width: 100%;
}

.frg-msg {
    text-align: left;
}

.form-container button {
    height: 30px;
    width: 100%;
    margin-bottom: 15px;
    border: none;
    color: white;
    background: rgb(19, 43, 159);
    background: linear-gradient(90deg, rgba(19, 43, 159, 1) 0%, rgba(249, 5, 5, 1) 100%);
    cursor: pointer;
}

.loggedIn {
    background: #252525;
    display: block;
    text-align: center;
    padding-top: 50px;
    margin: 10% auto 15% auto;
    width: 500px;
    height: 100px;
    font-size: 24px;
    font-weight: 300;
}

.error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}
`;


const LoginForm = () => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { isLoggedIn, onLogin, loggedInUser, loginUser } = useContext(AuthContext);

    const database = [
        {
            email: "user1",
            password: "test1"
        },
        {
            email: "user2",
            password: "test2"
        }
    ];

    const errors = {
        email: "This user is not registered",
        password: "Invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = document.forms[0];
        const userData = database.find((user) => user.email === email.value);

        if (userData) {
            if (userData.password !== password.value) {
                setErrorMessages({ name: "password", message: errors.password });
            } else {
                setIsSubmitted(true);
                onLogin();
                loginUser(userData);                
            }
        } else {
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className='form-container'>
            <div className='form'>
                <h1>Login</h1>
                <div className='msg'>
                    Please log in using account detail bellow.
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type="text" name="email" required />
                    </div>
                    <div className="input-container">
                        <input type="password" name="password" required />
                        {renderErrorMessage("email")}
                        {renderErrorMessage("password")}
                    </div>
                    <div className='frg-msg'>
                        Forgot your password?
                    </div>
                    <div className="button-container">
                        <button type="submit">Sign In</button>
                    </div>
                    <div className='msg'>
                        Don't have an account? Create an account
                    </div>
                </form>
            </div>
        </div>
    );
    
    return (
        <LoginFormContainer>
            <div>
                {isLoggedIn ? isSubmitted ? <div className='loggedIn'>Welcome back {loggedInUser.email}</div> : <div className='loggedIn'>Welcome back {loggedInUser.email}</div> : renderForm}
            </div>
        </LoginFormContainer>
    );
}



export default LoginForm;
