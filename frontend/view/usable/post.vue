<template>
	<div id="post">
		<div class="post-content">
			<p>{{post.text}}</p>	
			<h3>{{post.title}}</h3>	
		</div>
		<div class="post-author">	
			<h4>{{post.author}}</h3>	
		</div>
	</div>
</template>
<script>
import Post from '../../class/post';


export default {
  props: ['postinfo'],
  data(){
  	return {
  		post: ''
  	}
  },
  asyncData(resolve, reject){
  	resolve({
  		post: new Post(this.postinfo);
  	})
  }
};
</script>

<style lang="sass">
#post {
	margin: 0 auto;
	max-width: 400px;
	background: lighten(black,30%); 
}

</style>