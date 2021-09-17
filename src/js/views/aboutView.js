import * as View from "./View.js";

// backgrounds
import slateTexture from "../../Images/Backgrounds/slate-texture.webp";
import ill4 from "../../Images/Illustration/pizzeria-illustration-4.png";

// icons
import logo from "../../Images/logo.jpg";
import facebookIcon from "../../Images/facebook.png";
import instagramIcon from "../../Images/instagram.png";
import youtubeIcon from "../../Images/logo-youtube.png";
import whiteArrow from "../../Images/arrow-white.png";

import * as config from "../config.js";

class aboutView extends View.View {
  name = "about";
  generateMarkup() {
    return ` 
			<section class="about-info__container">
			<img
				class="background-img"
				src=${slateTexture}
				alt=""
			/>
			<img class='logo' src=${logo} alt="">
			<div class="clickable-logo"></div>
			<div class="about-info-section">
				<h1>NOSOTROS</h1>
				<div class="iframe-flex">
					<div class="iframe-container">
						<iframe
							src=${config.SPOTVIDEO}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen 
							crossorigin
						></iframe>
					</div>
				</div>
				<div class="since-container">
					<div class="since__text">Desde <br /><span>1987</span></div>
					<img src=${ill4} alt="" />
				</div>
				<article class="history-container">
					<h2>HISTORIA</h2>
					<p class="history-container__text">
					¿Sabías que la pizza nació como una idea creativa llena de innovación?, pero no siempre la receta de este emblemático plato fue tan fortuito como adherir salsa de tomate a la parte superior de un pan plano.

					En el siglo XVI y tras haber sido traído a Europa después  del descubrimiento de América, el tomate no se consumía bajo la creencia de que era venenoso, al igual que otras frutas por su color rojo.
					
					Sin embargo, a finales del siglo XVIII en las áreas pobres los alrededores de Nápoles  alguien tuvo la iniciativa de adherir tomate a un pan plano elaborado con levadura, dándole origen a esta deliciosa fusión de sabores que hoy conocemos como pizza.
					
					Así pues, la pizza fue ganando popularidad como una especialidad local que atraía a miles de foráneos a probar esta deliciosa  iniciativa culinaria.
					
					En 1830 la pizza fue vendida por primera vez en establecimientos al aire libre, así como por vendedores callejeros tanto así que se dice que la antigua pizzería Port’Alba en Nápoles, es considerada como la primera pizzería del mundo. Pronto el negocio se expandió en un modelo de restaurante con mesas y camareros, estructura que perdura hasta nuestros días.
				
					Ven a La Vera Pizza y descubre la nueva forma de comer pizza, lasagna y pastas en Nuevo Chimbote.
					</p>
				</article>
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
                            <button><a class="footer__facebook-icon" target="_blank" rel="noreferrer" href="https://m.facebook.com/Laverapizzatrattoria/?locale2=es_LA"><img class="filter-white" src=${facebookIcon} alt=""></a></button>
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

export default new aboutView();
