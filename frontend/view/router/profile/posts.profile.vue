<template>
	<div id="profile-posts">
		<post v-for="post in posts"
			  :post="post">	
		</post>
	</div>
</template>

<script>
import Post from '../../usable/post'; 

export default {
  components: {Post},
  data () {
    return {

    };
  }
};
</script>

<style lang="sass">
</style>