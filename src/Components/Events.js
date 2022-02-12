import React from 'react';
import LogoOylaması from "./EventPictures/EventPic.jpg"

function Events() {
    return(  
            <div className='container'>
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
                                    <h2>    Yeni logomuzu oyladık!  </h2>
                                    <p className='fs-6 fw-lighter fst-italic'>  Tarih: 06/02/2022   </p>
                                        <a className="btn btn-primary" data-bs-toggle="collapse" href="#Logo-etkinlik" role="button" aria-expanded="false" aria-controls="Logo-etkinlik">
                                            ETKİNLİK DETAY
                                        </a>
                                        <div id="Logo-etkinlik" className="collapse">
                                            <hr/>
                                            Yeni yönetimimizin toplululuğu devralmasıyla logomuzu daha minimalist ve modern görünen, Yağmur Yılmaz tarafından özenle tasarlanan yeni logomuzla değiştirdik !
                                            Yeni logomuz 23 oy, ikinci sıradaki logomuz 20 oy, üçüncü ve yarışı sonunculukla bitiren logomuz ise 16 oy aldı. Seçime katılan herkese teşekkürler !
                                        </div>  
                                </div>
                        </div>
                    </div>
                </div> 
            </div>
        )}

export default Events
  