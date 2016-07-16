<template>
  <div id="profile-posts">
        <post v-for="post in posts"
            :content="post">
        </post>
  </div>
</template>

<script>
import User from 'class/user';
import post from './post'; 

export default {
  components: {post},
  data () {
    return {
      posts: 10
    };
  },
  asyncData(resolve, reject){
    User.getPosts().then(data=>{
      resolve({
        posts: data.posts
      })
    });
  }
};
</script>

<style lang="sass">
</style>