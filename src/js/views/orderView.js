import * as View from "./View.js";

// backgrounds
import concreteTexture from "../../Images/Backgrounds/concrete-texture.webp";

// icons
import logo from "../../Images/logo.jpg";
import facebookIcon from "../../Images/facebook.png";
import instagramIcon from "../../Images/instagram.png";
import youtubeIcon from "../../Images/logo-youtube.png";

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
				<h1>ORDER</h1>
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
					<!-- <img src="drive_black.png" alt="" /> -->
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
								<h3>CONTACT</h3>
								<p class="contact-number">(56) 987-1234</p>
							</div>
							<div class="down-content footer__icons">
								<button class="footer__facebook-icon"><img class="filter-white" src=${facebookIcon} alt=""></button>
								<button class="footer__youtube-icon .filter-white "><img src=${youtubeIcon} class="filter-white" alt=""></button>
								<button class="footer__instagram-icon"><img class="filter-white" src=${instagramIcon} alt=""></button>
							</div>
						</div>
						<div class="contact-info__flex-container right-content">
							<h3>OPENING HOURS</h3>
							<p>Everyday, 11am - 11pm</p>
							<p>info@theverapizza.com</p>
						</div>
					</div>
				</footer>    
			</section>
		`;
  }
}

export default new orderView();
