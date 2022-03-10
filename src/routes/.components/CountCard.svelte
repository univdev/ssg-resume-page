<style lang="less">
  .count-card {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: white;
    border-radius: 8px;
    min-height: 160px;
    .count-card__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      flex: 1;
      flex-basis: 1;
      &:not(:last-of-type) {
        border-right: 1px solid #EEE;
      }
      .title {
        font-weight: bold;
        font-size: 18px;
        text-align: center;
      }
      .content {
        font-weight: bold;
        font-size: 32px;
        margin-top: 8px;
      }
    }
  }
</style>

<template lang="pug">
  article.count-card
    .count-card__item
      .title Commit Count
      .content
        NumberViewer(
          number="1024")
    .count-card__item
      .title Commit Count
      .content 1,024
    .count-card__item
      .title Commit Count
      .content 1,024
</template>

<script lang="ts">
  import NumberViewer from "../../components/NumberViewer.svelte";
</script>