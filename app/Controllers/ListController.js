import store from '../store.js'
import ListService from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
let listContainer = document.getElementById('list-container');

function _drawLists() {
	let template = '';
	store.State.lists.forEach(cur=>template+=cur.Template)
	listContainer.innerHTML=template;
	console.log('Drawn!');
}

//Public
export default class ListController {
	constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
		_drawLists();
	}

	addList (event) {
		event.preventDefault();
		console.log(event.target.listname);
		ListService.addList(event.target.listname.value);
		_drawLists();
	}
	removeList (listId) {
		ListService.removeList(listId)
		_drawLists();
	}

	addItem (event, listId) {
		event.preventDefault();
		ListService.addItem(event.target.itemname.value, listId);
		_drawLists();
	}
	removeItem (listId,itemId) {
		ListService.removeItem(listId,itemId);
		_drawLists();
	}
}
