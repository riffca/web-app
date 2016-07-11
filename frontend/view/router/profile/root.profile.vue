<template>
	<div id="profile">
		<h3>Профиль</h3>
		<h2>Hello {{username}}</h2>
		<nav-links>
			<div class="links-wrapper">
				<a v-link="{name: 'userProfile',params: {username: 'stas'}}">Info</a>
        <a v-link="{name: 'posts'}">Посты</a>
		    </div>	
		<nav-links>
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
    	username: ''
    };
  },
  asyncData(resolve, reject){
  	let app = this.$root.app;
  	app.getUser().then(data=>{
  		resolve({
  			username: data.username
  		})
  	});
  }
};
</script>

<style lang="css" scoped>
</style>