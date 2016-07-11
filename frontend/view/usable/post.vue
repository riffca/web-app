<template>
	<div id="post">
		<h3>{{post.title}}</h3>
		<p>{{post.text}}</p>	
	</div>
</template>
<script>
export default {
  props: ['post']
  data () {
    return {

    };
  }
};
</script>

<style lang="sass">
</style>