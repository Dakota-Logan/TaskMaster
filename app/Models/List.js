import Item from "./Item.js"
import { generateId } from "../utils.js";

export default class List {
  constructor(listName, listId, items = []) {
    this.id = listId || generateId();
    this.items = items.map(cur=>new Item(cur.title, cur.listId, cur.id));
    this.name = listName;
    console.log('Created new List:', this)
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template () {
  	return `
  		<div class="list">
			<dl class="todo-items">
			<h2>${this.name}</h2>
			<button class="btn-trash" onclick="app.listController.removeList('${this.id}')">
				<i class="far fa-trash-alt"></i>
			</button>
			${this.drawItems()}
			</dl>
			<form class="list-item-form" onsubmit="app.listController.addItem(event,'${this.id}')">
				<label for="itemname"></label>
				<input type="text" id="itemname" name="itemname"/>
				<button type="submit">Add Item</button>
			</form>
  		</div>
  	`;
  }
  /**
   * Takes in an array of strings, each string being a separate item.
   * @return {string}       Html formatted string containing all items from input array.
   */
  drawItems () {
  	let template = '';
  	this.items.forEach(item=>template+=item.Template);
  	return template;
  }
}