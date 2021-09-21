<template>
  <div>
    {{this.remainingTime}}
    <TrafficLight v-bind="this.trafficLightVisual"/>
  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight";
import router from "@/router";

export default {
  name: "TrafficLightSection",
  props: {
    trafficLightVisual: {type: TrafficLight.props, default: {}},
    nextUrl: {type: String, default: ""},
    passUrl: {type: String, default: null},
    time: {type: Number, default: 10}
  },
  data: function () {return {
      remainingTime: this.time,
      actualNextUrl: this.nextUrl
    }
  },
  mounted: function () {
    const nextUrl = localStorage.getItem("nextUrl")
    if (nextUrl) this.actualNextUrl = nextUrl
    localStorage.removeItem("nextUrl")
    const time = localStorage.getItem("time")
    if (time) this.remainingTime = JSON.parse(time)
    this.intervalId = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    updateTime: function () {
      localStorage.setItem("time", JSON.stringify(this.remainingTime))
      this.remainingTime -= 1
      if (this.remainingTime <= 0) {
        if (this.passUrl) {
          localStorage.setItem("nextUrl", this.passUrl)
        }
        localStorage.removeItem("time")
        router.push(this.actualNextUrl)
      }
    }
  },
  components: {
    TrafficLight
  }
}
</script>

<style scoped>

</style>