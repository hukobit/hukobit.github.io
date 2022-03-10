import EventsPage from './Pages/EventsPage';
import MembersPage from './Pages/MembersPage';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import logo from "../src/Local-Logo/Cırcular.jpg";

function App() {
  return (
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <div className="navbar-brand " href="#">
                    <img src= {logo} alt="" width="100" height="100" className="rounded mx-auto d-inline-block"/>
                        <h3 className='d-inline-block'>
                            Konumsal Bilgi Topluluğu
                        </h3>
                  </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end vertical-align: super;" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center ">

                        <div className='nav-link'>
                            <button type="button" className="btn bg-transparent">
                                <Link to='/' style={{ textDecoration: 'none' , color: "black" , textAlign: "center" ,}}>Ana sayfa</Link>
                            </button>
                        </div>
                          
                        <div className='nav-link '>
                            <button type="button" className="btn bg-transparent">
                                <Link to='Members' style={{ textDecoration: 'none'  , color: "black"}}>Üyeler</Link>
                            </button>
                        </div>

                        <div className='nav-link' style={{ verticalAlign: "center"  , color: "blue"}}>
                            <button type="button" className="btn bg-transparent">
                                <Link to='Events' style={{ textDecoration: 'none' , color: "black"}}>Etkinlikler</Link>
                            </button>
                        </div>

                        <div className='nav-link' style={{ textDecoration: 'none' , color: "black"}}>
                            <a className="btn btn-outline-primary" href="https://forms.gle/FKpwvgjgxDMKqLvWA" role="button">Üye Ol</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='Members' element={<MembersPage/>}></Route>
          <Route path='Events' element={<EventsPage/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
    </BrowserRouter>);}

export default App

