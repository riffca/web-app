<template>
	<div id="profile">
		<h1>Профиль</h1>
		<h2>Привет {{username}}</h2>
    <nav-links title="profile page">
      <a v-link="{name:'Сообщения'}">Сообщения</a>
      <a v-link="{name:'Посты'}">Посты</a>
      <a v-link="{name:'Проекты'}">Проекты</a>
    </nav-links>
    {{ user | json}}
		<router-view></router-view>
	</div>
</template>

<script>

import navLinks from 'parts/nav-links';
import appMixin from '../../mixin';

import User from 'class/user';

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

  	app.getUser().then(data=>{
      let user = new User(data);
      
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