<template>
	<div id="user-basket">
		<h1>Корзина</h1>
		basket: {{ basket | json }}
		<div v-for="user in basket.users">
			{{ user.name }}
		</div>
	</div>
</template>

<script>
export default {
  props: ['basket'],
  data () {
    return {
    };
  }
};
</script>

<style lang="sass">
	#user-basket{
		text-align: center;
	}
</style>