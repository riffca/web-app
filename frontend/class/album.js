export default class Album {
	constructor({name, picturies = []}){
		this.name = name;
		this.picturies = picturies;
	}

	getPicturies(name){
		return Vue.http('/api/album/'+ name).then((response)=>{
			let data = response.data;
			this.picturies = data;
			return data;
		});
	}
	open(){}
	close(){}
}