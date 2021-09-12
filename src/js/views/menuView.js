import * as View from "./View.js";

// backgrounds
import slateTexture from "../../Images/Backgrounds/slate-texture.webp";

// recipes
import recipe1 from "../../Images/1.webp";
import recipe2 from "../../Images/2.webp";
import recipe3 from "../../Images/3.webp";
import recipe4 from "../../Images/4.webp";
import recipe6 from "../../Images/6.webp";
import recipe7 from "../../Images/7.webp";
import recipe8 from "../../Images/8.webp";
import recipe9 from "../../Images/9.webp";
import recipe14 from "../../Images/14.webp";

// icons
import logo from "../../Images/logo.jpg";
import facebookIcon from "../../Images/facebook.png";
import instagramIcon from "../../Images/instagram.png";
import youtubeIcon from "../../Images/logo-youtube.png";

class menuView extends View.View {
  name = "menu";
  generateMarkup() {
    return `   
				<div class='menu-container'>
				<section class="menu-title">
					<img
						class="background-img"
						src=${slateTexture}
						alt=""
					/>
					<img class='logo' src=${logo} alt="">
					<div class="clickable-logo"></div>
					<h1>MENU</h1>
					<div class="menu-title__options">
						<div class="option options__app">
							<a href="#appetizers">APPETIZERS</a>
						</div>
						<div class="option options__cla">
							<a href="#classics">CLASSICS</a>
						</div>
						<div class="option options__sid"><a href="#sides">SIDES</a></div>
					</div>
				</section>
				<section class="menu-appetizers" id="appetizers">
					<img
						class="background-img"
						src=${slateTexture}
						alt=""
					/>
					<h2>APPETIZERS</h2>
					<div class="appetizers-container">
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
					</div>
				</section>
				<section class="menu-section menu-pizzas" id="classics">
					<div class="menu-pizzas__container">
						<img
							class="background-img"
							src=${slateTexture}
							alt=""
						/>
						<h2>CLASSIC PIZZAS</h2>
						<div class="menu-section__container">
							<div class="menu-section__grid">
								<div class="grid-images-container">
									<img src=${recipe1} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe2} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe3} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe4} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe6} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe7} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe8} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe9} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe14} alt="" />
									<div>Lorem <br /><span>$19.99</span></div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="menu-sides" id="sides">
					<img
						class="background-img"
						src=${slateTexture}
						alt=""
					/>
					<h2>SIDES</h2>
					<div class="sides-container">
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Lorem</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
					</div>
				</section>
			</div>
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

export default new menuView();
