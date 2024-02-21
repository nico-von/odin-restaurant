import { content } from "./Content.js";
import { createElem } from "./Functions.js";

export default function() {
	const titleDiv = createElem("div", ["title-div"], content);
	const title = createElem("h1",["title"],titleDiv);
	title.textContent = "Grazie Caffe";
	
	const descDiv = createElem("desc-div",["desc-div"], content);
	const desc = createElem("p",["description"],descDiv);
	desc.textContent = "Lorem ipsum dolor sit emet qui lavros deres etc. tu estavo este simpano reset se it la vola vamos valo tu."
}

