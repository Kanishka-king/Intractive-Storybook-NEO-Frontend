
  import react from "react";
import footer from "./footer.css"
  const Footer=()=>{
     
      return(
          <div>
            <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <div><center><h2 className="h2des"> How to use ? </h2></center></div><br></br>
    <ul class="menu">
      
      <li class="menu__item"><a class="menu__link" href="#">To access a book  click a specific book -- click on more then book will open -- signin with your google account so that you can add project to the wishlist and also used to track a project</a></li>
     

    </ul>
    <p>&copy;2023 kanishka palani | All Rights Reserved</p>
  </footer>
              
          </div>
      )
  }
  export default Footer;