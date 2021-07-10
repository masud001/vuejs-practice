<template>
  <div class="card">
    <img :src="image" :alt="image" class="img-fluid">
    <div class="card-body">
      <h5 class="card-title text-capitalize fw-bold">{{ title }}</h5>
      <p class="card-text fw-light">{{ text }}</p>
      <button class="btn btn-primary text-capitalize">{{ text2 }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>

</style>