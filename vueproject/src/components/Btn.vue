<template>

  <button class="btn btn-primary text-capitalize">
    <slot name="label">
{{label}}
    </slot>
    <slot/>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Btn",
  props: {
    label: {
      type: String,
      required: true
    }
  },
});
</script>

<style scoped>

</style>