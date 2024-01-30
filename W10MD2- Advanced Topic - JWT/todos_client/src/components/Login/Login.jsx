import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const URL = "http://localhost:8080/login";
        const data = {
            email,
            password
        }
        const settings = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(URL, settings)
        const responseJSON = await response.json();
        if(response.status === 400 || response.status === 404){
            console.log(responseJSON.message)
        }
        else{
            localStorage.setItem('token', responseJSON.token);
            navigate('/dashboard');
        }
        
    }

    return (
        <>
            <h1 className="text-primary"> Login </h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label className="form-label" htmlFor="email">
                        Email:
                    </label>
                    <input className="form-control"
                           id="email"
                           name="email"
                           type="text"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label className="form-label" htmlFor="password">
                        Password:
                    </label>
                    <input className="form-control"
                           id="password"
                           name="password"
                           type="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button className="btn btn-primary">
                    Login
                </button>
            </form>
        </>
    );
}

export default Login;