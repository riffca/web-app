<template>
	<div id="post">
		<h3>{{post.title}}</h3>
		<p>{{post.text}}</p>	
	</div>
</template>
<script>
export default {
  props: ['post']
};
</script>

<style lang="sass">
#post {
	margin: 0 auto;
	max-width: 400px;
	background: lighten(black,30%); 
}

</style>