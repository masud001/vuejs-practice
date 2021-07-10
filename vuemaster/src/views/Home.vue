<template>
  <div class="home">
<!--    <HelloWorld title="Welcome Vue.js + TypeScript"/>-->
    <div class="container">
      <div class="row">
<!--        child component -->
        <div class="col-md-4 my-3" v-for="user in users">
            <ChildComponent :info="moreInfo" :age="user.age" :img-url="user.img" :name="user.name" :email="user.email"/>
        </div>
        <div class="col-md-4">
          <CardComponent
              image="https://via.placeholder.com/300"
              data="user"
              title="card title"
              text="card text"
              text2="read more"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import CardComponent from "@/components/CardComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";
import {IUsers} from "@/interfaces/iUsers"; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ChildComponent,
    CardComponent,
    HelloWorld,
  },

  setup(props){
    let users:Array<IUsers> =[
      {name:'Muhammad Ali', age:30, email:'muhammad@gmail.com', img:'https://i.pravatar.cc/150?img=4'},
      {name:"Masudur Rahman", age:30, email:'masud@gmail.com', img:'https://i.pravatar.cc/150?img=2'},
      {name:"Akram Hossain Dollar ", age:30, email:'dollar@gmail.com', img:'https://i.pravatar.cc/150?img=3'},
      {name:"Dalia", age:30, email:'dalia@gmail.com', img:'https://i.pravatar.cc/150?img=1'},
    ];
    function moreInfo(e:any) {
      return console.log('clicked',e);
    }

    return{
      users,
      moreInfo

    }
  }
});
</script>
