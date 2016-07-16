<template>
	<div id="profile-messages">
        <message v-for="message in messages"
            :content="message">
        </message>
	</div>
</template>

<script>
import message from './message'; 
import User from 'class/user';

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