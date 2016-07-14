<template>
	<div id="profile">
		<h1>Профиль</h1>
		<h2>Привет {{username}}</h2>
    <nav-links title="profile page">
      <a v-link="{name:'messages'}">Сообщения</a>
      <a v-link="{name:'posts'}">Посты</a>
      <a v-link="{name:'projects'}">Проекты</a>
    </nav-links>
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