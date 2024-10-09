import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        navigate("/products")
      }

  return (
    <div className='box'>
        
        <div className='poster'>
            <img className='poster1' src="https://i.postimg.cc/kXSGR9ff/bid-welcome-page-1.jpg" alt="React Image" />
        </div>
        
       

        <form className='home__form' onSubmit={handleSubmit}>
            <label htmlFor="username">Enter your username</label>
            <input type="text" name='username' className='home__input' value={userName} onChange={e => setUserName(e.target.value)} required minLength={6}/>
            <button className='home__cta'>SIGN IN</button>
        </form>
    </div>
  )
}

export default Home