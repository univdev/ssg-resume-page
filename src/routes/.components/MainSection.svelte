<style lang="less">
  .main {
    background-color: #EFEFEF;
    position: relative;
    background-position: center;
    background-size: cover;
    .background-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(1, 3, 38, .5);
    }
    .container {
      position: relative;
      max-width: 1240px;
      width: 100%;
      padding-top: calc(120px + 60px);
      padding-bottom: 200px;
      margin: auto;
      z-index: 1;
      @media screen and (max-width: 768px) {
        padding-top: calc(40px + 60px);
      }
      .title {
        text-align: center;
        color: white;
        font-size: 64px;
        font-family: 'Black Han Sans', 'Noto Sans KR';
        @media screen and (max-width: 768px) {
          font-size: 48px;
        }
      }
      .description {
        text-align: center;
        color: white;
        margin-top: 16px;
        font-size: 24px;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          margin-bottom: 24px;
        }
      }
    }
    .references {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 48px;
      .references__item {
        display: block;
        & + .references__item {
          margin-left: 16px;
        }
      }
    }
  }
</style>

<template>
  <section
    class="main"
    style="background-image: url('{MainBackgroundImage}')">
    <div class="background-mask"></div>
    <div class="container">
      <h1 class="title">
        {'{{ '}박찬영{' }}'}<br>
        <TypingAnimation
          items="{descriptions}"></TypingAnimation>
        {#each descriptions as description}
          <div
            aria-label="{description}"
            aria-hidden="true"></div>
        {/each}
      </h1>
      <p class="description">
        풍부한 프로젝트 리딩 경험을 겸비한 프로그래머 박찬영입니다<br>
        논리에 기반한 사고를 바탕으로 보다 깔끔한 코드와 알고리즘을 구현하려고 노력합니다.
      </p>
      <nav class="references">
        <a
          target="_blank"
          href="https://github.com/univdev"
          class="github-link references__item">
          <GithubButton></GithubButton>
        </a>
        <a
          target="_blank"
          href="https://univdev.notion.site"
          class="notion-link references__item">
          <NotionButton></NotionButton>
        </a>
      </nav>
    </div>
  </section>
</template>

<script lang="ts">
  import MainBackgroundImage from 'images/main-background.jpg';
  import TypingAnimation from '../../components/TypingAnimation.svelte';
  import GithubButton from '../../components/GithubButton.svelte';
  import NotionButton from '../../components/NotionButton.svelte';
  
  export let descriptions: Array<string>;
</script>
