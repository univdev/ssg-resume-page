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
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      max-width: 1240px;
      width: 100%;
      min-height: 480px;
      margin: auto;
      z-index: 1;
      .title {
        text-align: center;
        color: white;
        font-size: 64px;
        font-family: 'Black Han Sans', 'Noto Sans KR';
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
        경험이 풍부한 젊은 개발자
</template>

<script lang="ts">
  import MainBackgroundImage from 'images/main-background.jpg';
</script>
