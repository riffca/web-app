<template>
	<div id="message">
		<div class="adress">
			<span>{{ message.fromUser }}</span>	
			<span>{{ message.toUser }}</span>
		</div>
		<div class="message">
			<h4>{{ message.title }}</h4>	
			<p>{{ message.text }}</p>
		</div>
	</div>
</template>
<script>
import Message from '../../class/message';

export default {
  props: ['messageinfo'],
  data(){
  	return {
  		message: ''
  	}
  },
  asyncData(resolve, reject){
  	resolve({
  		message: new Message(this.messageinfo);
  	})
  }
};
</script>

<style lang="sass">
#message {
	margin: 0 auto;
	max-width: 400px;
	background: lighten(black,30%); 
}

</style>