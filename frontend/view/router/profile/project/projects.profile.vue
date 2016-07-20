<template>
	<div id="profile-projects">
        <project v-for="project in projects"
            :content="project">
        </project>
	</div>
</template>

<script>
import project from './project'; 

export default {
  components: {project},
  data () {
    return {
      projects: 10
    };
  },
  asyncData(resolve, reject){
  	let User = this.$parent.user;
  	console.log(User);
  	User.getProjectAll().then(data=>{
      resolve({
        projects: data.projects
      })
    });
  }
};
</script>

<style lang="sass">

</style>