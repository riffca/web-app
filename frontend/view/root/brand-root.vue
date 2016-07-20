<template>
    <div id="brand">
		<div class="brand-logo">
			<h2>Проекты</h2>
		</div>
		<nav-links title="home page">
			<a v-link="{name: 'Регистрация'}">Регистрация</a>
			<a v-link="{name: 'Профиль'}">Профиль</a>
			<a v-link="{name: 'Админка'}">Админка</a>  
	    </nav-links>
    </div>
</template>

<script>
import navLinks from '../parts/nav-links';
export default {
  components:{navLinks},
  data () {
    return {
    	titles: [
    	]
    };
  },
  created(){
  	//console.log(this.$router)
  }
};
</script>
<style lang="sass">
	#brand{
		.brand-logo{
			span{
			font-weight: normal;
			}
		}
		#nav-links{

		}
	}
</style>