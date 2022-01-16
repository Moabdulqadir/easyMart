import React from 'react';
import './fotter.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <div>
            <footer className="footer" >
 <div className="container">
 <div className="row">
 <div className="footer-col">
 <h4>company</h4>
 <ul>
 <li><a href="#">about us</a></li>
 <li><a href="#">our services</a></li>
 <li><a href="#">privacy policy</a></li>
 <li><a href="#">affiliate program</a></li>
 </ul>
 </div>
 <div className="footer-col">
 <h4>get help</h4>
 <ul>
 <li><a href="#">FAQ</a></li>
 <li><a href="#">shipping</a></li>
 <li><a href="#">returns</a></li>
 <li><a href="#">order status</a></li>
 <li><a href="#">payment options</a></li>
 </ul>
 </div>
 <div className="footer-col">
 <h4>online shop</h4>
 <ul>
 <li><a href="#">watch</a></li>
 <li><a href="#">bag</a></li>
 <li><a href="#">shoes</a></li>
 <li><a href="#">dress</a></li>
 </ul>
 </div>
 <div className="footer-col">
 <h4>follow us</h4>
 <div className="social-links">
 <a href="#" ><i><LinkedInIcon/></i></a>
 <a href="#"><i><YouTubeIcon/></i></a>
 <a href="#"><i><TwitterIcon/></i></a>
 <a href="#"><i><FacebookIcon/></i></a>
 </div>
 </div>
 </div>
 <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} All rights reserved | Design by
            MSAF
          </p>
        {/* </div> */}
      </div>
 </div>
 </footer>

            
        </div>
    )
}

export default Footer


// import React from 'react'

// function Footer() {
//   return (
//     <div>
//       <div>
//       <h4>company</h4>
//       <ul>
//   <li><a href="#">about us</a></li>
//   </ul>
//   <li><a href="#">our services</a></li>
//   <li><a href="#">privacy policy</a></li>
//   <li><a href="#">affiliate program</a></li>
//       </div>
//       <div>
//       <h4>online shop</h4>
//   <ul>
//   <li><a href="#">watch</a></li>
//   <li><a href="#">bag</a></li>
//   <li><a href="#">shoes</a></li>
//   <li><a href="#">dress</a></li>
//   </ul>
  
//   </div>
//   </div>
//       </div>
//       <div></div>
//     </div>
//   )
// }

// export default Footer
