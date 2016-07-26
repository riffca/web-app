<template>
	<div id="signup">
		<h1>Новый пользователь</h1>		
		<form-wrapper>		
			<form @submit.prevent="createUser()">
				<div class="input-control">
					<label for="username">Имя пользователя</label>
					<input type="text" id="username" v-model="username">
				</div>
				<div class="input-control">
					<label for="email">Почта</label>
					<input type="text" id="email" v-model="email">
				</div>
				<div class="input-control">
					<label for="password">Пароль</label>
					<input type="text" id="password" v-model="password">
				</div>
				<button type="submit">Готово</button>
			</form>
		</form-wrapper>
	</div>
</template>

<script>

import formWrapper from '../../parts/form-wrapper';
export default {
  components: { formWrapper },
  data () {
    return {
    	email:'',
    	password: '',
    	username: ''
    };
  },
  methods: {
  	createUser(){
  		this.$root.app.createAccount({
  			email: this.email,
  			password: this.password,
  			username: this.username
  			}).then(res=>{
  				this.$route.router.go({name: 'login'});
  			});
  	}
  }
};
</script>

<style lang="sass">
</style>