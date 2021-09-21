<template>
  <div>
    <Timer :time="this.time"/>
    <TrafficLight v-bind="this.trafficLightVisual" :is-blinking="time <= 3"/>
  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight";
import router from "@/router";
import Timer from "@/components/Timer";

export default {
  name: "TrafficLightSection",
  props: {
    trafficLightVisual: {type: Object},
    nextUrl: {type: String, default: ""},
    passUrl: {type: String, default: null},
    timeInterval: {type: Number, default: 10}
  },
  data: function () {return {
      time: this.timeInterval,
      actualNextUrl: this.nextUrl
    }
  },
  mounted: function () {
    const persistedUrl = localStorage.getItem("currentUrl")
    if (persistedUrl === router.currentRoute.path) {
      const nextUrl = localStorage.getItem("nextUrl")
      if (nextUrl) this.actualNextUrl = nextUrl
      localStorage.removeItem("nextUrl")
      const time = localStorage.getItem("time")
      if (time) this.time = JSON.parse(time)
    } else {
      localStorage.setItem("currentUrl", router.currentRoute.path)
    }
    this.intervalId = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    updateTime: function () {
      this.time -= 1
      localStorage.setItem("time", JSON.stringify(this.time))
      if (this.time <= 0) {
        if (this.passUrl) {
          localStorage.setItem("nextUrl", this.passUrl)
        }
        localStorage.removeItem("time")
        localStorage.setItem("currentUrl", this.actualNextUrl)
        router.push(this.actualNextUrl)
      }
    }
  },
  components: {
    Timer,
    TrafficLight
  }
}
</script>

<style scoped>

</style>