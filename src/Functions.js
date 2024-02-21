import { content } from "./Content.js";

export function createElem(elem = "div", classNames = [], parentElem = null){
		const newElem = document.createElement(elem);
		if (classNames.length != 0){
				newElem.classList.add(...classNames);
		}

		if (!parentElem) {
				return newElem;
		}

		parentElem.appendChild(newElem);
		return newElem;
}

export function resetContent(){
		content.replaceChildren(); //reset all
}

