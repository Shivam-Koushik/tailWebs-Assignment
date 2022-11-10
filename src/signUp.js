import React,{useState} from 'react'
import './signup.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";
const baseURL = "http://localhost:3001/signUp";

function SignUp() {
    
    const [firstname , setFirstname] = useState("");
    const [lastname , setLastname] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [isError, setIsError] = useState("")
    const [response, setResponse] = useState("")
    const [limit , setLimit] = useState("true")
    const nav = useNavigate()

    const submit = async(e)=>{
      e.preventDefault()
      try{
         let user = await axios.post(baseURL, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        })
        console.log(user.data.data._id)
        localStorage.setItem("_id",user.data.data._id)

        setResponse("Success");
        nav("/Subjects"); 
       
       }catch(err){
          console.log(err.response.data.msg)  
          setTimeout(() => {
              setLimit(false)
          }, 3000); 
          setIsError(err.response.data.msg) 
          setLimit(true)
       }
       
    }

  return (
    <div className="form">
             {limit && isError!=="" &&
                <div className="alert">
                  <strong>{isError}</strong>
                </div>
              }
             {response !== "" &&
                <div className="success">
                  <strong>{response}</strong>
                </div>
              }
      <div className='title'>Login</div>
      <div className="form-body">
        <div className="username">
            <label className="form__label" htmlFor="firstName">First Name :- </label>
            <input className="form__input" type="text" name="firstName" placeholder="First Name" value={firstname} onChange={(event) => setFirstname(event.target.value)}/>
        </div>
        <div className="lastname">
            <label className="form__label" htmlFor="lastName">Last Name :- </label>
            <input  type="text" name="lastName"  className="form__input"placeholder="LastName" value={lastname} onChange={(event) => setLastname(event.target.value)}/>
        </div>
        <div className="email">
            <label className="form__label" htmlFor="email">Email :- </label>
            <input  type="email" name="email" className="form__input" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="password">
            <label className="form__label" htmlFor="password">Password :- </label>
            <input className="form__input" type="password"  name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">Confirm Password :- </label>
            <input className="form__input" type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
        </div>
    </div>
    <div className="footer">
        <button type="submit" className="btn" onClick={submit}>Login</button>
    </div>
</div>      
  )
}
        
export default SignUp;
