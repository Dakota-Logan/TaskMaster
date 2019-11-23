import { generateId } from '../utils.js';

export default class Item{
	constructor (title, listId) {
		this.title = title;
		this.id = generateId();
		this.listId = listId;
	}
	get Template () {
		return `
		<dt class="list-item-name" id="${this.id}">${this.title}</dt>
		<button class="btn-trash" onclick="app.listController.removeItem('${this.id}','${this.listId}')">
			<i class="far fa-trash-alt"></i>
		</button>
		`
	}
}