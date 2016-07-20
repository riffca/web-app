<template>
<div id="write-post">
	<form-wrapper>		
		<form @submit.prevent="writePost()">
			<div class="input-control">
				<label for="title">Заголовок</label>
				<input type="text" id="title" v-model="title">
			</div>
			<div class="input-control">
				<label for="text">Текст</label>
				<input type="text" id="text" v-model="text">
			</div>
			<div class="input-control">
				<label for="authorId">Автор</label>
				<input type="text" id="authorId" v-model="authorId">
			</div>
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
       authorId: '',
       text: '',
       title:''
    };
  }
};
</script>

<style lang="sass">
</style>