<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="card">
            <img src="https://via.placeholder.com/300" alt="">
          <div class="card-body">
            <h2 class="card-title fw-bolder">{{ title }}</h2>
          </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    title: {
      type:String,
      required:true
    },

  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
