<style lang="less">
  .about-section {
    .container {
      max-width: 1280px;
      width: 100%;
      margin: auto;
      padding: 0 16px;
      position: relative;
      padding: 0 16px 60px 16px;
    }
    :global(.count-card) {
      box-shadow: 0 0 8px rgba(0, 0, 0, .2);
      transform: translateY(-50%);
      @media screen and (max-width: 768px) {
        transform: translateY(0);
        box-shadow: none;
      }
    }
    .title {
      font-family: 'Black Han Sans', 'Noto Sans KR';
      text-align: center;
      font-size: 32px;
    }
    .row {
      .about-column {
        padding-top: 28px;
        padding-bottom: 28px;
        a {
          color: inherit;
          text-decoration: none;
        }
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
        .about-column.col-lg-4.col-md-12
          a(
            target="_blank"
            href="https://github.com/univdev")
            IconViewer(icon="fab fa-github") Univdev
        .about-column.col-lg-4.col-md-12
          a(
            target="_blank"
            href="https://univdev.page")
            IconViewer(icon="fas fa-blog") Tech Blog
        .about-column.col-lg-4.col-md-12
          a(
            target="_blank"
            href="https://best.univdev.page")
            IconViewer(icon="fas fa-thumbs-up") Recommendations
</template>

<script lang="ts">
  import CountCard from './CountCard.svelte';
  import IconViewer from './IconViewer.svelte';
</script>