<template>
  <TrafficLightSection :traffic-light-visual="{ isGreenOn: true }" :time="15" next-url="/yellow" pass-url="/red"/>
</template>

<script>
import TrafficLightSection from "@/components/TrafficLightSection";
export default {
  name: "Green",
  components: {TrafficLightSection}
}
</script>

<style scoped>

</style>