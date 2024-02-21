import { content } from "./Content.js";
import menuItems from "./objects/Menu-Items.js";
import { createElem } from "./Functions.js";

function createMenuItem(itemContents, item, container){
		const contentContainer = createElem("div", ["menu-contents-div"], container);
		const menuTitleDiv = createElem("div", ["menu-title-div"], contentContainer);
		const menuTitle = createElem("h2", ["subtitle"], menuTitleDiv);
		menuTitle.textContent = item;

		for(let item of itemContents){
			const itemContainer = createElem("div", ["item-container-div"], contentContainer);
			const itemTitle = createElem("h3", ["item-title"], itemContainer);
			itemTitle.textContent = item.title;

			const itemDescription = createElem("p",["item-desc"], itemContainer);
			itemDescription.textContent = item.desc;

			const itemPrice = createElem("h4", ["item-price"], itemContainer);
			itemPrice.textContent = `$ ${(item.price).toFixed(2)}`;

		}

}
export default function(){
		const titleDiv = createElem("div", ["title-div"], content);
		const title = createElem("h1",["title"],titleDiv);
		title.textContent = "Grazie Caffe Menu";

		const menuItemContainer = createElem("div", ["menu-container-div"], content);
		
		for(let item in menuItems){
				createMenuItem(menuItems[item],item, menuItemContainer);
		}
}
