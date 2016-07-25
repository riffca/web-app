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

        //not auth unknown user
        if(!resData.success){
          let user = new User({
              id: 'unknown',
              username: 'unknown',
              email: 'unknow',
              auth: false
          });
          app.user = user.id;
          resolve({
            app: app,
            user: user
          })
          logger('Create User object',()=>{
            console.log(jsonHelper(user));
          })
          return;
        }

        //auth user
        let user = new User(resData.user);
        app.user = user.id;
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