<template>
	<div id="message">
		<div class="adresses-block">
			<span>{{ message.from }}</span>	
			<span>{{ message.to }}</span>
		</div>
		<div class="message">
			<h4>{{ message.title }}</h4>	
			<p>{{ message.text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['message']
};
</script>
<style lang="sass">
	#message {
		margin: 0 auto;
		max-width: 400px;
	}
</style>