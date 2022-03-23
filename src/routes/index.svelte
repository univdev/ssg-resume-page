<style lang="less">
</style>

<svelte:head>
  <title>프론트엔드 개발자, 박찬영입니다!</title>
  <meta property="title" content="프론트엔드 개발자, 박찬영입니다!">
  <meta property="description" content="경험이 풍부한, 배움을 멈출줄 모르는, 리딩 경험이 있는, 프론트엔드 개발자 박찬영입니다!">
  <meta property="og:title" content="프론트엔드 개발자, 박찬영입니다!">
  <meta property="og:description" content="경험이 풍부한, 배움을 멈출줄 모르는, 리딩 경험이 있는, 프론트엔드 개발자 박찬영입니다!">
</svelte:head>

<template lang="pug">
  MainSection(
    descriptions="{descriptionTexts}")
  AboutSection(
    repositoryCount="{repositories}"
    commitCount="{commitCount}"
    starCount="{starCount}")
  SkillsSection
  CareerSection(
    careers="{careers}")
  ExperienceSection
  AwardSection
  ContactSection
  Footer
</template>

<script lang="ts" context="module">
  import axios from '../../plugins/axios';

  export async function preload() {
    const [
      { data: introductions },
      { data: github },
      { data: careers },
    ] = await Promise.all([
      axios.get('/introductions'),
      axios.get('/github'),
      axios.get('/careers'),
    ]);
    const { result: descriptions } = introductions;
    return {
      descriptions,
      careers: careers.result,
      repositories: github.repositories,
      commitCount: github.commits,
      starCount: github.stars,
    };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import Document from '../stores/document';
  import AwardSection from './.components/AwardSection.svelte';
  import MainSection from './.components/MainSection.svelte';
  import AboutSection from './.components/AboutSection.svelte';
  import ContactSection from './.components/ContactSection.svelte';
  import SkillsSection from './.components/Skills/Section.svelte';
  import ExperienceSection from './.components/ExperienceSection.svelte';
  import CareerSection from './.components/Careers/Section.svelte';
	import CountCard from './.components/CountCard.svelte';
  import Footer from './.components/Footer.svelte';

  export let careers: Array<any>;
  export let descriptions: Array<string>;
  export let repositories: Number;
  export let commitCount: Number;
  export let starCount: Number;

  $: descriptionTexts = [...descriptions].map((description: any) => description.text);

  let currentDocument = null;

  const documentSubscriber = Document.subscribe((d) => {
    currentDocument = d;
  });

  const getApp = async () => {
    const fb = await import('firebase/app');
    const app = fb.getApp();
  };

  onMount(async () => {
    await getApp();
    const scrollEvent: any = window.addEventListener('scroll', () => {
      const { scrollY } = window;
      if (scrollY <= 80 && !currentDocument.isTop) Document.update((current) => ({ ...current, isTop: true }));
      if (scrollY > 80 && currentDocument.isTop) Document.update((current) => ({ ...current, isTop: false }));
    });
    return () => {
      window.removeEventListener('scroll', scrollEvent);
      documentSubscriber();
    };
  });
</script>