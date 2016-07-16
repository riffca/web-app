<template>
	<div id="project">
  
    <div class="project-content">
		  <h3>{{project.title}}</h3>
		  <p>{{project.text}}</p> 
    </div>

    <timestamps 
      :timestamps="{createdAt: project.createdAt, 
                    updatedAt: project.updatedAt}">   
    </timestamps>	
	</div>
</template>

<script>
import User from 'class/user';
import project from './project'; 

export default {
  components: {project},
  data () {
    return {
      projects: 10
    };
  },
  asyncData(resolve, reject){
  	User.getProjects().then(data=>{
      resolve({
        projects: data.projects
      })
    });
  }
};
</script>

<style lang="sass">
</style>