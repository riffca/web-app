<template>
	<div id="post">
		<h3>{{post.title}}</h3>
		<p>{{post.text}}</p>

		<timestamps 
      		:timestamps="{createdAt: post.createdAt, 
                          updatedAt: post.updatedAt}">   
    	</timestamps>	
	</div>
</template>
<script>

import timestamps from 'parts/timestamps';
import post from 'class/post';


export default {
  components: {timestamps},
  props: ['content'],
  data(){
  	return {
  		post: ''
  	}
  },
  asyncData(resolve, reject){
  	resolve({
  		post: new post(this.content)
  	})
  }
};
</script>

<style lang="sass">
#post {
	margin: 0 auto;
	max-width: 400px;
	background: lighten(black,10%);
	border-radius: 2px;
	border: 1px solid black;
	.post-content {

	} 
}

</style>