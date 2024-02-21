import Home from "./Home.js";
import Menu from "./Menu.js";
import About from "./About.js";

import { resetContent } from "./Functions.js";
import { homeButton, menuButton, aboutButton } from "./Content.js";

homeButton.addEventListener('click', e => {
		resetContent();
		Home();
	    console.log("Hello Home");		
});

menuButton.addEventListener('click', e => {
		resetContent();
		Menu();
		console.log("Hello Menu");
});

aboutButton.addEventListener('click', e => {
		resetContent();
		About();
		console.log("Hello About");
});
About();

