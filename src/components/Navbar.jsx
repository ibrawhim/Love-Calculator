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
    <Link className="navbar-brand fw-semibold text-light ms-5" to="/" >Mini Budget</Link>
  </div>
</nav>
    </>
  )
}

export default Navbar