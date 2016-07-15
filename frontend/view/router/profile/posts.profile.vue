<template>
	<div id="profile-posts">
		<post v-for="post in posts"
			  :post="post">	
		</post>
	</div>
</template>

<script>
import PostComp from '../../usable/post'; 

export default {
  components: {PostComp},
  data () {
    return {

    };
  },
  asyncData(resolve, reject){
  	User.getAllPosts
  }
};
</script>

<style lang="sass">
</style>