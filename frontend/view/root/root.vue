<template>
{{user | json}}
	  <brand-root :currenttitel.sync="currentTitle"></brand-root>
    <router-view title="currentTitle"></router-view>
</template>

<script>
//helper
import jsonHelper from 'help/json';

//html части
import UserRoot from './user.root';
import BrandRoot from './brand-root';

//классы
import App from 'class/app';
import User from 'class/user';

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
    logger('Create App object',()=>{
      console.log(jsonHelper(app));
    })

    //Получаем юзера
    app.getAuthUser().then(resData=>{

        let user = app.user = new User(resData.user);
        
        if(!resData.success){
          resolve({
            app: app,
            user: user
          })
        }

        resolve({
            app: app,
            user: user
        })
        logger('Create User object',()=>{
            console.log(jsonHelper(user));
        })
    })
  }
};
</script>

<style lang="sass">
</style>