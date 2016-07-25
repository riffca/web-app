const serverName = 'localhost:3000';
const path = '/api/post';

export default class {
    
    constructor({
        _id,
        author,
        title,
        text,
        createdAt,
        updatedAt
    }) {
        this.id = _id;
        this.author= author;
        this.title = title;
        this.text = text;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


    // M E T H O D S
    update() {
        return Vue.http.put(path + '/update-post/'+this.id,{
            author: author,
            title: title,
            text: text
        });
    }
    delete() {
        return Vue.http.delete(path + '/delete-post/'+this.id);
    }


    //S T A T I C

    static getAllUserPosts(userId){
        return Vue.http.get(path + '/get-all-user-posts/'+userId);
    }
    static getAll(){
        return Vue.http.get(path + '/get-all-posts');
    }
    static getOne(id){
        return Vue.http.get(path + '/get-one-post/' + id);
    }
    static create({title, text, authorId}) {
        return Vue.http.post(path + '/create-post', {
            title: title,
            text: text,
            author: authorId
        });
    }
}
