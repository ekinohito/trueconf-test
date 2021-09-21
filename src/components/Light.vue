<template>
  <div class="light" :class="{on: isOn, blink: isBlinking}" :style="{'--color': color}"/>
</template>

<script>
export default {
  name: "Light",
  props: {
    color: { type: String, default: "#AAAAAA" },
    isOn: { type: Boolean, default: false },
    isBlinking: { type: Boolean, default: false },
  }
}
</script>

<style scoped>
/*
  .light {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: inset 0 0 60px black;
    opacity: 50% !important;
  }
  */

  /*noinspection CssUnresolvedCustomProperty*/
  .light {
    background-color: var(--color);
  }

  /*
    .light.on {
      box-shadow: inset 0 0 10px black;
      opacity: 100% !importan    }
  /*
    .light.on.blink {
      animation: blink 0.5s;
      animation-iteration-count: infinite;
    }

    @keyframes blink {
      0% { box-shadow: inset 0 0 10px black; opacity: 100%; }
      50% { box-shadow: inset 0 0 60px black; opacity: 50%; }
      100% { box-shadow: inset 0 0 10px black; opacity: 100%; }
    }*/
</style>