import PropTypes from 'prop-types'
import React, { Component } from 'react'
//rce type ece for class
import { Link } from 'react-router-dom';

const Navbar=()=> {
//   static propTypes = {}
// constructor(props) {
//   super(props);
//   this.state = {
//     mode: 'light',
//   };
// }

// toggleMode = () => {
//   console.log("welcome to the toogle mode!")
//   this.setState((prevState) => ({
//     mode: prevState.mode === 'light' ? 'dark' : 'light',//iska mtlb hai mode agr initial me light h toh use dark krdo wrna use light hi rehne do
//   }), this.updateStyles);
// };

// updateStyles = () => {
//   const { mode } = this.state;
//   if(mode==='dark')
// {
//   alert("Dark mode enable")
// }
// else
// {
//   alert("Dark mode disable")
// }
//   document.body.style.background = mode === 'dark' ? 'black' : 'white';
//   document.body.style.color = mode === 'dark' ? 'white' : 'black';
// };

// render(props) {
    return (
      <div >
        {/* <nav className={`navbar navbar-expand-lg navbar-${this.mode} bg-${this.mode}`}> */}
        <nav className={`navbar navbar-expand-lg fixed-top navbar-white bg-white`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/bussiness" >Bussiness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/entertainment" >Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general" >General</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/health" >Health</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/science" >Science</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/sports" >Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/test" >test</Link>
        </li>
      </ul>
    <div/>
   <form>
  <div>
    <input className="form-check-input"  type="checkbox" role="switch" />
     
  </div>
  
        
      </form>
    </div>
  </div>
</nav>
      </div>
    )
//  }
}

export default Navbar