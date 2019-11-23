import List from "../Models/List.js";
import Item from "../Models/Item.js";
import store from '../store.js';

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
	constructor () {

	}

	addList (listName) {
		store.State.lists.push(new List(listName));
	store.saveState();
	}
	removeList(listId){
		store.State.lists = store.State.lists.filter(x=>x.id!==listId);
	store.saveState();
	}

	addItem (itemName, listId) {
		let list = store.State.lists.find(cur=>cur.id===listId);
		list.items.push(new Item(itemName, listId));
	store.saveState();
	}
	removeItem (itemId,listId) {
		let list = store.State.lists.find(cur=>cur.id===listId);
		list.items = list.items.filter(cur=>cur.id!==itemId);
	store.saveState();
	}
}

const SERVICE = new ListService();
export default SERVICE;
