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

import timestamps from '../../../parts/timestamps';
import Project from '../../../../class/project';

export default {
  components: {timestamps},
  props: ['projectinfo'],
  data(){
  	return {
  		project: ''
  	}
  },
  asyncData(resolve, reject){
  	resolve({
  		project: new Project(this.projectinfo)
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