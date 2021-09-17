import * as config from "../config.js";
import * as View from "./View.js";

// backgrounds
import backTexture from "../../Images/Backgrounds/back-texture.webp";
import slateTexture from "../../Images/Backgrounds/slate-texture.webp";

// illustrations
import ill1 from "../../Images/Illustration/pizzeria-illustration-1.png";
import ill2 from "../../Images/Illustration/pizzeria-illustration-2.png";
import ill3 from "../../Images/Illustration/pizzeria-illustration-3.png";
import ill4 from "../../Images/Illustration/pizzeria-illustration-4.png";
import ill5 from "../../Images/Illustration/pizzeria-illustration-5.png";
import ill6 from "../../Images/Illustration/pizzeria-illustration-6.png";

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

// sections
import aboutBottom from "../../Images/about-bottom.webp";
import about from "../../Images/about.webp";
import coverPortrait from "../../Images/cover-portrait.webp";
import cover from "../../Images/cover.webp";
import offer from "../../Images/offer.webp";
import dineWithUs from "../../Images/dinewithUs.webp";
import rotatePizzaMobile from "../../Images/pizzeria_14--mobile.webp";
import rotatePizza from "../../Images/pizzeria_14.webp";

// icons
import logo from "../../Images/logo.jpg";
import clockIcon from "../../Images/clock-icon.png";
import facebookIcon from "../../Images/facebook.png";
import instagramIcon from "../../Images/instagram.png";
import laptopIcon from "../../Images/laptop-icon.png";
import youtubeIcon from "../../Images/logo-youtube.png";
import rightIcon from "../../Images/right-icon.png";
import whiteArrow from "../../Images/arrow-white.png";

class HomeView extends View.View {
  name = "home";
  generateMarkup() {
    return `
        <section class="title-section">
            <div class="title-section__container">
                <img class="cover-landscape-img background-img" src=${cover} alt="">
                <img class="cover-portrait-img background-img" src=${coverPortrait} alt="">
                <img class="logo" src=${logo} alt="">
                <div class="title-section__element">
                    <h1>LA VERA <br><span>PIZZA</span></h1>
                    <p>Bienvenido! somos una Pizzeria - Trattoria, donde encontrarás deliciosas pizzas, pan al ajo, lasañas y pastas. A que esperas para hacer tu orden</p>
                    <button class="order-button">ORDENAR</button>
                </div>
            </div>
        </section>
        <section class="menu-section">
            <img class="background-img" src=${slateTexture} alt="">
            <div class="menu-section__container">
                <div class="rotating-pizza-container">
                    <img class="illus-leaf" src=${ill6} alt="">
                    <img class="pizza-rotating" src=${rotatePizza} alt="">
                    <img class="pizza-rotating--mobile" src=${rotatePizzaMobile} alt="">
                </div>
                <div class="menu-section__grid">
                    <div class="grid-images-container">
                        <div>Americana</div>
                        <img src=${recipe1} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Hawaiana</div>
                        <img src=${recipe2} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Chorizo</div>
                        <img src=${recipe3} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Pepperoni</div>
                        <img src=${recipe4} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Al olivo</div>
                        <img src=${recipe6} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Ranchera</div>
                        <img src=${recipe7} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Bolognesa</div>
                        <img src=${recipe8} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Tropical</div>
                        <img src=${recipe9} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Carnivora</div>
                        <img src=${recipe14} alt="">
                    </div>
                </div>
                <button class="menu-button">Menú Completo</button>
            </div>
        </section>
        <section class="offers-section">
            <img class="background-img" src=${slateTexture} alt="">
            <div class="offers-section__container">
                <img src=${offer} alt="">
                <div class="offer-section__info">
                    <p class="title">OFERTAS ESPECIALES DE ESTA SEMANA</p>
                    <div>
                        <div class="offer">
                            <p>ORDENA 2 OBTEN 1 GRATIS</p>
                        </div>
                        <button class="order-button">ORDENAR</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="order-info-section">
            <img class="background-img" src=${backTexture} alt="">
            <div class="order-info-section__info">
                <p class="order-info__title">HORNEADO A LA ORDEN</p>
                <div class="order-info__details">
                    <div class="info-container">
                        <div class="img-container">
                            <img class="filter-white" src=${laptopIcon} alt="">
                        </div>
                        <p class="info-container__title"><span class="order-process-number">1</span>PIDELA EN LINEA</p>
                        <p>Tu próxima orden a un par de clicks</p>
                    </div>
                    <div class="info-container">
                        <div class="img-container">
                            <img class="filter-white" src=${clockIcon} alt="">
                        </div>
                        <p class="info-container__title"><span class="order-process-number">2</span>ORDEN HORNEADA</p>
                        <p>Orden horneada y lista para entregar</p>
                        </div>
                    <div class="info-container">
                        <div class="img-container">
                            <img class="filter-white" src=${rightIcon} alt="">
                        </div>
                        <p class="info-container__title"><span class="order-process-number">3</span>ENVIO GRATIS</p>
                        <p>Disfruta de tu orden sin importar donde</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="about-section">
            <img class="background-img" src=${slateTexture} alt="">
            <div class="about-section__overview">
                <div class="about-section__history-container">
                    <p class="history-container__title">DESDE 1987</p>
                    <article>¿Sabías que la pizza nació como una idea creativa llena de innovación?, pero no siempre la receta de este emblemático plato fue tan fortuito como adherir salsa de tomate a la parte superior de un pan plano.

                        En el siglo XVI y tras haber sido traído a Europa después  del descubrimiento de América, el tomate no se consumía bajo la creencia de que era venenoso, al igual que otras frutas por su color rojo.
                        
                        Sin embargo, a finales del siglo XVIII en las áreas pobres los alrededores de Nápoles  alguien tuvo la iniciativa de adherir tomate a un pan plano elaborado con levadura, dándole origen a esta deliciosa fusión de sabores que hoy conocemos como pizza.
                        
                        Así pues, la pizza fue ganando popularidad como una especialidad local que atraía a miles de foráneos a probar esta deliciosa  iniciativa culinaria.
                        
                        En 1830 la pizza fue vendida por primera vez en establecimientos al aire libre, así como por vendedores callejeros tanto así que se dice que la antigua pizzería Port’Alba en Nápoles, es considerada como la primera pizzería del mundo. Pronto el negocio se expandió en un modelo de restaurante con mesas y camareros, estructura que perdura hasta nuestros días.
                    
                        Ven a La Vera Pizza y descubre la nueva forma de comer pizza, lasagna y pastas en Nuevo Chimbote.
                    </article>
                </div>
                <img class="right-img" src=${about}>
                <div class="left-img-container">
                    <img class="left-img" src=${aboutBottom}>
                </div>
                <div class="about-overview__phrases-container">
                    <div><p>«Los buenos momentos son como las pizzas. Siempre saben mejor si los compartes con amigos»</p></div>
                    <div><p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique inventore repellat accusamus voluptates facilis quia nostrum officiis ea doloremque?"</p></div>
                </div>
                <button class="more-info-button">Learn More</button>
            </div>
        </section>
        <section class="order-buttons-section">
            <img class="background-img" src=${dineWithUs} alt="">
            <div class="order__flex-container">
                <h2>CENA CON NOSOTROS</h2>
                <p class="contact-number">(043) 603-908</p>
                <button class="order-button">Ordenar ahora</button>
                <button class="order-button button-orange">Separar una mesa</button>
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
    <button class="scrollToTopButton"><img src=${whiteArrow} alt=""></button>
		`;
  }
}

export default new HomeView();
