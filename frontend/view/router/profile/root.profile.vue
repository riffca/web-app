<template>
	<div id="profile">
		<h1>Профиль</h1>
		<nav-panel>
			<div class="links-wrapper">
				<a v-link="{name: 'userProfile',params: {username: 'stas'}}">Info</a>
				<a v-link="{name: 'messagesProfile'}">Сообщения</a>
				<a v-link="{name: 'albumProfile'}">Фото</a>
		    </div>	
		<nav-panel>
		<router-view></router-view>
	</div>
</template>

<script>


import navPanel from '../../usable/nav-panel';
import mixin from '../../mixin';
export default {

  components: {
  	navPanel
  },

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>