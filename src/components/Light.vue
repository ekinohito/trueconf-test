<template>
  <div class="light" :class="{on: isOn, blink: isBlinking}" :style="{backgroundColor: color}"/>
</template>

<script>
export default {
  name: "Light",
  props: {
    color: {type: String, default: "#AAAAAA"},
    isOn: {type: Boolean, default: false},
    isBlinking: {type: Boolean, default: false},
  }
}
</script>

<style scoped>
.light {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: inset 0 0 60px 20px black;
}

.light.on {
  box-shadow: inset 0 0 10px black;
  animation: light-up 0.25s ease normal;
}

.light.on.blink {
  animation-name: blink;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-delay: 0.25s;
}

@keyframes light-up {
  0% {
    box-shadow: inset 0 0 60px black;
  }
  100% {
    box-shadow: inset 0 0 10px black;
  }
}

@keyframes blink {
  0% {
    box-shadow: inset 0 0 10px black;
  }
  50% {
    box-shadow: inset 0 0 60px black;
  }
  100% {
    box-shadow: inset 0 0 10px black;
  }
}
</style>