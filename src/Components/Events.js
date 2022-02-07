import React, { Component } from 'react';
import Image from "../Grey.png"
import LogoOylaması from "./EventPictures/LogoOylaması.jpg"


export default class Events extends Component {
  render() {
    return  <div className='container'>


                <div>
                    <h1 className='text-center display-1'>
                        ETKİNLİKLER
                        <hr/>
                    </h1>
                </div>

                <div className='row gx-5 justify-content-center'>
                    <div className='col my-5 mx-2 col-md-6 col-lg-4'>

                            <div className="card">
                                <img src={LogoOylaması} className="card-img-top" alt="..."></img>
                                <div className="card-body">

                                    <h2>
                                        Yeni logomuzu oyladık!
                                    </h2>
                                    
                                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#demo1" role="button" aria-expanded="false" aria-controls="demo1">
                                        ETKİNLİK DETAY
                                    
                                    </a>


                                    

                                    <div id="demo1" className="collapse">
                                        <hr/>

                                    </div>  
                                    
                                    
                                    
                                    
                                </div>
                            </div>



                   

                            
                    </div>

                </div> 

           
        </div>


            

    ;
  }
}
