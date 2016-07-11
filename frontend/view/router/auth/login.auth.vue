<template>
	<div id="login">
		<h1>Вход в приложение</h1>		
		<form-wrapper>		
			<form @submit.prevent="login()">
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
import formWrapper from '../../usable/form-wrapper';
export default {
  components:{formWrapper},
  data () {
    return {
    	email:'',
    	password:''
    };
  },
  methods:{
  	login(){
  		this.$root.app.loginAccount({
  			email: this.email,
  			password: this.password
  		}).then(res=>{
        this.$router.go({name: 'profile'});
  		})
  	}
  }
};
</script>

<style lang="sass">
#login {

}
</style>