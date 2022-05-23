import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"

export const RegistrationPage = () => {

    const navigate = useNavigate()

    // const [userCreated, setUserCreated] = useState(false)
    const [registerValues, setRegisterValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleInputChange = (e) => {
        const element = e.target

        setRegisterValues({ ...registerValues, [element.name]: element.value })
    }


    function handleRegistrationOnSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3004/users", {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registerValues),
        })
            .then((response) => {
                console.log(response)
                // setUserCreated(response.ok)
                navigate('/login')
            })
            .catch(() => {alert('Registration failed')})
    }


    return (

        <div className="m-auto w-[80%] mt-60 mb-32">
            <Link to={`/login`}>
                <span className="text-xl ml-[200px] text-blue-500">
                    ⬅️ Back to sign
                </span>
            </Link>
            <div className="text-3xl text-center w-full font-bold mb-8">
                Create an account
            </div>
            <div className="w-[45%] border border-white rounded-2xl m-auto">
                <h1 className="text-3xl text-center  mt-5 mb-5">
                    Registration
                </h1>
                <form className="w-max m-auto"
                    onSubmit={handleRegistrationOnSubmit}>
                    <input className="block w-[350px] p-2 mb-6 bg-while text-black  rounded-md"
                        onChange={handleInputChange}
                        value={registerValues.name}
                        name="name"
                        type="text"
                        placeholder="Name"
                    >
                    </input>
                    <input className="block w-[350px] p-2 mb-6 bg-while text-black  rounded-md"
                        onChange={handleInputChange}
                        value={registerValues.email}
                        name="email"
                        type="email"
                        placeholder="Email"
                    >
                    </input>
                    <input className="block  w-[350px] p-2 mb-6 bg-white text-black rounded-md"
                        onChange={handleInputChange}
                        value={registerValues.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                    >
                    </input>
                    <input className="block  w-[350px] p-2 bg-white text-black rounded-md"
                        onChange={handleInputChange}
                        value={registerValues.confirmPassword}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                    >
                    </input>
                    <button className="w-full mt-5 mb-10 h-[45px] text-xl font-bold text-center rounded-md text-black bg-yellow-400">
                        Send
                    </button>

                </form>

            </div>
        </div>
    )
}

export default RegistrationPage
