<template>
  <div class="card shadow-lg p-3">
    <img :src="imgUrl" :alt="imgUrl">
    <div class="card-body">
      <h6> Name: <span class="fw-bolder">
      {{ name }}
    </span>
      </h6>
      <h6> Email: <span class="fw-bolder">
      {{ email }}
    </span>
      </h6>
      <h6>Age : <span class="fw-bolder">{{ age }}</span></h6>
      <button @click="info(name)" type="button" class="btn btn-info mt-3 mb-3 text-capitalize">more info</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "ChildComponent",
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    info: {
      type: Function,
      required: true
    }
  }
});
</script>

<style scoped>

</style>