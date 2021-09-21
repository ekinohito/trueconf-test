<template>
  <TrafficLightSection :traffic-light-visual="{ isYellowOn: true }" :time="3" next-url="/green"/>
</template>

<script>
import TrafficLightSection from "@/components/TrafficLightSection";
export default {
  name: "Yellow",
  components: {TrafficLightSection}
}
</script>

<style scoped>

</style>