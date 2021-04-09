<template>
  <q-page class="" padding>
    <!-- <q-input 
    v-model="message" 
    @keyup.esc="clearMessage" 
    @keyup.enter="alertMessage" 
    label="Enter Your Name" />
    <h1 class="text-h4" @click="counter+=1">{{counter}}</h1>
    <h4 v-if="message.length" class="text-weight-thin text-center border-gray">{{message}}</h4>
    <h4 v-else class="text-weight-thin text-center border-gray">Write some thing on the text Box...</h4>
    <h4 class="text-weight-thin text-center border-gray" >{{messageUpperCase }}</h4>
     <div class="text-center">
       <q-btn @click="clearMessage"  color="white" text-color="black" label="click Me" />
     </div> -->
  </q-page>
</template>

// NOTE: Only for js Script
<script>
export default {
  // data() {
  //   return {
  //     message: "I don't love Vue.js",
  //     counter: 0
  //   };
  // },
  // computed: {
  //   messageUpperCase() {
  //     console.log("fired...");
  //     return this.message.toUpperCase();
  //   }
  // },
  // methods: {
  //   clearMessage() {
  //     this.message = "";
  //   },
  //   handelKey(e) {
  //     console.log("key press event", e);
  //     if (e.keyCode == 27) {
  //       this.clearMessage();
  //     }
  //   },
  //   alertMessage() {
  //     alert(this.message);
  //   }
  // },
  // filters: {
  //   toloawercase: value => {
  //     return value.toLowerCase() + "...";
  //   }
  // }
};
</script>

<style>
/* .border-gray {
  border: 2px solid gray;
  padding: 15px;
} */
</style>
