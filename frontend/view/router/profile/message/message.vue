<template>
	<div id="message">
		<div class="message-content">
			<h4>{{ message.title }}</h4>	
			<p>{{ message.text }}</p>
		</div>
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
	margin: 0 auto;
	max-width: 400px;
	background: lighten(black,10%);
	border-radius: 2px;
	border: 1px solid black;
	.message-content {

	} 
}

</style>