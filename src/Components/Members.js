import React, { Component } from 'react';
import "./Members.css"
import Baran from "../MemberPictures/Baran.jpg"
import Sude from "../MemberPictures/Sudis.jpg"
import Ataberk from "../MemberPictures/Ataberk.jpg"
import Hasanberk from "../MemberPictures/Hasan.jpg"
import Şeyma from "../MemberPictures/Şeyma.jpg"
import BerkHoca from "../MemberPictures/BerkHoca.jpg"
import Hatice from "../MemberPictures/Hatice.jpg"
import Haluk from "../MemberPictures/Haluk.jpg"
import Egemen from "../MemberPictures/Egemen.jpg"
import Batuhan from "../MemberPictures/Batuhan.jpg"
import İrem from "../MemberPictures/İrem.jpg"
import Çağrıhan from "../MemberPictures/Çağrıhan.jpg"



export default class Members extends Component {
  render() {
    return  <div className='container'>

              <div className="text-opacity-75 text-center">
              
                    <h1 className='text-center display-2'>
                        YÖNETİM KURULU
                        <hr/>
                    </h1>

              
              </div>
              <div className='row justify-content-center mb-5 mt-5'>
                  <div className="col d-flex justify-content-center">
                      <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Baran} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Kazım Baran YILMAZ</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Topluluk Başkanı</h4>
                            </div>
                          </div>
                      </div>
                  </div>
                  

              </div>
                


              <div className='row justify-content-around mb-5 gy-5'>

                  <div className="col d-flex justify-content-center">
                      <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Sude} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Sude YILDIRIM</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Topluluk Başkan Yardımcısı</h4>
                            </div>
                          </div>
                      </div>
                  </div>




                  <div className='col d-flex justify-content-center'>
                    <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Ataberk} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Ataberk AYANLAR</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Topluluk Genel Sekreteri</h4>
                            </div>
                          </div>
                      </div>

                  </div>
                      
                      



              </div>

              <div className='row justify-content-around gy-5 mb-5'>

                  <div className="col d-flex justify-content-center">
                      <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Hasanberk} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Hasan berk KARABAY</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>AR-GE ve Tasarım Birimi</h4>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                      <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Şeyma} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Şeyma Nur TANER</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Sosyal Medya ve Tanıtım Birimi</h4>
                            </div>
                          </div>
                      </div>
                  </div>

              </div>

              <div className='row justify-content-around gy-5 mb-5'>

                  <div className="col d-flex justify-content-center">
                      <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Haluk} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Haluk HİNDİSTAN</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Ağ ve Organizasyon Birimi</h4>
                          </div>
                      </div>
                  </div>
                  </div>




                  <div className='col d-flex justify-content-center'>
                    <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Çağrıhan} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Çağrıhan AYDOĞAN</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Etkinlik Düzenleme Birimi</h4>
                            </div>
                          </div>
                      </div>

                  </div>

                  <div className='col d-flex justify-content-center'>
                    <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Batuhan} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Batuhan ERÇIKTI</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Uluslararası İlişkiler Birimi</h4>
                            </div>
                          </div>
                      </div>

                  </div>
                      
                      
              <div className="text-opacity-75 text-center">
             
              
                <h1 className='text-center display-3'>
                  DENETLEME KURULU
                  <hr/>
                </h1>
          
    
              
              </div>


              </div>        

              <div className='row justify-content-around gy-5 mb-5'>

                  <div className="col d-flex justify-content-center">
                      <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Hatice} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Hatice Nursena RESULOĞLU</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Denetleme Kurulu</h4>
                            </div>
                          </div>
                      </div>
                  </div>




                  <div className='col d-flex justify-content-center'>
                    <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={Egemen} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Egemen ERKEN</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Denetleme Kurulu</h4>
                            </div>
                          </div>
                      </div>

                  </div>


                  <div className='col d-flex justify-content-center'>
                    <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={İrem} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>İrem BAKIR</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Denetleme Kurulu</h4>
                            </div>
                          </div>
                      </div>
              </div>
                     

                <h1 className='text-center display-3'>
                  TOPLULUK DANIŞMANI
                  <hr/>
                </h1>  

                <div className='col d-flex justify-content-center'>
                    <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img src={BerkHoca} alt="Avatar" style={{width:"300px",height:"300px"}}></img>
                            </div>
                            <div className="flip-card-back">
                              <h1>Berk ANBAROĞLU</h1>
                              <br></br>
                              <h4 className='fw-light fst-italic'>Dr. Öğr. Üyesi</h4>
                            </div>
                          </div>
                      </div>

                  </div>

                <h1 className='text-center display-6'>
                  TOPLULUK ESKİ ÜYELERİ
                  <hr/>
                </h1>  

                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        
                        <ul style={{listStyle: "none"}}>
                          <h3 className='text-center'>
                            2018
                          </h3>
                          <li className='list-item'>
                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Enes HALICI
                            
                                
                            </pre>

                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Sadık Alp ŞAHİN
                            
                                
                            </pre>

                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Duygu Dülger
                            
                                
                            </pre>
                          </li>   

                          <li className='list-item'>
                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Furkan Gültekin
                            
                                
                            </pre>
                          </li>              
                          <li className='list-item'>
                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Pelinsu Demirci
                            
                                
                            </pre>
                          </li>
                          <li className='list-item'>
                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Şevval BULUT
                            
                                
                            </pre>
                          </li>
                          <li className='list-item'>
                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Berk Alp DİREM
                            
                                
                            </pre>
                          </li>
                          <li className='list-item'>
                            <pre>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>   Recep YANIK
                            
                                
                            </pre>
                          </li>

                        </ul>


                    </div>

                   <div className='col d-flex justify-content-center'>
                    <ul style={{listStyle: "none"}}>
                    <h3 className='text-center'>
                        2019
                    </h3>
                    
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Ceren AŞKİT
                        
                             
                        </pre>

                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   İrem BAKIR
                        
                             
                        </pre>

                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Oğuzhan TAÇTAN
                        
                             
                        </pre>
                      </li>   

                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Mehmet Mert KACAR
                        
                             
                        </pre>
                      </li>              
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Onur Özgür YAMAN
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Berat ÇOLAK
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Firdevs KAMİŞLİ
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Pınar HAZAN
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Meral ÖZTÜRK
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Ali Gürcan BAKİ
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Dilan KOYUNOĞLU
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Duygu DÜLGER
                        
                             
                        </pre>
                      </li>

                   </ul>
                </div>
                   
                    <div className='col d-flex justify-content-center'>
                     <ul style={{listStyle: "none"}}>
                      <li className='list-item'>
                      <h3 className='text-center'>
                        2020
                      </h3>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Ceren AŞKİT
                        
                             
                        </pre>

                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   İrem BAKIR
                        
                             
                        </pre>

                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Oğuzhan TAÇTAN
                        
                             
                        </pre>
                      </li>   

                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Mehmet Mert KACAR
                        
                             
                        </pre>
                      </li>              
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Onur Özgür YAMAN
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Berat ÇOLAK
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Firdevs KAMİŞLİ
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Bager SAKALLI
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Ali Gürcan BAKİ
                        
                             
                        </pre>
                      </li>
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Dilan KOYUNOĞLU
                        
                             
                        </pre>
                      </li>                      
                      <li className='list-item'>
                        <pre>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>   Semih GÜZEL
                        
                             
                        </pre>
                      </li>

                    </ul>


                  </div>

                  
                  
                  
                 </div>     







                      
                      



              </div>                                               
                            
                         
                         

            </div>

              
          
    
    
    ;
  }
}
