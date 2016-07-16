<template>
	<div id="post">
		<div class="post-content">
			<h3>{{post.title}}</h3>
			<p>{{post.text}}</p>
		</div>

		<div class="post-author">	
			<h4>{{post.author}}</h3>	
		</div>

		<timestamps 
      		:timestamps="{createdAt: post.createdAt, 
                    	  updatedAt: post.updatedAt}">   
    	</timestamps>	
	</div>
</template>
<script>

import timestamps from '../../../parts/timestamps';
import post from '/../../class/post';


export default {
  components: {timestamps},
  props: ['postcontent'],
  data(){
  	return {
  		post: ''
  	}
  },
  asyncData(resolve, reject){
  	resolve({
  		post: new post(this.postcontent);
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