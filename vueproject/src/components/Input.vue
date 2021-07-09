<template>
  <div class="mb-3">
    <label class="form-label" :for="name">{{label}}</label>
    <input v-model="val" :type="type"  class="form-control" :id="name" :placeholder="placeholder">
  </div>

</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';

export default defineComponent({
  name: "Input",
  props:{
    modelValue:{
      type:String,
      required:true
    },
    label:{
      type:String,
      required:true
    },
    placeholder:{
      type:String,
      required:true
    },
    type:{
      type:String
    },
    name:{
      type:String,
      required:true
    },
  },

  emits:["update:modelValue"],

  setup(props,{emit,attrs}){
    let val=ref<String>(props.modelValue)
    watch(val,(n,o)=>{
     emit("update:modelValue",n)
    })
    return{
      val
    }
  }
});
</script>

<style scoped>

</style>