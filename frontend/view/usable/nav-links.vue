<template>
	<div id="nav-links">
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
#nav-links {
	background: rgba(grey, .3)
	span {
		font-weight: bold;
		font-size: 1.2rem;
	}
}


</style>