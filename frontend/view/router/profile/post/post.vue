<template>
	<div id="post">
		<div class="post-content" v-if="!editing">
			<h3>{{post.title}}</h3>
			<p>{{post.text}}</p>
			<span class="post-author">
				{{post.author}}
			</span>
			<span v-if="user.hasPost()" @click="editing=!editing">Редактировать</span>
		</div>
		<form-wrapper v-if="editing">		
			<form @submit.prevent="post.updatePost({
						title: title,
						text: text })">
				<div class="input-control">
					<label for="title">Заголовок</label>
					<input type="text" id="title" v-model="title">
				</div>
				<div class="input-control">
					<label for="text">Текст</label>
					<input type="text" id="text" v-model="text">
				</div>
				<button type="submit">Готово</button>
				<button @click="post.delete()"></button>
			</form>
		</form-wrapper>
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