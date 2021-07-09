<template>
  <!--registration form -->
  <div class="card mt-4">
    <div class="card-body">
      <h5 class="card-title text-capitalize">registration form</h5>
      <Input v-model="user.firstName" label="First Name" placeholder="First Name" class="btn"/>
      <Input v-model="user.lastName" label="Last Name" placeholder="Last Name"/>
      <Input v-model="user.email" label="Email" placeholder="example.com"/>
      <Input v-model="user.password" label="Password" placeholder="*******"/>
      <btn label="Sign Up" @click="save" habijabi="7">
       <h1 v-text="'hi'"/>
      </btn>
    </div>
  </div>


</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Input from "@/components/Input.vue";
import Btn from "@/components/Btn.vue";
import {IViewUser} from "@/interfaces/iViewUser";

export default defineComponent({
  name: "Registration",
  components: {Btn, Input},
  emits:["submit"],
  setup(props,{emit} ){
    let user = ref<IViewUser>({
      email:'',
      firstName:"",
      lastName:"",
      password:""
    })

    return{
     user,
      save(){
       emit( "submit", user.value);
      },
    }
  }
});
</script>

<style scoped>

</style>