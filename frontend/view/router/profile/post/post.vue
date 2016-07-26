<template>
	<div id="post">
		<div class="post-content" v-if="!editing">
			<h3>{{post.title}}</h3>
			<p>{{post.text}}</p>
			<span class="post-author">
				{{post.author.email }}
			</span>
			<button @click="editing = !editing">Править</button>
		</div>
		<form-wrapper v-if="editing" class="post-edit">		
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
				<button type="submit" @click="editing = !editing">Готово</button>
				<button @click="post.delete()">Удалить</button>
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
  		post: '',
  		editing: false
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
	margin-bottom: 10px;
	margin-right: auto;
	margin-left: auto; 
	max-width: 400px;
	padding: 20px;
	border-radius: 2px;
	background: lighten(black,90%);
	border: 1px solid lighten(black,70%);
	button {
		box-sizing: border-box;
		height: 30px;
		width: 70px;
		padding: 5px;
		border:none;
		&:hover {
			background: lighten(darkblue,70%);
		}
		&:focus,
		&:hover,
		&:active {
			outline:none;
		}
	}

	.post-edit {

	}
	.post-content {

	} 
}

</style>