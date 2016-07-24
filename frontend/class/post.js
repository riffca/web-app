const serverName = 'localhost:3000';
const path = '/api/post';

export default class {
    
    constructor({
        id,
        author,
        title,
        text,
        createdAt,
        updatedAt
    }) {
        this.id = id;
        this.author= author;
        this.title = title;
        this.text = text;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


    // M E T H O D S
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


    //S T A T I C
    static getAll(){
        return Vue.http.get(path + '/get-post/all');
    }
    static getOne(id){
        return Vue.http.get(path + '/get-post/:id');
    }
    static create({title, text, authorId}) {
        return Vue.http.post(path + '/create-post', {
            author: authorId,
            title: title,
            text: text
        });
    }
}
