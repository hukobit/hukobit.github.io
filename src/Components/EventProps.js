import React from 'react';


function Events(props) {
    return(  
            <div className='container'>
                <div>
                </div>
                <div className='row gx-5 justify-content-center'>
                    <div className='col my-5 mx-2 col-md-6 col-lg-4'>
                        <div className="card">
                            <img src={props.url} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h2> {props.name}  </h2>
                                    <p className='fs-6 fw-lighter fst-italic'>  {props.date}   </p>
                                        <a className="btn btn-primary" data-bs-toggle="collapse" href={"#"+props.id} role="button" aria-expanded="false" aria-controls={props.id}>
                                            ETKİNLİK DETAY
                                        </a>
                                        <div id={props.id} className="collapse">
                                            <hr/>
                                            {props.about}
                                        </div>  
                                </div>
                        </div>
                    </div>
                </div> 
            </div>
        )}

export default Events