<style lang="less">

</style>

<template lang="pug">
  .number-viewer {displayNumber}
</template>

<script lang="ts">
  export let number: number = 0;
  export let duration: number = 3500;

  let displayNumber: number = 0;
</script>