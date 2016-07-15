<template>
	<div id="project">
    <div class="project-content">
		  <h3>{{project.title}}</h3>
		  <p>{{project.text}}</p> 
    </div>
    <timestaps :timestamps="{createdAt: project.createdAt, updatedAt: project.updatedAt}"></timestaps>	
	</div>
</template>
<script>
import Project from '../../class/project';


export default {
  props: ['projectinfo'],
  data(){
  	return {
  		project: ''
  	}
  },
  asyncData(resolve, reject){
  	resolve({
  		project: new Project(this.projectinfo);
  	})
  }
};
</script>

<style lang="sass">
#project {
	margin: 0 auto;
	max-width: 400px;
	background: lighten(black,30%); 
}

</style>