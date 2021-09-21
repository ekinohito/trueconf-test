<template>
  <TrafficLightSection :traffic-light-visual="{ isRedOn: true }" :time="10" next-url="/yellow" pass-url="/green"/>
</template>

<script>
import TrafficLightSection from "@/components/TrafficLightSection";
export default {
  name: "Red",
  components: {TrafficLightSection}
}
</script>

<style scoped>

</style>