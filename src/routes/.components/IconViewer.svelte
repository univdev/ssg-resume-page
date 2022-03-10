<style lang="less">
  .icon-viewer {
    width: 100%;
    text-align: center;
    .icon {
      font-size: 48px;
      margin-bottom: 18px;
    }
    .content {
      font-size: 28px;
      font-family: 'Courier New', Courier, monospace;
    }
  }
</style>

<template lang="pug">
  .icon-viewer
    i(class="icon {icon}")
    .content
      slot
</template>

<script lang="ts">
  export let icon:String;
</script>