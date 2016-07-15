const serverName = 'localhost:3000';
const path = '/api/project';

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
        return Vue.http.get(path + '/get-project/all');
    }
    getOne(id){
        return Vue.http.get(path + '/get-project/:id');
    }
    create() {
        return Vue.http.post(path + '/create-project', {
            title: title,
            text: text,
        });
    }
    update() {
        return Vue.http.put(path + '/create-project');
    }
    delete() {
        return Vue.http.delete(path + '/create-project');
    }
}