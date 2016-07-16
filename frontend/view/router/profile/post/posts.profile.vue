<template>
  <div id="profile-posts">
        <post v-for="post in posts"
            :content="post">
        </post>
  </div>
</template>

<script>
import post from './post'; 

export default {
  components: {post},
  data () {
    return {
      posts: 10
    };
  },
  asyncData(resolve, reject){
    let User = this.$parent.user;
    User.getPostAll().then(data=>{
      resolve({
        posts: data.posts
      })
    });
  }
};
</script>

<style lang="sass">
</style>