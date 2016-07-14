<template>
    <div id="brand">
	    <h1>
			<div class="brand-logo">
				Маркетинговая веб студия
				<span>Go</span>
				<span>Web</span>
			</div>
			<h2>Создание коммерских веб приложений</h2>
		</h1>
		<nav-links title="home page">
			<a v-link="{name: 'Регистрация'}">Регистрация</a>
			<a v-link="{name: 'Профиль'}">Профиль</a>
			<a v-link="{name: 'Админка'}">Админка</a>  
	    </nav-links>
    </div>
</template>

<script>
import navLinks from '../usable/nav-links';
export default {
  components:{navLinks},
  data () {
    return {
    	titles: [


    	]
    };
  },
  created(){
  	console.log(this.$router)
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
	}
</style>