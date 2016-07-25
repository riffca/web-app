<template>
<div id="write-post">
	<h3>Написать пост</h3>
	<form-wrapper>		
		<form @submit.prevent="$root.user.writePost({
				title: title,
				text: text})">
			<div class="input-control">
				<label for="title">Заголовок</label>
				<input type="text" id="title" v-model="title">
			</div>
			<div class="input-control">
				<label for="text">Текст</label>
				<input type="text" id="text" v-model="text">
			</div>
			<button type="submit">Готово</button>
		</form>
	</form-wrapper>
</div>
</template>
<script>
import formWrapper from 'parts/form-wrapper';

export default {
  props: ['author-id'],
  components: {formWrapper},
  data () {
    return {
       text: '',
       title:''
    };
  }
};
</script>

<style lang="sass">
</style>