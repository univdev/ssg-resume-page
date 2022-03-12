<style lang="less">
  .typing-animation {
    display: inline-block;
    .character {
      position: relative;
      &:last-of-type {
        &::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          display: block;
          width: 40px;
          height: 5px;
          background-color: white;
          animation: Blink 1s infinite;
        }
      }
    }
  }
  @keyframes Blink {
    from,
    49% {
      opacity: 1;
    }
    50%,
    to {
      opacity: 0;
    }
  }
</style>

<template>
  <div class="typing-animation">
    {#if text.length === 0}
      <span class="character"></span>
    {/if}
    {#each text as character}
      <span class="character">{character}</span>
    {/each}
  </div>
</template>

<script lang="ts">
  import { onMount } from 'svelte';

  export let items: Array<string> = [];

  const stepDelay = 80;
  const nextTextDelay = 1000;
  const eraseDelay = 3500;
  
  let text = [];
  let currentTextIndex = 0;
  let isMounted = false;
  let direction = true;

  const appendCharacterToText = (index) => {
    const currentText = items[currentTextIndex];
    if (!currentText) return false;
    const character = currentText[index];
    if (!character) return false;
    text = [...text, character];
    return true;
  };
  const popCharacterFromText = (index) => {
    if (text.length <= 0) return false;
    text.splice(index, 1);
    text = text;
    return true;
  };
  const startAnimation = (d, isMounted) => {
    if (!isMounted) return;
    if (currentTextIndex >= items.length) currentTextIndex = 0;
    if (currentTextIndex < 0) currentTextIndex = items.length - 1;
    if (d) {
      const interval = window.setInterval(() => {
        if (!appendCharacterToText(text.length)) {
          clearInterval(interval);
          window.setTimeout(() => {
            direction = false;
          }, eraseDelay);
        }
      }, stepDelay);
    }
    if (!d) {
      const interval = window.setInterval(() => {
        if (!popCharacterFromText(text.length - 1)) {
          clearInterval(interval);
          window.setTimeout(() => {
            currentTextIndex += 1;
            direction = true;
          }, nextTextDelay);
        }
      }, stepDelay);
    }
  };
  onMount(() => {
    isMounted = true;
  });

  $: startAnimation(direction, isMounted);
</script>