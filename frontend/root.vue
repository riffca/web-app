<template>
	  <part-brand></part-brand>
    <router-view></router-view>
    <user-basket :basket="userBasket"></user-basket>
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
      userBasket:''
    };
  },
  asyncData(resolve, reject){
    resolve({
      userBasket:new Basket({
        items:[
          {name: 'stas'},
          {name: 'stasik'}
        ]
      })
    })
  }
};
</script>

<style lang="sass">
#main-logo {
	display: inline-block;
}
</style>