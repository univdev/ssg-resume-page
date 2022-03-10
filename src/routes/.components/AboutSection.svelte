<style lang="less">
  .about-section {
    .container {
      max-width: 1280px;
      width: 100%;
      margin: auto;
      padding: 0 16px;
      position: relative;
    }
    :global(.count-card) {
      box-shadow: 0 0 8px rgba(0, 0, 0, .2);
      transform: translateY(-50%);
    }
    .title {
      font-family: 'Black Han Sans', 'Noto Sans KR';
      text-align: center;
      font-size: 32px;
    }
    .row {
      display: flex;
      align-items: center;
      .about-column {
        padding-top: 28px;
        padding-bottom: 28px;
      }
    }
  }
</style>

<template lang="pug">
  section.about-section
    .container
      CountCard.count-card
      h2.title ABOUT ME
      .row
        .about-column.col-lg-4
          IconViewer(icon="fab fa-github") Univdev
        .about-column.col-lg-4
          IconViewer(icon="fab fa-github") Univdev
        .about-column.col-lg-4
          IconViewer(icon="fab fa-github") Univdev
</template>

<script lang="ts">
  import CountCard from './CountCard.svelte';
  import IconViewer from './IconViewer.svelte';
</script>