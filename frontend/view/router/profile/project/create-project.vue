<template>
<div id="create-project">
	<form-wrapper>		
		<form @submit.prevent="createProject()">
			<div class="input-control">
				<label for="title">Название</label>
				<input type="text" id="title" v-model="title">
			</div>
			<div class="input-control">
				<label for="description">Описание</label>
				<input type="text" id="description" v-model="description">
			</div>
			<input type="hidde" v-model="owner">
			<button type="submit">Готово</button>
		</form>
	</form-wrapper>
</div>
</template>
<script>
import formWrapper from 'parts/form-wrapper';
import modalWindow from 'parts/modal-window';

export default {
  components: {modalWindow, formWrapper},
  data () {
    return {
    	title: '',
    	description: ''
    };
  }
};
</script>

<style lang="sass">
</style>