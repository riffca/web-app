<template>
	<div id="root-admin">
		<h2>Админка</h2>
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
#root-admin {
	h2{
		text-align: left;
	}
	position: relative;
}
</style>