<style lang="less">
  .about-section {
    .container {
      max-width: 1280px;
      width: 100%;
      margin: auto;
      padding: 120px 0 0;
      position: relative;
    }
    :global(.count-card) {
      position: absolute;
      top: 0;
      right: 50%;
      transform: translate(50%, -50%);
      box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    }
    .title {
      font-family: 'Black Han Sans', 'Noto Sans KR';
      text-align: center;
      font-size: 32px;
    }
  }
</style>

<template lang="pug">
  section.about-section
    .container
      CountCard.count-card
      h2.title ABOUT ME
</template>

<script lang="ts">
  import CountCard from './CountCard.svelte';
</script>