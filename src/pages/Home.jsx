import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/Back.jpg'

let myDiv = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url(/src/images/Back.jpg)',
  backgroundSize: '100vw 100vh',
}

let myLink = {
  backgroundColor: '#6b533b',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '8px 8px 10px 8px',
  borderRadius: '8px',
}

const Home = () => {
  return (
    <>
    <div style={myDiv}>
      <div style={myLink} >
         <Link className='text-decoration-none text-light' to="/addbudget">Click here to add budget</Link> 
      </div>
    </div>


    </>
  )
}

export default Home