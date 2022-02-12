import React from 'react'
import "./css-files/Hero.css"

function Hero() {
  	return(
          <div className="text-secondary px-4 py-5 text-center mb-3" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524839214740-fd71e555084a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9vbiUyMHRleHR1cmV8ZW58MHx8MHx8&w=1000&q=80')"}}>
              <div className="py-5">
                <h1 className="display-5 fw-bold text-dark">Konumsal Bilgi Topluluğu'na Hoşgeldin</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="fs-5 mb-4 text-dark">Kendinizi geliştirebileceğiniz, gelişirken eğlenebileceğiniz bir topluluk mu arıyorsunuz? Öyleyse doğru yerdesin</p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  </div>
                </div>
              </div>
          </div>
        )}

export default Hero
