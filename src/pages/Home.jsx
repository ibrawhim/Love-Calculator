import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/Back.jpg'

let myDiv = {
  // position: 'absolute',
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url(/src/images/Back.jpg)',
  backgroundSize: '100vw 100vh',
}

let myLink = {
  backgroundColor: '#6b533b',
  display: 'grid',
  margin: 'auto'
}

const Home = () => {
  return (
    <>
    <div style={myDiv}>
     <Link style={myLink} className='d-flex justify-content-center align-items-center' to="/addbudget">Go to add budget</Link> 
    </div>

    </>
  )
}

export default Home