<style lang="less">
</style>

<svelte:head>
  <title>프론트엔드 개발자, 박찬영입니다!</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet">
  <meta property="title" content="프론트엔드 개발자, 박찬영입니다!">
  <meta property="description" content="경험이 풍부한, 배움을 멈출줄 모르는, 리딩 경험이 있는, 프론트엔드 개발자 박찬영입니다!">
  <meta property="og:title" content="프론트엔드 개발자, 박찬영입니다!">
  <meta property="og:description" content="경험이 풍부한, 배움을 멈출줄 모르는, 리딩 경험이 있는, 프론트엔드 개발자 박찬영입니다!">
</svelte:head>

<template lang="pug">
  MainSection(descriptions="{descriptions}")
  AboutSection
</template>

<script lang="ts" context="module">
  export async function preload() {
    const response = await this.fetch('/descriptions');
    const descriptions = await response.json();
    return { descriptions };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import Document from '../stores/document';
  import MainSection from './.components/MainSection.svelte';
  import AboutSection from './.components/AboutSection.svelte';
	import CountCard from './.components/CountCard.svelte';

  export let descriptions: Array<string>;

  let currentDocument = null;

  const documentSubscriber = Document.subscribe((d) => {
    currentDocument = d;
  });

  onMount(() => {
    const scrollEvent = window.addEventListener('scroll', () => {
      const { scrollY } = window;
      if (scrollY <= 80 && !currentDocument.isTop) Document.update((current) => ({ ...current, isTop: true }));
      if (scrollY > 80 && currentDocument.isTop) Document.update((current) => ({ ...current, isTop: false }));
    });
    return () => {
      window.clearInterval(scrollEvent);
      documentSubscriber();
    };
  });
</script>