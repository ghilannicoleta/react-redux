import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const element = e.target
        setLoginValues({ ...loginValues, [element.name]: element.value });
    }


    function handleLoginonOnSubmit(e) {
        e.preventDefault();

        const params = new URLSearchParams();

        params.set("email", loginValues.email);
        params.set("password", loginValues.password);

        fetch(`http://localhost:3004/users?${params}`)
            .then((response) => response.json())
            .then((data) => {
                let user = data[0]

                localStorage.setItem('user', JSON.stringify({
                    'email': user.email,
                    'id': user.id,
                    'name': user.name
                }))
                navigate('/')
            })

    }

    return (
        <div className="m-auto w-[80%] mt-60 mb-32">

            <div className="text-3xl text-center w-full font-bold mb-8">
                Login
            </div>

            <div className="w-[45%] border border-white rounded-2xl m-auto">

                <h1 className="text-3xl text-center  mt-5 mb-5">
                    Returning Customers
                </h1>

                <form className="w-max m-auto"
                    onSubmit={handleLoginonOnSubmit}>
                    <input className="block w-[350px] p-2 mb-6 bg-while text-black  rounded-md"
                        onChange={handleInputChange}
                        value={loginValues.email}
                        name="email"
                        type="email"
                        placeholder="Email">
                    </input>

                    <input className="block  w-[350px] p-2 bg-white text-black rounded-md"
                        onChange={handleInputChange}
                        value={loginValues.password}
                        name="password"
                        type="password"
                        placeholder="Password">
                    </input>

                    <button className="w-full mt-5 mb-4 h-[45px] text-xl text-center rounded-md text-black bg-yellow-400 font-bold">
                        Login
                    </button>

                    <div className="text-sm text-center">
                        -------------Create an account?------------
                    </div>

                    {<Link to={'/registration'}>
                        <button
                            type="button"
                            className="w-full  mb-12 h-[45px]  text-xl text-center rounded-md font-bold text-black bg-white ">
                            Register
                        </button>
                    </Link>}


                </form>

            </div>
        </div>

    )

}
export default LoginPage
