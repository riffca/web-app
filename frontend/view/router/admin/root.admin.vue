<template>
	<div id="root-admin">
		<h1>Админка</h1>
		<nav-links title="admin page">
			<a v-link="{name: 'content.admin'}">Контент</a>
			<a v-link="{name: 'statistic.admin'}">Статистика</a>
			<a v-link="{name: 'users.admin'}">Пользователи</a>
		</nav-links>	
		<router-view></router-view>
	</div>
</template>

<script>
import navLinks from '../../parts/nav-links';
import appMixin from '../../mixin';

export default {
  mixins:{appMixin},
  components: {navLinks},
  data () {
    return {
    };
  }
};
</script>

<style lang="sass">
</style>