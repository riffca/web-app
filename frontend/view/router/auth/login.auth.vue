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
import User from 'class/user';
import formWrapper from '../../parts/form-wrapper';
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
      let app = this.$root.app;
  		app.loginAccount({
  			email: this.email,
  			password: this.password
  		}).then(res=>{
        return app.getAuthUser();
  		}).then(res=>{
        this.$root.user = new User(res.user);
        this.$router.go({name: 'Профиль'});
      });
  	}
  }
};
</script>

<style lang="sass">
#login {

}
</style>