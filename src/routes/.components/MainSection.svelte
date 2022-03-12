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
      background-color: rgba(0, 0, 0, .4);
    }
    .container {
      position: relative;
      max-width: 1240px;
      width: 100%;
      padding-top: calc(120px + 60px);
      padding-bottom: 200px;
      margin: auto;
      z-index: 1;
      .title {
        text-align: center;
        color: white;
        font-size: 64px;
        font-family: 'Black Han Sans', 'Noto Sans KR';
      }
      .description {
        text-align: center;
        color: white;
        margin-top: 16px;
        font-size: 24px;
      }
    }
  }
</style>

<template lang="pug">
  section.main(style="background-image: url('{MainBackgroundImage}')")
    .background-mask
    .container
      h1.title.
        {'{{ '}박찬영{' }}'}#[br]
        #[TypingAnimation(items="{descriptions}")]
      p.description.
        풍부한 프로젝트 리딩 경험을 겸비한 프로그래머 박찬영입니다.#[br]
        논리에 기반한 사고를 바탕으로 보다 깔끔한 코드와 알고리즘을 구현하려고 노력합니다.
</template>

<script lang="ts">
  import { onMount } from 'svelte';
  import MainBackgroundImage from 'images/main-background.jpg';
  import TypingAnimation from '../../components/TypingAnimation.svelte';
  
  export let descriptions: Array<string>;
</script>
