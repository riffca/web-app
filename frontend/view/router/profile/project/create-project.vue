<template>
{{$data | json}}
<div id="create-project">
	<h3>Создать проект</h3>
	<form-wrapper>		
		<form @submit.prevent="createProject({
				title: title,
				description: description})">
			<div class="input-control">
				<label for="title">Название</label>
				<input type="text" id="title" v-model="title">
			</div>
			<div class="input-control">
				<label for="description">Описание</label>
				<input type="text" id="description" v-model="description">
			</div>
			<button type="submit">Готово</button>
		</form>
	</form-wrapper>
</div>
</template>
<script>
import formWrapper from 'parts/form-wrapper';

export default {
  components: {formWrapper},
  data () {
    return {
    	title: '',
    	description: ''
    };
  },
  methods:{
  	createProject(options){
  		this.$root.user
	  	  .createProject(options)
	      .then(data=>{})
  	}
  }
};
</script>

<style lang="sass">
</style>