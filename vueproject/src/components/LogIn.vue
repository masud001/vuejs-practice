<template>
  <div class="card mt-4">
    <div class="card-body">
      <h5 class="card-title text-capitalize">Login form</h5>
      <Input label="User Name" placeholder="User Name" />
      <Input label="Password" placeholder="Password" />
      <Btn label="log in"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Input from "@/components/Input.vue";
import Btn from "@/components/Btn.vue";

export default defineComponent({
  name: "LogIn",
  components: {Btn, Input}
});
</script>

<style scoped>

</style>