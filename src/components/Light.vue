<template>
  <div class="light" :class="{on: isOn}" :style="{backgroundColor: this.color}"/>
</template>

<script>
export default {
  name: "Light",
  props: {
    color: { type: String, default: "#AAAAAA" },
    isOn: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
  .light {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: inset 0 0 60px black;
    opacity: 50%;
  }

  .light.on {
    box-shadow: inset 0 0 10px black;
    opacity: 100%;
  }
</style>