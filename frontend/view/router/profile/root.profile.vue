<template>
	<div id="profile">
		<h1>Профиль</h1>
		<h2>Привет {{username}}</h2>
    <nav-links title="profile page">
      <a v-link="{name:'Сообщения'}">Сообщения</a>
      <a v-link="{name:'Посты'}">Посты</a>
      <a v-link="{name:'Проекты'}">Проекты</a>
    </nav-links>
    <div class="profile-ui">
      <div class="left-column">

        <actions-panel title="Создать">
          <ul>
            <li class="action create-project">Проект</li>
            <li class="action write-post">Пост</li>
            <li class="action send-message">Сообщение</li>
          </ul>
        </actions-panel>

      </div>
      <div class="right-column">

		    <router-view></router-view>

      </div>
    </div>
	</div>
</template>

<script>
import actionsPanel from 'parts/actions-panel';
import navLinks from 'parts/nav-links';
import appMixin from '../../mixin';

import User from 'class/user';

export default {
  mixins:{appMixin},
  components: {
  	navLinks,
    actionsPanel
  },

  data () {
    return {
    	username: '',
      user: ''
    };
  },
  asyncData(resolve, reject){

  	let app = this.$root.app;

  	app.getAuthUser().then(data=>{
      let user = new User(data);
      
  		resolve({
  			username: user.username,
        user: user
  		})

  	});
  }
};
</script>

<style lang="sass">
#profile{
  position: relative;
  #actions-panel{
    flex-row: 40%;
  }

  .profile-ui{
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .left-column{
        flex-grow: 3;
    }
    .right-column{
        flex-grow:6;
    }
  }
}
</style>