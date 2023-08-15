import React from 'react'
import { Link } from 'react-router-dom'

let bgNavbar = {
  backgroundColor: '#6b533b',
  height: '10vh'
}



const Navbar = () => {
  return (
    <>

<nav className="navbar" style={bgNavbar}>
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold text-light ms-lg-5" to="/" >Mini Budget</Link>
    <Link  className="navbar-brand fs-5 text-light ms-5 border p-1 rounded-3" to="/budget" >Go to Budgets</Link>
  </div>
</nav>
    </>
  )
}

export default Navbar