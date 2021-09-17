import * as View from "./View.js";
import * as model from "../model.js";

// backgrounds
import concreteTexture from "../../Images/Backgrounds/concrete-texture.webp";

// icons
import logo from "../../Images/logo.jpg";
import facebookIcon from "../../Images/facebook.png";
import instagramIcon from "../../Images/instagram.png";
import youtubeIcon from "../../Images/logo-youtube.png";
import mapsCar from "../../Images/drive_black.png";
import blackArrow from "../../Images/arrow-black.png";

class orderView extends View.View {
  name = "order";
  generateMarkup() {
    return `    
			<section class="order-container">
			<img
				class="background-img order-container__background"
				src=${concreteTexture}
				alt=""
			/>
			<img class='logo' src=${logo} alt="">
			<div class="clickable-logo"></div>
			<form class="order__form" autocomplete="on">
				<h1>ORDENAR</h1>
				<div class="form__inputs">
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<textarea
						name=""
						id=""
						placeholder="What will your order be?"
					></textarea>
				</div>
			</form>
			<div
			id="map" class="order__map"></div>
			<div id="content">
				<div class="topContent">
					<img src=${mapsCar} class="carIconHidden" alt="" /> 
					<p class="duration"></p>
				</div>
				<p class="distance"></p>
			</div>
			</section>
			<section class="footer-section">
            <footer>
                <div class="footer__flex-container">
                    <div class="contact-info__flex-container left-content">
                        <div class="up-content">
                            <h3>CONTACTO</h3>
                            <p class="contact-number">(043) 603-908</p>
                        </div>
                        <div class="down-content footer__icons">
						<button><a class="footer__facebook-icon"  target="_blank" rel="noreferrer" href="https://m.facebook.com/Laverapizzatrattoria/?locale2=es_LA"><img class="filter-white" src=${facebookIcon} alt=""></a></button>
						<button><a class="footer__youtube-icon .filter-white "><img src=${youtubeIcon} class="filter-white" alt=""></a></button>
						<button><a class="footer__instagram-icon"><img class="filter-white" src=${instagramIcon} alt=""></a></button>
                        </div>
                    </div>
                    <div class="contact-info__flex-container right-content">
                    <h3>HORARIO</h3>
                        <p>Todos los días!, 11am - 11pm</p>
                        <p>info@laverapizza.com</p>
                    </div>
                </div>
            </footer>    
        </section>		
		<button class="scrollToTopButton"><img src=${blackArrow} alt=""></button>
		`;
  }
  hideMapCarIcon() {
    const carIcon = document.querySelector(".carIconHidden");
    carIcon.classList.add("carIconVisible");
  }
  newOrderSectionBottom() {
    const orderSectionBtn =
      document.querySelector(".footer-section").offsetHeight;
    document.querySelector(".order-container").style[
      "padding-bottom"
    ] = `${orderSectionBtn}px`;
  }
}

export default new orderView();
