<template>
	<div id="profile">
		<h2>Профиль</h2>
		<h3>Привет {{username}}</h3>
    <nav-links title="profile page">
      <a v-link="{name:'Сообщения'}">Сообщения</a>
      <a v-link="{name:'Посты'}">Посты</a>
      <a v-link="{name:'Проекты'}">Проекты</a>
    </nav-links>
    <div class="profile-ui">

      <!--LEFT COLUMN -->
      <div class="left-column">
        <actions-panel title="Создать">
          <ul>
            <li class="action create-project">
              <modal-window action="Проект">
                

              </modal-window>
            </li>
            <li class="action write-post">
              <modal-window action="Пост">
                

              </modal-window>
            </li>
            <li class="action send-message">
              <modal-window action="Сообщение">
                

              </modal-window>
            </li>
          </ul>
        </actions-panel>
      </div>

      <!--RIGHT COLUMN -->
      <div class="right-column">
		    <router-view></router-view>
      </div>
    </div>

	</div>
</template>

<script>
import appMixin from '../../mixin';

//parts
import actionsPanel from 'parts/actions-panel';
import navLinks from 'parts/nav-links';
import modalWindow from 'parts/modal-window';

import User from 'class/user';

export default {
  mixins:{appMixin},
  components: {
    modalWindow,
  	navLinks,
    actionsPanel,
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
      if(!this.$root.user.auth){
          let user = new User(data);
          resolve({
          username: user.username,
          user: user
        })
      }
      
  	});
  }
};
</script>

<style lang="sass">
#profile{
  position: relative;
  h2{
    text-align: left;
  }
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