<template>
	  <part-brand></part-brand>
    <router-view></router-view>
    <user-basket :basket="userBasket"></user-basket>
    {{ user | json }}
</template>

<script>
//части
import userBasket from './view/user-basket';
import partBrand from './view/part-brand';
//классы
import Basket from './class/basket';

export default {
  components:{
    userBasket,
  	partBrand
  }, 
  replace: false,
  data () {
    return {
      user: ''
      userBasket:''
    };
  },
  asyncData(resolve, reject){
    Vue.http('/api/user').then(data=>{
      resolve({
        user: data.user,
        userBasket:new Basket()
      })
    });
  }
};
</script>

<style lang="sass">
#main-logo {
	display: inline-block;
}
</style>