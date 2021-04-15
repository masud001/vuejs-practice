<template>
  <q-page class="" padding>
    <!-- <q-input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      label="Enter Your Name"
    />
    <h1 class="text-h4" @click="counter += 1">{{ "click me" }}</h1>
    <h4 v-if="message.length" class="text-weight-thin text-center border-gray">
      {{ message }}
    </h4>
    <h4 v-else class="text-weight-thin text-center border-gray">
      Write some thing on the text Box...
    </h4>
    <h4 v-show="false">v-show</h4>
    <h4 class="text-weight-thin text-center border-gray">
      {{ messageUpperCase() }}
    </h4>
    <div class="text-center">
      <q-btn
        @click="clearMessage"
        color="white"
        text-color="black"
        label="click Me"
      />
    </div> -->
    <!-- v-for loops  -->
    <h1 class="text-h6 q-mt-none q-mb-md">v-for loop</h1>
    <div class="q-pa-md" style="max-width: 550px">
      <task class="q-pa-md"></task>
    </div>
  </q-page>
</template>

// NOTE: Only for js Script
<script>
// import Tasks from "components/Tasks.vue";
export default {
  components: {
    task: require("components/Tasks.vue").default
  },
  data() {
    return {
      message: "I don't love Vue.js",
      counter: 0
    };
  },
  computed: {},
  methods: {
    clearMessage() {
      this.message = "";
    },
    handelKey(e) {
      console.log("key press event", e);
      if (e.keyCode == 27) {
        this.clearMessage();
      }
    },
    alertMessage() {
      console.log("alert");
      alert(this.message);
    },
    messageUpperCase() {
      console.log("fired...");
      return this.message.toUpperCase();
    }
  },
  filters: {
    toloawercase: value => {
      return value.toLowerCase() + "...";
    }
  }
};
</script>

<style>
/* .border-gray {
  border: 2px solid gray;
  padding: 15px;
} */
</style>
