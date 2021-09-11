import * as View from "./View.js";

// backgrounds
import slateTexture from "../../Images/Backgrounds/slate-texture.webp";
import ill4 from "../../Images/Illustration/pizzeria-illustration-4.png";

// icons
import logo from "../../Images/logo.jpg";
import facebookIcon from "../../Images/facebook.png";
import instagramIcon from "../../Images/instagram.png";
import youtubeIcon from "../../Images/logo-youtube.png";

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
				<h1>ABOUT</h1>
				<div class="iframe-flex">
					<div class="iframe-container">
						<iframe
							src="https://www.youtube.com/embed/yCOY82UdFrw"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
				<div class="since-container">
					<div class="since__text">Since <br /><span>1987</span></div>
					<img src=${ill4} alt="" />
				</div>
				<article class="history-container">
					<h2>OUR STORY</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
						voluptatem culpa blanditiis praesentium similique harum accusantium
						officiis vel quas amet quo, modi beatae repudiandae iure excepturi
						ipsum, dolorem quos animi non corporis labore fugiat neque.
						Assumenda minus quis numquam eveniet nesciunt, distinctio nulla
						quasi itaque? Labore possimus inventore enim quae ad vero totam
						explicabo voluptatum. Sit provident harum sunt ex adipisci culpa
						expedita ducimus qui, debitis est exercitationem commodi laboriosam
						tempore praesentium minus quo, fuga nesciunt assumenda, ipsum
						voluptatibus explicabo facere quis veritatis officia. Necessitatibus
						voluptatibus fugiat nisi alias repudiandae, fuga tempora sed
						reiciendis, itaque vitae reprehenderit quidem obcaecati molestias.
					</p>
				</article>
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

export default new aboutView();
