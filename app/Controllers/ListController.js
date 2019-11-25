import store from '../store.js'
import ListService from "../Services/ListService.js";

let listContainer = document.getElementById('list-container');

function _drawLists() {
	let template = '';
	store.State.lists.forEach(cur=>template+=cur.Template);
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
		event.target.listname.value = '';
		_drawLists();
	}
	removeList (listId) {
		if(window.confirm('Do you want to delete this item?')){
		ListService.removeList(listId);
		}else{return;}
		_drawLists();
	}

	addItem (event, listId) {
		event.preventDefault();
		ListService.addItem(event.target.itemname.value, listId);
		_drawLists();
	}
	removeItem (itemId,listId) {
		if(window.confirm('Do you want to delete this item?')) {
			ListService.removeItem(itemId, listId);
		}else{return}
		_drawLists();
	}
}
