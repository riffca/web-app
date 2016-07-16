<template>
	<div id="nav-links">
		<span class="title">{{ title }}</span>
		<slot></slot>
	</div>
</template>

<script>

export default {
	props: ['title']
};
</script>

<style lang="sass">
#nav-links {
	max-width:70%;
	background: rgba(black,.2);
	span {
		font-weight: bold;
		font-size: 1.2rem;
	}
	.title {
		border-right: 1px solid black;
		border-bottom: 1px solid black;
	}
	a{
		margin: 10px;
		text-decoration: none;
		font-size: 1.2rem;
	}
}
</style>