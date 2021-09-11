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
                    <h1>LA VERA <br><span>PIZZA</span></h1> <!-- Add this breakpoint with JS at certain query --> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur a aliquid dicta? Consectetur repudiandae ex dignissimos quaerat minima officia earum soluta nisi deserunt quam, atque repellat, saepe, id autem?</p>
                    <button class="order-button">Order Online</button>
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
                        <div>Lorem</div>
                        <img src=${recipe1} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe2} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe3} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe4} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe6} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe7} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe8} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe9} alt="">
                    </div>
                    <div class="grid-images-container">
                        <div>Lorem</div>
                        <img src=${recipe14} alt="">
                    </div>
                </div>
                <button class="menu-button">Full Menu</button>
            </div>
        </section>
        <section class="offers-section">
            <img class="background-img" src=${slateTexture} alt="">
            <div class="offers-section__container">
                <img src=${offer} alt="">
                <div class="offer-section__info">
                    <p class="title">THIS WEEK'S SUPER SPECIAL OFFER</p>
                    <div>
                        <div class="offer">
                            <p>BUY 2 GET 1 FREE</p>
                        </div>
                        <button class="order-button">ORDER</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="order-info-section">
            <img class="background-img" src=${backTexture} alt="">
            <div class="order-info-section__info">
                <p class="order-info__title">BAKED TO ORDER</p>
                <div class="order-info__details">
                    <div class="info-container">
                        <div class="img-container">
                            <img class="filter-white" src=${laptopIcon} alt="">
                        </div>
                        <p class="info-container__title">ORDER ONLINE</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                    </div>
                    <div class="info-container">
                        <div class="img-container">
                            <img class="filter-white" src=${clockIcon} alt="">
                        </div>
                        <p class="info-container__title">BAKED ORDER</p>
                        <p>Nihil eius perspiciatis ipsa incidunt blanditiis</p>
                    </div>
                    <div class="info-container">
                        <div class="img-container">
                            <img class="filter-white" src=${rightIcon} alt="">
                        </div>
                        <p class="info-container__title">FREE DELIVERY</p>
                        <p>Laudantium, inventore illo</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="about-section">
            <img class="background-img" src=${slateTexture} alt="">
            <div class="about-section__overview">
                <div class="about-section__history-container">
                    <p class="history-container__title">SINCE 1987</p>
                    <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ipsa, nostrum nobis soluta tempore itaque sit quisquam labore eos quasi saepe impedit deserunt! Beatae nisi fugiat harum quod incidunt officiis.
                    Ratione, cupiditate? Culpa laudantium, unde laboriosam earum sunt nemo assumenda omnis repellendus, qui facilis et est veniam quo mollitia magni ea alias dolor cumque consectetur sequi saepe explicabo officia labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam illo exercitationem architecto cum qui consectetur nemo perspiciatis, illum itaque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, beatae at eius sunt, obcaecati laborum consequatur dolore sint aperiam perspiciatis numquam doloribus, soluta veritatis nemo cumque incidunt omnis amet? Rem!</article>
                </div>
                <img class="right-img" src=${about}>
                <div class="left-img-container">
                    <img class="left-img" src=${aboutBottom}>
                </div>
                <div class="about-overview__phrases-container">
                    <div><p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique inventore repellat accusamus voluptates facilis quia nostrum officiis ea doloremque?"</p></div>
                    <div><p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique inventore repellat accusamus voluptates facilis quia nostrum officiis ea doloremque?"</p></div>
                </div>
                <button class="more-info-button">Learn More</button>
            </div>
        </section>
        <section class="order-buttons-section">
            <img class="background-img" src=${dineWithUs} alt="">
            <div class="order__flex-container">
                <h2>DINE WITH US</h2>
                <p class="contact-number">(56)987-1234</p>
                <button class="order-button">Order Now</button>
                <button class="order-button button-orange">Book a Table</button>
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

export default new HomeView();
