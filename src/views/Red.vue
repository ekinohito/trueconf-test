<template>
  <TrafficLightSection :traffic-light-visual="{isRedOn: true }" :time-interval="10" next-url="/yellow" pass-url="/green"/>
</template>

<script>
import TrafficLightSection from "@/components/TrafficLightSection";
export default {
  name: "Red",
  metaInfo: {
    title: "Красный"
  },
  components: {TrafficLightSection}
}
</script>

<style scoped>

</style>