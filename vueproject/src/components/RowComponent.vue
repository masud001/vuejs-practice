<template>
  <tr>
    <th scope="row">{{index}}</th>
    <td>
      <slot name="firstName" :val="user.firstName" :row="user">
      {{user.firstName}}
      </slot>
    </td>
    <td>{{user.lastName}}</td>
    <td>{{user.email}}</td>
    <td>{{user.email}}</td>
  </tr>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IViewUser} from "@/interfaces/iViewUser";

export default defineComponent({
  name: "RowComponent",
  props:{
    user:{
      type:Object as PropType<IViewUser>,
      required:true
    },
    index:{
      type:Number,
      required:true
    }
  },
  setup(){
    return{
    }
  }
});
</script>

<style scoped>

</style>