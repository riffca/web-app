<template>
	<div id="profile">
		<h2>Профиль</h2>
		<h3>Привет {{user.username}}</h3>
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
            <!--Создать проект-->
            <li v-link="{query: {create: 'project'}}" class="action create-project">
              <modal-window action="Проект">
                <div slot="head">Создать проект</div>
                <div slot="body">
                  <form-wrapper>    
                    <form @submit.prevent="user.createProject()">
                      <div class="input-control">
                        <label for="title">Название</label>
                        <input type="text" id="title" v-model="title">
                      </div>
                      <div class="input-control">
                        <label for="description">Описание</label>
                        <input type="text" id="description" v-model="description">
                      </div>
                      <button type="submit">Готово</button>
                    </form>
                  </form-wrapper>
                </div>
              </modal-window>
            </li>
            <!--Написать пост-->
            <li class="action write-post">
              <modal-window action="Пост">
                <div slot="head">Написать пост</div>
                <div slot="body">
                  <form-wrapper>    
                    <form @submit.prevent="createUser()">
                      <div class="input-control">
                        <label for="title">Заголовок</label>
                        <input type="text" id="title" v-model="title">
                      </div>
                      <div class="input-control">
                        <label for="text">Текст</label>
                        <input type="text" id="text" v-model="text">
                      </div>
                      <button type="submit">Готово</button>
                    </form>
                  </form-wrapper>
                </div>
              </modal-window>
            </li>
            <!--Отправить сообщение-->
            <li class="action send-message">
              <modal-window action="Сообщение">
                <div slot="head">Отправить сообщение</div>
                <div slot="body">
                  <form-wrapper>    
                    <form @submit.prevent="createUser()">
                      <div class="input-control">
                        <label for="text">Текст сообщения</label>
                        <input type="text" id="text" v-model="text">
                      </div>
                      <button type="submit">Готово</button>
                    </form>
                  </form-wrapper>
                </div>
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
import formWrapper from 'parts/form-wrapper';

import User from 'class/user';

export default {
  mixins:{appMixin},
  components: {
    modalWindow,
  	navLinks,
    actionsPanel,
    formWrapper
  },

  data () {
    return {
      user: ''
    };
  },
  asyncData(resolve, reject){
  	let user = this.$root.user;
      resolve({
          username: user.username,
          user: user       
      })
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