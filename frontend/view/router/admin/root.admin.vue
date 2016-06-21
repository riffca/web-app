<template>
	<div id="root-admin">
		<h1>Админка</h1>
		<nav-links>
			<a v-link="{name: 'content.admin'}">Контент</a>
			<a v-link="{name: 'statistic.admin'}">Статистика</a>
			<a v-link="{name: 'users.admin'}">Пользователи</a>
		</nav-links>	
		<router-view></router-view>
	</div>
</template>

<script>
import navLinks from '../../usable/nav-links';
export default {
  components: {navLinks},
  data () {
    return {
    };
  }
};
</script>

<style lang="sass">
</style>