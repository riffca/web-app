<template>
	<div id="message">
		<div class="message-content" v-if="!editing">
			<h4>{{ message.title }}</h4>	
			<p>{{ message.text }}</p>
			<button>Обновить</button>
		</div>

		<form-wrapper v-if="editing">		
			<form @submit.prevent="createUser()">
				<div class="input-control">
					<label for="title">Имя пользователя</label>
					<input type="text" id="title" v-model="title">
				</div>
				<div class="input-control">
					<label for="text">Почта</label>
					<input type="text" id="text" v-model="text">
				</div>
				<button type="submit">Готово</button>
			</form>
		</form-wrapper>
		<div class="message-adress">
			<span>{{ message.fromUser }}</span>	
			<span>{{ message.toUser }}</span>
		</div>
		<timestamps 
      		:timestamps="{createdAt: message.createdAt, 
                    	  updatedAt: message.updatedAt}">   
    	</timestamps>
	</div>
</template>
<script>

import timestamps from 'parts/timestamps';
import message from 'class/message';


export default {
  components: {timestamps},
  props: ['content'],
  data(){
  	return {
  		message: ''
  	}
  },
  asyncData(resolve, reject){
  	resolve({
  		message: new message(this.content)
  	})
  }
};
</script>

<style lang="sass">
#message {
	margin: 10px auto;
	max-width: 400px;
	background: lighten(black,90%);
	padding: 20px;
	border-radius: 2px;
	border: 1px solid lighten(black,70%);
	.message-content {

	} 
}

</style>