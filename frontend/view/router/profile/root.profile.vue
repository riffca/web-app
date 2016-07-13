<template>
	<div id="profile">
		<h3>Профиль</h3>
		<h2>Hello {{username}}</h2>
		<nav-links>
			<div class="links-wrapper">
				<a v-link="{name: 'messages'}">Сообщения</a>
        <a v-link="{name: 'posts'}">Посты</a>
        <a v-link="{name: 'projects'}">Проекты</a>
		    </div>	
		<nav-links>
    {{ user | json}}
		<router-view></router-view>
	</div>
</template>

<script>


import navLinks from '../../usable/nav-links';
import appMixin from '../../mixin';

export default {
  mixins:{appMixin},

  components: {
  	navLinks
  },

  data () {
    return {
    	username: '',
      user: ''
    };
  },
  asyncData(resolve, reject){
  	let app = this.$root.app;
  	app.getUser().then(user=>{
  		resolve({
  			username: user.username,
        user: user
  		})
  	});
  }
};
</script>

<style lang="css" scoped>
</style>