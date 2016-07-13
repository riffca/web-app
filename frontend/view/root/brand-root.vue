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
		<nav-links>
			<a v-link="{name: 'auth'}">Регистрация</a>
			<a v-link="{name: 'profile'}">Профиль</a>
			<a v-link="{name: 'admin'}">Admin</a>  
	    </nav-links>
    </div>
</template>

<script>
import navLinks from '../usable/nav-links';
export default {
  componets:{navLinks},
  data () {
    return {

    };
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