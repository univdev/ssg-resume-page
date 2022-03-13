<style lang="less">
  .about-section {
    background-color: #F2E088;
    .container {
      max-width: 1280px;
      width: 100%;
      margin: auto;
      padding: 0 16px;
      position: relative;
      padding: 60px 16px;
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
      margin-top: 32px;
      .about-column {
        padding-top: 28px;
        padding-bottom: 28px;
        text-align: center;
        a {
          color: inherit;
          text-decoration: none;
        }
        .contact-title {
          font-size: 18px;
          font-family: 'Black Han Sans', 'Noto Sans KR';
        }
        .contact-description {
          margin-top: 16px;
          text-align: center;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
</style>

<template lang="pug">
  section.about-section
    .container
      h2.title Contact Me
      .row
        .about-column.col-lg-4.col-md-12
          a(
            target="_blank"
            href="https://github.com/univdev")
            IconViewer(icon="fab fa-github")
            .contact-title Github
            .contact-description.
              TIL, 토이 프로젝트 등 다양한 소스코드가#[br]
              게시되어 있습니다. 1일 1커밋도 진행중입니다!
        .about-column.col-lg-4.col-md-12
          a(
            target="_blank"
            href="https://univdev.page")
            IconViewer(icon="fas fa-blog")
            .contact-title Tech Blog
            .contact-description.
              개발하면서 겪었던 트러블 슈팅 경험 혹은#[br]
              개발 기술 및 일상 생활을 게시합니다.
        .about-column.col-lg-4.col-md-12
          a(
            target="_blank"
            href="https://best.univdev.page")
            IconViewer(icon="fas fa-thumbs-up")
            .contact-title Recommendations
            .contact-description.
              추천사를 받고 있습니다!#[br]
              긍정적인 경험이라면 한마디 씩 남겨주실 수 있습니다!
</template>

<script lang="ts">
  import CountCard from './CountCard.svelte';
  import IconViewer from '../../components/IconViewer.svelte';
</script>