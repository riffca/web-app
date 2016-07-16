<template>
  <div id="project">
    <h3>{{project.title}}</h3>
    <p>{{project.text}}</p>

    <timestamps 
          :timestamps="{createdAt: project.createdAt, 
                          updatedAt: project.updatedAt}">   
      </timestamps>  
  </div>
</template>
<script>

import timestamps from 'parts/timestamps';
import project from 'class/project';


export default {
  components: {timestamps},
  props: ['content'],
  data(){
    return {
      project: ''
    }
  },
  asyncData(resolve, reject){
    resolve({
      project: new project(this.content)
    })
  }
};
</script>

<style lang="sass">
#project {
  margin: 0 auto;
  max-width: 400px;
  background: lighten(black,10%);
  border-radius: 2px;
  border: 1px solid black;
  .project-content {

  } 
}

</style>