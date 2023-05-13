import { useState } from "react"
import validation from "./Validation"

const Form = () => {
    const [userData, setUserData] = useState ({
        email: '',
        password: ''
    })

    const  [errors, setErrors] = useState ({})

    const handleChange = (evento) =>{
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        })
        setErrors(validation({
            ...userData,
            [evento.target.name]: evento.target.value
          }))
    }

    return(
        <>
        <form>
            <label>Email</label>
            <input type="email" placeholder="Email" value={userData.email} onChange={handleChange} name = "email"/>
            <label>Password</label>
            <input type="password" placeholder="Password" value={userData.password} onChange={handleChange} name="password" />
            <button>Submit</button>
        </form>
        </>
    )
}
export default Form