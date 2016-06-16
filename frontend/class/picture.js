export default class Picture {
	constructor({album, id }){
		this.mini = mini;
		this.full = full;
		this.album = album;
		this.id = id;
		this.show = '';
	}
	show(){
		this.show = !this.show;
	}
}