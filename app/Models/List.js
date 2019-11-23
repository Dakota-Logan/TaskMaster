import Item from './Item.js'
import { generateId } from "../utils.js";

export default class List {
  constructor(listName) {
    this.id = generateId();
    this.items = [];
    this.name = listName;
    console.log('Created new List')
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template () {
  	console.log('Getting template')
  	return `
  		<div class="todo-list">
			<dl class="todo-items">
			<h2>${this.name}</h2>
			<button class="btn-trash" onclick="app.listController.removeItem('${this.id}')">
				<i class="far fa-trash-alt"></i>
			</button>
			${this.drawItems()}
			</dl>
			<form onsubmit="app.listController.addItem(event,'${this.id}')">
				<label for="itemname"></label>
				<input type="text" name="itemname"/>
				<button type="submit">Add Item</button>
			</form>
  		</div>
  	`;
  }
  /**
   * Takes in an array of strings, each string being a sepparate item.
   * @param  {array} items
   * @return {string}       Html formated string containing all items from input array.
   */
  drawItems () {
  	let template = '';
  	this.items.forEach(item=>template+=item.Template);
  	return template;
  }
}
