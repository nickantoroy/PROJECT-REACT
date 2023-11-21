import { useState } from "react";
import './Login-Register.css'
export const Login = (prop) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container smooth-zoom">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="enter your password" id="password" name="password" />
                <button className='submit-btn' type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => prop.onFormSwitch('register')}>Don&apos;t have an account? Register here.</button>
        </div>
    )
}