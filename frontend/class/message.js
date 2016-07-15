const serverName = 'localhost:3000';
const path = '/api/message';

export default class {
    constructor({
    	fromUser,
    	toUser,
        title,
        text,
        created,
        updated
    }) {
    	this.fromUser = fromUser;
    	this.toUser = toUser;
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
            toUser: toUserId,
            fromUser: fromUserId,
            title: title,
            text: text,
        });		
    }
    update() {
        return Vue.http.put(path + '/update-project',{
            toUser: toUserId,
            fromUser: fromUserId,
            title: title,
            text: text,
        });
    }
    delete() {
        return Vue.http.delete(path + '/delete-message');
    }
}