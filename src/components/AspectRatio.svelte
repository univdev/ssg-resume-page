<style lang="less">
  .aspect-ratio {
    position: relative;
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>

<div
  class="aspect-ratio"
  style="padding-bottom: {ratio}%">
  <div class="content">
    <slot></slot>
  </div>
</div>

<script lang="ts">
  export let ratio = 50;
</script>