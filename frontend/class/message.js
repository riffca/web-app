export default class Message {

	constructor({
		text,
		from,
		to,
		created = Date.now(),
		upadted,

	}){
		this.title = title;
		this.text = text;

		this.from = from;
		this.to = to;

		this.isCheked = false;
		this.created = created;
		this.updated =updated;
	}
	delete(){
		return Vue.http.delete('/api/message/delete',{_id: this.id});
	}
	check(){
		return Vue.http.post('/api/message/check',{_id: this.id});
	}
}