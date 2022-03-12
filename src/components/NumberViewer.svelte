<style lang="less">

</style>

<template lang="pug">
  .number-viewer {Math.ceil(displayNumber)}
</template>

<script lang="ts">
  import { onMount, tick } from 'svelte';

  export let number: number = 0;
  export let duration: number = 3500;

  let displayNumber: number = 0;
  let isMounted: boolean = false;
  let animationInterval: number = null;
  

  onMount(() => {
    isMounted = true;
    return () => window.clearInterval(animationInterval);
  });

  $: startAnimation(number, isMounted);

  const startAnimation = async (destination: number, isClient: boolean) => {
    if (!isClient) return;
    window.clearInterval(animationInterval);
    const fps = 60;
    const diff = destination - displayNumber;
    const isNegative = diff < 0;
    const frames = (duration / 1000) * fps;
    const step = diff / frames;
    animationInterval = window.setInterval(() => {
      displayNumber += step;
      if (isNegative && displayNumber < destination) {
        displayNumber = destination;
        window.clearInterval(animationInterval);
      }
      if (!isNegative && displayNumber > destination) {
        displayNumber = destination;
        window.clearInterval(animationInterval);
      }
    }, frames / fps);
  };
</script>