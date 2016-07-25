<template>
    <div id="brand">
		<div class="brand-logo">
			<h2>Проекты<log-out></log-out></h2>

		</div>
		<nav-links title="home page">
			<a v-link="{name: 'Регистрация'}">Регистрация</a>
			<a v-link="{name: 'Профиль'}">Профиль</a>
			<!-- <a v-link="{name: 'Админка'}">Админка</a>  --> 
	    </nav-links>
    </div>
</template>

<script>
import logOut from 'parts/log-out';
import navLinks from 'parts/nav-links';
export default {
  components:{navLinks, logOut},
  created(){
  	//console.log(this.$router)
  }
};
</script>
<style lang="sass">
	#brand{
		.brand-logo{
			h2{
				text-align: left;
			}
			span{
			font-weight: normal;
			}
		}
		#nav-links{
		}
	}
</style>