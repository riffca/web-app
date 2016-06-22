export default class Message {

	constructor({
		text,
		from,
		to,
		created = Date.now(),
		upadted,

	}){
		this.text = text;
		this.from = from;
		this.to = to;
		this.created = created;
		this.updated =updated;
	}

	
	
	show(){

	}
	hide(){

	}
	delete(){

	}
	
}