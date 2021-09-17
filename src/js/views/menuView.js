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
import whiteArrow from "../../Images/arrow-white.png";

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
						<a href="#appetizers" class="option options__app"><div>
							PAN AL AJO
						</div></a>
						<a href="#classics" class="option options__cla"><div>
							CLASICAS
						</div></a>
						<a href="#lasagnas" class="option options__sid"><div>LASAGNAS</div></a>
					</div>
				</section>
				<section class="menu-appetizers" id="appetizers">
					<img
						class="background-img"
						src=${slateTexture}
						alt=""
					/>
					<h2>PAN AL AJO</h2>
					<div class="appetizers-container">
						<div>
							<h3>Americano</h3>
							<span>S/. 6</span>
						</div>
						<div>
							<h3>Hawaiano</h3>
							<span>S/. 7</span>
						</div>
						<div>
							<h3>Chorizo</h3>
							<span>S/. 7</span>
						</div>
						<div>
							<h3>Champiñones</h3>
							<span>S/. 7</span>
						</div>
						<div>
							<h3>Bolognesa</h3>
							<span>S/. 8</span>
						</div>
						<div>
							<h3>Ranchera</h3>
							<span>S/. 8</span>
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
									<div>Americana <br /><span>S/. 48</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe2} alt="" />
									<div>Hawaiana <br /><span>S/. 51</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe3} alt="" />
									<div>Chorizo <br /><span>S/. 63</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe4} alt="" />
									<div>Pepperoni <br /><span>S/. 63</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe6} alt="" />
									<div>Al olivo <br /><span>S/. 63</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe7} alt="" />
									<div>Ranchera <br /><span>S/. 69</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe8} alt="" />
									<div>Bolognesa <br /><span>S/. 69</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe9} alt="" />
									<div>Tropical <br /><span>S/. 69</span></div>
								</div>
								<div class="grid-images-container">
									<img src=${recipe14} alt="" />
									<div>Carnivora <br /><span>S/. 69</span></div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="menu-sides" id="lasagnas">
					<img
						class="background-img"
						src=${slateTexture}
						alt=""
					/>
					<h2>LASAGNA</h2>
					<div class="sides-container">
						<div>
							<h3>Bolognesa</h3>
							<p>Lorem ipsum dolor sit amet. <br /><span>8</span></p>
						</div>
						<div>
							<h3>Gardfield</h3>
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
		<button class="scrollToTopButton"><img src=${whiteArrow} alt=""></button>
		`;
  }
}

export default new menuView();
