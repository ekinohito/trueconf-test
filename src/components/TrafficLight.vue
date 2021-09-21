<template>
  <div class="traffic-light">
    <Light color="#F44336" :is-on="isRedOn" :is-blinking="isBlinking"/>
    <Light color="#FFEB3B" :is-on="isYellowOn" :is-blinking="isBlinking"/>
    <Light color="#4CAF50" :is-on="isGreenOn" :is-blinking="isBlinking"/>
  </div>
</template>

<script>
import Light from "@/components/Light";
export default {
  name: "TrafficLight",
  props: {
    isRedOn: { type: Boolean, default: false },
    isYellowOn: { type: Boolean, default: false },
    isGreenOn: { type: Boolean, default: false },
    isBlinking: { type: Boolean, default: false }
  },
  components: {Light}
}
</script>

<style scoped>
  .traffic-light {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    background-color: #2c3e50;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0 0 10px black;
  }

  .traffic-light>* {
    margin: 5px;
  }
</style>