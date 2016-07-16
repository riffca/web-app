<template>
	<div id="profile-messages">
        <message v-for="message in messages"
            :messageinfo="message">
        </message>
	</div>
</template>

<script>
import message from './message'; 

export default {
  components: {message},
  data () {
    return {
      messages: 10
    };
  },
  asyncData(resolve, reject){
  	User.getMessages().then(data=>{
      resolve({
        messages: data.messages
      })
    });
  }
};
</script>

<style lang="sass">
</style>