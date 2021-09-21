<template>
  <TrafficLightSection :traffic-light-visual="{ isYellowOn: true }" :time-interval="3" next-url="/green"/>
</template>

<script>
import TrafficLightSection from "@/components/TrafficLightSection";
export default {
  name: "Yellow",
  metaInfo: {
    title: "Желтый",
  },
  components: {TrafficLightSection}
}
</script>

<style scoped>

</style>