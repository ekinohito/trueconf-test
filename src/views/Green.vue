<template>
  <TrafficLightSection :traffic-light-visual="{ isGreenOn: true }" :time-interval="15" next-url="/yellow" pass-url="/red"/>
</template>

<script>
import TrafficLightSection from "@/components/TrafficLightSection";
export default {
  name: "Green",
  metaInfo: {
    title: "Зеленый"
  },
  components: {TrafficLightSection}
}
</script>

<style scoped>

</style>