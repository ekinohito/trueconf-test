<template>
  <div>00:{{this.time.toString().padStart(2, "0")}}</div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    time: { type: Number, default: 0 }
  }
}
</script>

<style scoped>
  div {
    font-size: 4rem;
    font-weight: bold;
    color: #2c3e50;
  }
</style>