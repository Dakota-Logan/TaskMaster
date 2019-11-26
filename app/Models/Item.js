import { generateId } from '../utils.js';

export default class Item{
	constructor (title, listId, id) {
		this.title = title;
		this.id = id || generateId();
		this.listId = listId;
	}
	get Template () {
		return `
			<dt class="list-item-container" id="${this.id}">${this.title}
			<button class="btn-trash" onclick="app.listController.removeItem('${this.id}','${this.listId}')">
				<i class="far fa-trash-alt"></i>
			</button>
			</dt>
		`
	}
}