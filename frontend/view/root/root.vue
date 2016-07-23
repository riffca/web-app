<template>
	  <brand-root :currenttitel.sync="currentTitle"></brand-root>
    <router-view title="currentTitle"></router-view>
</template>

<script>
//helper
import jsonHelper from '../../help/json';

//html части
import UserRoot from './user.root';
import BrandRoot from './brand-root';

//классы
import App from '../../class/app';
import User from '../../class/user';

export default {
  replace: false,
  components:{
    BrandRoot,
    UserRoot
  }, 
  data () {
    return {
      currentTitle: 'Главная', 
      app: '',
      user: ''
    };
  },
  asyncData(resolve, reject){
    //Создаем приложение
    let app = new App();

    logger('(Create app object)App',()=>{
      console.log(jsonHelper(app));
    })

    app.getAuthUser().then(data=>{

        logger('(Create app object)App',()=>{
            console.log(jsonHelper(app));
        })
        resolve({
            app: app,
            user: data.success ? data.user : ''
        })
    });
  }
};
</script>

<style lang="sass">
</style>