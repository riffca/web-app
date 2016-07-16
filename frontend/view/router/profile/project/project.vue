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
    User.getprojects().then(data=>{
      resolve({
        projects: data.projects
      })
    });
  }
};
</script>

<style lang="sass">
</style>