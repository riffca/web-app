const serverName = 'localhost:3000';
const path = '/api/post';

export default class {
    
    constructor({
        author,
        title,
        text,
        created,
        updated
    }) {
        this.author= author;
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
            author: author,
            title: title,
            text: text
        });
    }
    update(id) {
        return Vue.http.put(path + '/update-post',{
            author: author,
            title: title,
            text: text
        });
    }
    delete(id) {
        return Vue.http.delete(path + '/delete-post');
    }
}
