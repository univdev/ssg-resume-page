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
      transform: translateY(-50%);
      box-shadow: 0 0 25px rgba(0, 0, 0, .2);
    }
    .title {
      font-family: 'Black Han Sans', 'Noto Sans KR';
      text-align: center;
      font-size: 32px;
    }
    .row {
      margin-top: 48px;
      .about-title {
        font-size: 24px;
        margin-bottom: 16px;
      }
      .about-description {
        font-size: 18px;
        .link {
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
      CountCard.count-card(
        commitCount="{commitCount}"
        starCount="{starCount}")
      h2.title ABOUT ME
      .row
        .about-column.col-lg-3.col-md-6.col-sm-12
          IconViewer(
            icon="fas fa-briefcase")
            b.about-title 경력
            p.about-description 3년 5개월 (4년차)
        .about-column.col-lg-3.col-md-6.col-sm-12
          IconViewer(
            icon="fas fa-cake")
            b.about-title 생일
            p.about-description.
              98년 9월 15일#[br](만 23세)
        .about-column.col-lg-3.col-md-6.col-sm-12
          IconViewer(
            icon="fas fa-envelope")
            b.about-title 이메일
            p.about-description
              a.link(
                href="mailto:pcydeveloper@gmail.com").
                pcydeveloper@gmail.com
        .about-column.col-lg-3.col-md-6.col-sm-12
          IconViewer(
            icon="fas fa-phone")
            b.about-title 연락처
            p.about-description
              a.link(
                href="tel:01032273768") 010-3227-3768
</template>

<script lang="ts">
  import CountCard from './CountCard.svelte';
  import IconViewer from '../../components/IconViewer.svelte';

  export let commitCount: Number;
  export let starCount: Number;
</script>