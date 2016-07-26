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
      projects: ''
    };
  },
  asyncData(resolve, reject){
  	let User = this.$root.user;
  	User.getAllProjects().then(projects=>{
      resolve({
        projects: projects
      })
    });
  }
};
</script>

<style lang="sass">

</style>