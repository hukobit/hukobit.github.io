import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return  <div>
                <div className='p-5 mb-4 rounded-3' style={{backgroundImage: 'url("https://cutewallpaper.org/21/seamless-space-background/Starrs-In-Outer-Space-Seamless-Background-Or-Texture-.jpg")'}}>
                    <div className='container-fluid py-5'>
                        <h4 className='display-8 fw-bold text-white text-center'>Konumsal Bilgi Topluluğu'na Hoş Geldiniz</h4>
                        <p className='fs-4 fw-light fst-italic text-white text-center'>
                          Kendinizi geliştirebileceğiniz, gelişirken eğlenebileceğiniz bir topluluk mu arıyorsunuz? Öyleyse doğru yerdesiniz. 
                        </p>

                    </div>
                </div>

            </div>;
  }
}
