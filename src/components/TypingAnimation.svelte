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
    {#if displayText.length === 0}
      <span class="character"></span>
    {/if}
    {#each displayText as character}
      <span class="character">{character}</span>
    {/each}
  </div>
</template>

<script lang="ts">
  import { onMount } from "svelte";

  export let items: Array<string> = [];

  const stepDelay: number = 100;
  const eraseDelay: number = 3000;
  const nextWordsDelay: number = 1000;
  let index: number = 0;
  let displayText: Array<string> = [];
  let isMounted: boolean = false;
  let interval: number = null;
  
  const startWriteAnimation = (list: Array<string>, isClient: boolean) => {
    if (!isClient) return;
    if (index >= list.length) index = 0;
    if (index < 0) index = list.length - 1;
    const item = list[index] || '';
    const itemLength = item.length;
    if (itemLength <= 0) return;
    interval = window.setInterval(() => {
      const textLength = displayText.length;
      if (textLength == itemLength) {
        window.clearInterval(interval);
        interval = window.setTimeout(() => {
          startEraseAnimation(items);
        }, eraseDelay);
        return;
      }
      const currentWord = item[textLength] || null;
      displayText = [...displayText, currentWord];
    }, stepDelay);
  };
  const startEraseAnimation = (list: Array<string>) => {
    interval = window.setInterval(() => {
      const textLength = displayText.length;
      if (textLength <= 0) {
        window.clearInterval(interval);
        interval = window.setTimeout(() => {
          index += 1;
          startWriteAnimation(list, isMounted);
        }, nextWordsDelay);
        return;
      }
      const result = [...displayText];
      result.splice(displayText.length - 1, 1);
      displayText = result;
    }, stepDelay);
  };

  onMount(() => {
    isMounted = true;
    return () => {
      window.clearTimeout(interval);
      window.clearInterval(interval);
    };
  });

  $: startWriteAnimation(items, isMounted);
</script>