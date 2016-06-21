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
		<div class="links-wrapper">
			<a v-link="{name: 'contacts'}">Контакты</a>
			<a v-link="{name: 'index'}">Индекс</a>
			<a v-link="{name: 'auth'}">Регистрация</a>
			<a v-link="{name: 'profile'}">Профиль</a>
			<a v-link="{name: 'admin'}">Admin</a>  
	    </div>
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
	#brand{
		.brand-logo{

			span{
			font-weight: normal;
			}
		}


	}
</style>