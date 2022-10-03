import React from 'react';
import "./UserProfile.css";

function UserProfile() {
  return (
    <main>
    <section className="review-container">

        <article className="review">
            <div className="img-containe">
                <img src="./img/pappu.jpg" alt="person-img" className="person-img"/>
            </div>
            <h1 className="author">Sohil Shiakh</h1>
            <p className="Job">Software Engineer</p>
            <p className="info-review">Juha pura Ahmedbaad india</p>
            <div className="button-container">
            <table>
            <tr>
                <td>
                 <a href="tel:+91 0123456789">
                 <i className="fa-solid fa-phone"></i>
                 <small>Call</small>
                 </a>
                </td>

                <td>          
                  <a href="mailto:abc@gmail.com">
                  <i className="fa-solid fa-paper-plane"></i>
                  <small>Email</small>
                  </a>
                </td>

                <td>
                 <a href="!#">
                 <i className="fa-solid fa-location-dot"></i>
                 <small>Map</small>
                 </a>
                </td>
            </tr>
            </table>
       </div>
                
        </article>

        <article className="review2">
         <div className="review2_main">
            <div className="review2_div">
            <i className="fa-solid fa-phone"></i>
            <h4>
            <a href="tel:+91 0123456789" style={{color:"black"}}>+91 0123456789</a>
            <h4>Mobile</h4>
            </h4>
           </div>
            <hr/>
            <div className="review2_div">
            <i className="fa-solid fa-envelope"></i>
            <h4>
            <a href="mailto:abc@gmail.com" style={{color:"black"}}>abc@gmail.com</a>
            <h4>Email</h4>
            </h4>
            </div>

            <hr/>
            <div className="review2_div">
            <i className="fa-solid fa-briefcase"></i>
            <h4>
            <p style={{color:"black"}}> Bernard Controls</p>
            <h4>Executive Vice President India, Middle-East & Africa</h4>
            </h4>
            </div>

            <hr/>

            <div className="review2_div">
            <i className="fa-solid fa-location-dot"></i>
            <h4>
            <p style={{color:"black"}}>Jafza One, Tower-A, Office 1816 Dubai United Arab Emirates</p>
            <a href='!#'>Show on map</a>
            </h4>
            </div>
            <hr/>
            <div className="review2_div">
            <i className="fa-solid fa-globe"></i>
            <h4>
            <a href="https://netflex-clone-a7267.web.app/" style={{color:"black"}}>https://netflex-clone-a7267.web.app/</a>
            <p style={{color:"black"}}>Website</p>
            </h4>
            </div>
            <hr/>
            <a href="./img/contact.vcf" download="contact.vcf" target='_blank'>
            <button className='download'><i className="fa-solid fa-user"></i>   Download Vcard</button>
            </a>
         </div>

       </article>
    </section>
</main>
  )
}

export default UserProfile