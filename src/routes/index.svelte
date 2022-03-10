<style lang="less">
</style>

<svelte:head>
  <title>프론트엔드 개발자, 박찬영입니다!</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet">
</svelte:head>

<template lang="pug">
  MainSection
  AboutSection
</template>

<script>
  import MainSection from './.components/MainSection.svelte';
  import AboutSection from './.components/AboutSection.svelte';
	import CountCard from './.components/CountCard.svelte';
</script>