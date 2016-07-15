const serverName = 'localhost:3000';
const path = '/api/post';

export default class {
    
    constructor({
        title,
        text,
        created,
        updated
    }) {
        this.title = title;
        this.text = text;
        this.created = created;
        this.update = updated;
    }
    getAll(){
        return Vue.http.get(path + '/get-post/all');
    }
    getOne(id){
        return Vue.http.get(path + '/get-post/:id');
    }
    create() {
        return Vue.http.post(path + '/create-post', {
            title: title,
            text: text,
        });
    }
    update(id) {
        return Vue.http.put(path + '/create-project');
    }
    delete(id) {
        return Vue.http.delete(path + '/create-post');
    }
}
