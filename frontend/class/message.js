const serverName = 'localhost:3000';
const path = '/api/message';

export default class {
    constructor({
    	from,
    	to,
        title,
        text,
        created,
        updated
    }) {
    	this.from = from;
    	this.to = to;
        this.title = title;
        this.text = text;
        this.created = created;
        this.update = updated;
    }
    getAll(){
        return Vue.http.get(path + '/get-message/all');
    }
    getOne(id){
        return Vue.http.get(path + '/get-message/:id');
    }
    create() {
        return Vue.http.post(path + '/create-message', {
            title: title,
            text: text,
        });		
    }
    update() {
        return Vue.http.put(path + '/create-project');
    }
    delete() {
        return Vue.http.delete(path + '/create-message');
    }
}