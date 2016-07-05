<template>
	<div id="form-wrapper">
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
#form-wrapper {
	max-width: 60%;
	margin: 0 auto;
	form {
		max-width: 300px;
		margin: inherit;
		.input-control{
			text-align: center;
			label, input {
				display: block;
			}
			label{
				font-size: 1.3rem;
			}
			input{
				height: 50px;
				text-align: inherit;
				width: 100%;
				font-size: 2rem;
				font-weight: 100;
				border:none;
				box-shadow: 1px 1px 2px black;
				&:focus,
				&:active {
					outline: none;
				}
			}
		}
		button{
			font-size: 1.2rem;
			display: inline-block;
			position: relative;
			margin-left: 50%;
			margin-top: 10px;
			height: 30px;
			width: 100px;
			&:focus,
			&:active{
				outline: none;
				box-shadow: none;
			}
		}
	}
}

</style>