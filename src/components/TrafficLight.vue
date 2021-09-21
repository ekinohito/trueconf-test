<template>
  <div class="traffic-light">
    <Light color="#F44336" :is-on="isRedOn"/>
    <Light color="#FFEB3B" :is-on="isYellowOn"/>
    <Light color="#4CAF50" :is-on="isGreenOn"/>
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
  },
  components: {Light}
}
</script>

<style scoped>

</style>