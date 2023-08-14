import React from 'react'

let bgNavbar = {
  backgroundColor: '#6b533b',
  height: '10vh'
}

const Navbar = () => {
  return (
    <>

<nav className="navbar" style={bgNavbar}>
  <div className="container-fluid">
    <a className="navbar-brand fw-semibold text-light ms-5" href="#" >Mini Budget</a>
  </div>
</nav>
    </>
  )
}

export default Navbar