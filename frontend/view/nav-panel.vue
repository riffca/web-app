<template>
	<div id="nav-panel">
		<span>Hавигация</span>
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
#nav-panel {
	background: rgba(grey, .3)
	span {
		font-weight: bold;
		font-size: 1.2rem;
	}
}


</style>