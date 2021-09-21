<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TrafficLight is-green-on/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TrafficLight from "@/components/TrafficLight";

export default {
  name: 'Home',
  components: {
    TrafficLight,
    HelloWorld
  }
}
</script>
