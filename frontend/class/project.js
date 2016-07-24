const serverName = 'localhost:3000';
const path = '/api/project';

export default class {
    
    constructor({
        title,
        description,
        created,
        updated
    }) {
        this.title = title;
        this.description = description;
        this.created = created;
        this.update = updated;
    }
    static create({title, desription, creatorId}) {
        return Vue.http.post(path + '/create-project', {
            title: title,
            description: description,
            creator: creatorId
        });
    }
    static getAll(){
        return Vue.http.get(path + '/get-project/all');
    }
    static getOne(id){
        return Vue.http.get(path + '/get-project/:id');
    }
    update() {
        return Vue.http.put(path + '/create-project');
    }
    delete() {
        return Vue.http.delete(path + '/create-project');
    }
}