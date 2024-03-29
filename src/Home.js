import { content } from "./Content.js";
import hours from "./objects/Hours.js";
import { createElem } from "./Functions.js";

export default function(){
		const titleDiv = createElem("div",["title-div"], content);
		const title = createElem("h1",["title"],titleDiv);
		title.textContent = "Grazie Caffe";

		const descDiv = createElem("div",["desc-div"], content);
		const desc = createElem("p",["description"],descDiv);
		desc.textContent = "Lorem ipsum dolor sit emet qui lavros deres etc tu estavo este simpano reset se it la vola vamos valo tu.";

		const hoursDiv = createElem("div",["hours-div"], content);
		const hoursTitle = createElem("h2", ["subtitle"], hoursDiv);
		hoursTitle.textContent = "Hours";

		const hoursList = createElem("ol", ["hours-list"], hoursDiv);
		
		for(let hour in hours){
				const hourLi = createElem("li", ["hour"], hoursList);
				hourLi.textContent = `${hour}: ${hours[hour].oh} - ${hours[hour].ch}`
		}

		const locationDiv = createElem("div", ["location-div"], content);
		const locationTitle = createElem("h2", ["subtitle"], locationDiv);
		locationTitle.textContent = "Location";
		const locationDesc = createElem("p", ["description"], locationDiv);
		locationDesc.textContent = "123 Due Latte Italia";
};
