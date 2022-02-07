import React from 'react';
import Logo from "../kobitlogo.png";

const Navbar = () => {
    return(
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" width="40" height="40" className="d-inline-block align-text-top"/>
          Konumsal Bilgi Topluluğu
        </a>
        <a href="/index.php" target="_blank">
          <button className="btn" ><strong>Kayıt Ol</strong></button> 
        </a>
      </div>
    </nav>
    )
};

export default Navbar