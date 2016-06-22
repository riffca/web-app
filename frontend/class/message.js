export default class Message {

	constructor({
		text,
		from,
		to,
		created_at = Date.now(),
		upadted_at,

	}){
		this.text = text;
		this.from = from;
		this.to = to;
		this.created_at = created_at;
		this.updated_at =updated_at;
	}

	
	
	show(){

	}
	hide(){

	}
	delete(){

	}
	
}