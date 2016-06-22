<template>
	<div id="user-root">
		{{ user | json }}	
	</div>
</template>
<script>
export default {
  props: ['user'],
  data () {
    return {

    };
  }
};
</script>

<style lang="sass">
</style>