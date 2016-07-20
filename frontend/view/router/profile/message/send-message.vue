<template>
<div id="send-project">
	<form-wrapper>		
		<form @submit.prevent="createUser()">
			<div class="input-control">
				<label for="text">Имя пользователя</label>
				<input type="text" id="text" v-model="text">
			</div>
			<div class="input-control">
				<label for="toUser">Почта</label>
				<input type="text" id="toUser" v-model="toUser">
			</div>
			<div class="input-control">
				<label for="fromUser">Пароль</label>
				<input type="text" id="fromUser" v-model="fromUser">
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