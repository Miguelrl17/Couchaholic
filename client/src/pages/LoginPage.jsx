import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">

                <h1 className="text-3xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto border">
                    <input type="email" placeholder="Your@Email.com" />
                    <input type="password" placeholder="Password" />
                    <button className="primary">Login</button>
                </form>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet? <Link className="underline text-black" to={"/register"}> Register Now</Link>

                    {/* We are on 40 minutes */}

                </div>
            </div>
        </div>
    );
}