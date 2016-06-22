<template>
<div id="auth">
	<h1>Регистрация</h1>
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