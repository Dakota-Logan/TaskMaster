import List from "./Models/List.js";

let _state = {
	/** @type {List[]} */
	lists: []
};

class Store {
	constructor() {
		this.loadState();
	}

	get State() {
		return _state;
	}

	get Lists() {
		//NOTE use this getter to ensure the objects in list are all of type List
		return _state.lists.map(list => new List(list));
	}

	//NOTE call saveState everytime you change the state in any way
	saveState() {
		localStorage.setItem("state", JSON.stringify(_state));
	}

	//NOTE this method will get the lists from local storage at the start of the app
	loadState() {
		let saved = JSON.parse(localStorage.getItem("state"));
		if (saved) {
			_state = saved;
			_state.lists = _state.lists.map(cur=>new List(cur.name, cur.id, cur.items));
			console.log(_state)
		}
	}
}

	const store = new Store();
	export default store;
