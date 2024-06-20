import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function registerUser(ev){
        ev.preventDefault();
        axios.get('http://localhost:42069/test');
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">

                <h1 className="text-3xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto border" onSubmit={registerUser}>
                    <input type="text" placeholder="Juan Martha" 
                        value={name}
                        onChange={ev => setName(ev.target.value)}/>
                    <input type="email" placeholder="Your@Email.com" 
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}/>
                    <input type="password" placeholder="Password" 
                        value={password}
                        onChange={ev =>setPassword(ev.target.value)}/>
                    <button className="primary">Register</button>
                </form>
                <div className="text-center py-2 text-gray-500">
                    Already a member? <Link className="underline text-black" to={"/login"}> Login Now</Link>

                </div>
            </div>
        </div>
    );
}