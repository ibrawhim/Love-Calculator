import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/Back.jpg'

let myLink = {
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url(/src/images/Back.jpg)',
  backgroundSize: '100vw 100vh'
}
const Home = () => {
  return (
    <>
    <div style={myLink}>
     <Link className='d-flex justify-content-center align-items-center top-50' to="/addbudget">Go to add budget</Link> 
    </div>

    </>
  )
}

export default Home