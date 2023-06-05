import React from 'react'
import img1 from '../images/img-1.jpg';


function Navbar() {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid " style={{fontSize:'20px'}}>
      <img className='img1' src={img1} alt="img" width="50" height="40"/>
    <a className="navbar-brand"  style={{fontSize:'25px'}} href="/">Tribute Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a rel="noreferrer" className="nav-link " aria-current="page"  href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Personal-info">Personal Info</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#Timeline">Timeline</a>
        </li>

      
        
      
        
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
