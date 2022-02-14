import React from 'react';
import LogoOylaması from "./EventPictures/EventPic.jpg"
import Event from './EventProps';

function Events() {
    return(  
            <div className='container'>
                


                <div>
                    <h1 className='text-center display-1'>
                          ETKİNLİKLER
                          <hr/>
                    </h1>
                </div>


                {/* 
                    name = etkinlik adı
                    date = tarih
                    about = etkinlik hakkında detaylı bilgi
                    url = kullanılacak resim !! önce resmi local olarak import etmeyi unutma !!
                    id = !! her etkinlik için spesifik bir id atanmalı id sadece sayı olamaz !!
                */}  

                <Event name="Yeni logomuzu oyladık!" date="Tarih: 06/02/2022" about="Yeni yönetimimizin toplululuğu devralmasıyla logomuzu daha minimalist ve modern görünen, Yağmur Yılmaz tarafından özenle tasarlanan yeni logomuzla değiştirdik !
                                            Yeni logomuz 23 oy, ikinci sıradaki logomuz 20 oy, üçüncü ve yarışı sonunculukla bitiren logomuz ise 16 oy aldı. Seçime katılan herkese teşekkürler !" url={LogoOylaması} id="Etkinlik1"/>
               
            </div>
        )}

export default Events
  