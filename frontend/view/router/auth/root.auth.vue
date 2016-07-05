<template>
<div id="auth">
	<h1>Регистрация</h1>
	<a v-link="{name: 'signup'}">Зарегистрироваться</a>
	<a v-link="{name: 'login'}">Войти</a>
	<router-view></router-view>
</div>
</template>

<script>
import appMixin from '../../mixin';

export default {
  mixins:{appMixin},
  data () {
    return {
    };
  }
};
</script>

<style lang="sass">
#auth {
	
}
</style>