<template>
<div id="send-project">
	<h3>Отправить сообщение</h3>
	<form-wrapper>		
		<form @submit.prevent="createUser()">
			<div class="input-control">
				<label for="text">Имя пользователя</label>
				<input type="text" id="text" v-model="text">
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
  props: ['to-user', 'from-user'],
  components: {modalWindow, formWrapper},
  data () {
    return {
    	text: '',
    	fromUser: '',
    	toUser:''
    };
  }
};
</script>

<style lang="sass">
#send-message{

}
</style>