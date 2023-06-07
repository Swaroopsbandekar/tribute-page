import React,{useEffect} from 'react'
import img1 from '../images/img-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Navbar() {
useEffect(()=>{
  AOS.init({duration:800});
},[]);

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("menu"); // Replace "navbar" with the ID of your navigation bar element

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
    navbar.style.transition = '.5s ease-in-out'
  }
  
  prevScrollPos = currentScrollPos;
};

 
  return (
   <>
    <nav  id='menu' className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top " >
  <div className="container-fluid " style={{fontSize:'20px'}}>
      <img className='img1' src={img1} alt="img" width="50" height="40"/>
    <a className="navbar-brand"  style={{fontSize:'25px'}} href="/">Tribute Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a rel="noreferrer" className="nav-link " aria-current="page"  href="#About">  <span> About</span>  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Personal-info"> <span> Personal Info</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#Timeline"> <span> Timeline</span></a>
        </li>

      
        
      
        
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
