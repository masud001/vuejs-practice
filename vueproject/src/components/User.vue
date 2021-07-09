<template>
<div>
  <h1>My name is : {{user.name}}</h1>
  <h2>age is : {{user.age}}</h2>
</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IUser} from "@/interfaces/iUser";

export default defineComponent({
  name:"UserView",
  props:{
    user:{
      type:Object as PropType<IUser>,
      required:true
    }
  },
  setup(){
    return{}
  }
});
</script>

<style scoped>

</style>