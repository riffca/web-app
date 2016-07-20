<template>
<div id="click-button">
	<slot></slot>	
</div>
</template>

<script>
export default {
  data () {
    return {
		
    };
  }
};
</script>

<style lang="sass">
#click-button {
	display: inline-block;
	cursor: pointer;
}
</style>