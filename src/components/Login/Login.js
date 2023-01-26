import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, getDomain } from '../../utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [tenant, setTenant] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/");
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value);setTenant(getDomain(e.target.value))}}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(tenant, email, password)}
                >
                Login
                </button>
                <div>
                <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}

export default Login