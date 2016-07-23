<template>
<div id="modal-window">
	<div class="modal-target" v-if="!show">
		<span @click="show=!show">{{ action }}</span>
	</div>
	<div class="modal-content" v-if="show">
		<div class="content-head">
			<slot name="head"></slot>	
		</div>
		<div class="content-body">
			<slot name="body"></slot>
		</div>
		<click-button @click="show=!show">Закрыть</click-button>	
	</div>
</div>

</template>

<script>
import clickButton from './click-button';
export default {
  props: {
  	action:String
  },
  data () {
    return {
		show: false
    };
  }
};
</script>

<style lang="sass">
#modal-window{
	.modal-target {
		span{
			margin:8px;
			font-size: 1.3rem;
			cursor: pointer;
			&:hover {
				background: white;
			}
		}
	}
	.modal-content{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: white;
	}
}
</style>