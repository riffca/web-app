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


    static create({title, description, creatorId}) {
        return Vue.http.post(path + '/create-project', {
            title: title,
            description: description,
            creator: creatorId
        });
    }
    static getAllUserProjects(userId){
        return Vue.http.get(path + '/get-all-user-projects/' + userId);
    }
    static getAllprojects(){
        return Vue.http.get(path + '/get-all-projects');
    }
    static getProject(id){
        return Vue.http.get(path + '/get-project/:id');
    }


    update() {
        return Vue.http.put(path + '/update-project/'+projectId);
    }
    delete() {
        return Vue.http.delete(path + '/delete-project/'+projectId);
    }
}