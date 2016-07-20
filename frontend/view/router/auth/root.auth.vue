<template>
<div id="auth">
	<h1>Регистрация</h1>
	<nav-links title="auth page">
		<a v-link="{name: 'signup'}">Зарегистрироваться</a>
		<a v-link="{name: 'login'}">Войти</a>
	</nav-links>
	<router-view></router-view>
</div>
</template>

<script>
import appMixin from '../../mixin';
import navLinks from '../../parts/nav-links';

export default {
  components: {navLinks},
  mixins:{appMixin},
  data () {
    return {
    };
  }
};
</script>

<style lang="sass">
#auth {
	position: relative;
}
</style>