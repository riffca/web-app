<template>
	<div id="profile">
		<h1>Профиль</h1>
		<nav-links>
			<div class="links-wrapper">
				<a v-link="{name: 'userProfile',params: {username: 'stas'}}">Info</a>
				<a v-link="{name: 'messagesProfile'}">Сообщения</a>
				<a v-link="{name: 'albumProfile'}">Фото</a>
		    </div>	
		<nav-links>
		<router-view></router-view>
	</div>
</template>

<script>


import navLinks from '../../usable/nav-links';
import mixin from '../../mixin';
export default {

  components: {
  	navLinks
  },

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>