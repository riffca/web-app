<template>
	<div id="user-basket">
		<h1>Корзина</h1>
		<div v-for="item in basket.items">
			{{ item.name }}
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