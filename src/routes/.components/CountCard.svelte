<style lang="less">
  .count-card {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    .count-card__item {
      display: flex;
      align-items: center;
      padding: 40px 0;
      &:last-of-type {
        .card-container {
          border-right: none;
        }
      }
      .card-container {
        width: 100%;
        text-align: center;
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
    @media screen and (max-width: 768px) {
      border-radius: 0;
      padding: 20px 0;
      .count-card__item {
        padding: 20px 0;
      }
    }
  }
</style>

<template lang="pug">
  article.count-card
    .row
      .count-card__item.col-lg-4.col-md-12
        .card-container
          .title Repositories
          .content
            NumberViewer(
              number="{repositoryCount}")
      .count-card__item.col-lg-4.col-md-12
        .card-container
            .title Commits
            .content
              NumberViewer(
                number="{commitCount}")
      .count-card__item.col-lg-4.col-md-12
        .card-container
            .title Stars
            .content
              NumberViewer(
                number="{starCount}")
</template>

<script lang="ts">
  import NumberViewer from "../../components/NumberViewer.svelte";
  
  export let repositoryCount: Number;
  export let commitCount: Number;
  export let starCount: Number;
</script>